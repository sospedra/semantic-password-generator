semantic-password-generator
===========================

Generate secure password that you can easily read 🔒💬

### Install

```
// pick up your style!
yarn add semantic-password-generator
npm install semantic-password-generator
```

### Usage

The Semantic Password Generator (`spg`) uses the official Wikipedia API to get
random articles which are transformed into the passwords. Hence, to allow a better
usage of the network bandwich `spg` generates the password in 2 steps:

1. Load a generator with a Wikipedia article
2. Use the generator to get passwords

```js
import spg from 'semantic-password-generator'

const generator = await spg()
const password = generator()
```

You can then safely generate multiple (similar) passwords with the same generator.

```js
while (passwords.length < 50) {
  passwords.push(generator())
}
```

The generator **accepts a length argument**. Note that the length won't be enforced.
This means that if you want, say, a 10 chars length password. `spg` probably will return a bit longer one that you can trim if you want to. This is because
`spg` tries to keep a logic sentences as much as possible and forcing a hard length will cut the last word almost all the times.

```js
const spg = require('semantic-password-generator')

spg().then((generator) => {
  const password = generator(32)
})
```

Notice that internally `spg` ensures a minimum password length of 8. And a maximum as large as the Wikipedia article can provide. If you need less than 8 (~~please don't~~) you can trim it. If you want a larger one you can combine multiple generated passwords.
