# semantic-password-generator

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/sospedra/semantic-password-generator/ci)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/semantic-password-generator)](https://bundlephobia.com/result?p=semantic-password-generator)
![npm type definitions](https://img.shields.io/npm/types/typescript)

Secure passwords that humans can read 🗝

### Install

```
yarn add semantic-password-generator
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
This is usefull if you want to tweak it: length, l33t, symbols, etc.

```js
while (passwords.length < 50) {
  passwords.push(generator())
}
```

The generator **accepts a length argument**. Note that the length won't be enforced.
This means that if you want, say, a 10 chars length password. `spg` probably will return a bit longer one that you can trim if you want to. This is because `spg` tries to keep logic sentences as much as possible and forcing a hard length will cut the last word almost all the times.

```js
// accepts a length
generator(32)

// accepts a config object, as well
// these are the defaults
generator({
  case: false,
  length: 24,
  leet: false,
  random: false,
  symbols: false,
})
```

Notice that internally `spg` ensures a minimum password length of 8. And a maximum as large as the Wikipedia article can provide. If you need less than 8 (~~please don't~~) you can trim it. If you want a larger one you can combine multiple generated passwords.

## Example

To explore the lib and explore it check out the `/packages/website` directory. Here's a snapshot of the important bits:

```js
import spg from 'semantic-password-generator'

let generator = await spg()

$renew.addEventListener('click', async () => {
  // create a new generator from another Wikipedia article
  generator = await spg()
  updatePassword(generator())
})

$tweak.addEventListener('change', async () => {
  // generate similar ones, no need to fetch Wikipedia anew
  updatePassword(generator())
})
```
