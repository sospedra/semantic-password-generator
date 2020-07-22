import { $password, $toast } from './elements'

export const addClipboard = () => {
  // @ts-ignore
  navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
    if (result.state == 'granted' || result.state == 'prompt') {
      $password.addEventListener('click', async () => {
        await navigator.clipboard.writeText($password.innerText)
        $toast.classList.add('fade-in')
        $toast.addEventListener('animationend', () => {
          $toast.classList.remove('fade-in')
        })
      })
    }
  })
}
