import spg from 'semantic-password-generator'
import {
  $password,
  $renew,
  $slider,
  $hint,
  $case,
  $leet,
  $random,
  $symbols,
} from './elements'

const updateHint = (password: string) => {
  const length = password.length - 8

  if (length < 18) return ($hint.innerText = 'Weak')
  if (length < 24) return ($hint.innerText = 'Good')
  return ($hint.innerText = 'Strong 💪')
}

export const addGenerator = async () => {
  let generator = await spg()

  const update = () => {
    const password = generator({
      length: Number($slider.value),
      case: $case.checked,
      leet: $leet.checked,
      random: $random.checked,
      symbols: $symbols.checked,
    })

    updateHint(password)
    $password.innerText = password
  }

  update()

  $renew.addEventListener('click', async () => {
    generator = await spg()
    update()
  })
  ;[$case, $leet, $random, $symbols, $slider].forEach(($) => {
    $.addEventListener('change', update)
  })
}
