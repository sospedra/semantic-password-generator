import { $password, $toast } from './elements'

export const addClipboard = async () => {
  // @ts-ignore
  const result = await navigator.permissions.query({ name: 'clipboard-write' })

  $password.addEventListener('click', async () => {
    if (result.state == 'granted' || result.state == 'prompt') {
      await navigator.clipboard.writeText($password.value)
      $toast.style.animation = 'fadein 4s'
      $toast.addEventListener('animationend', () => {
        $toast.style.animation = ''
      })
    } else {
      $password.select()
    }
  })
}
