import { $password, $toast } from './elements'

export const addClipboard = async () => {
  $password.addEventListener('click', async () => {
    $password.select()

    if (document.queryCommandSupported('copy')) {
      document.execCommand('copy')

      $toast.style.animation = 'fadein 4s'
      $toast.addEventListener('animationend', () => {
        $toast.style.animation = ''
      })
    }
  })
}
