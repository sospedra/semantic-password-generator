import spg from 'semantic-password-generator'

document.addEventListener('DOMContentLoaded', async () => {
  const $renew = document.querySelector('#js-renew')
  const $toast = document.querySelector('#js-toast')
  const $slider = document.querySelector('#js-slider')
  const $case = document.querySelector('#js-case')
  const $leet = document.querySelector('#js-leet')
  const $random = document.querySelector('#js-random')
  const $symbols = document.querySelector('#js-symbols')
  const $password = document.querySelector('#js-password')
  const permission = await navigator.permissions.query({
    name: 'clipboard-write',
  })
  let generator = await spg()

  $password.addEventListener('click', async () => {
    if (permission.state == 'granted' || permission.state == 'prompt') {
      await navigator.clipboard.writeText($password.value)
      $toast.style.display = 'block'
      setTimeout(() => ($toast.style.display = 'none'), 2000)
    } else {
      $password.select()
    }
  })

  const update = () => {
    const password = generator({
      length: Number($slider.value),
      case: $case.checked,
      leet: $leet.checked,
      random: $random.checked,
      symbols: $symbols.checked,
    })

    $password.value = password
  }

  $renew.addEventListener('click', async () => {
    generator = await spg()
    update()
  })
  ;[$case, $leet, $random, $symbols, $slider].forEach(($) => {
    $.addEventListener('change', update)
  })

  update()
})
