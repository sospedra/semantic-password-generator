semantic-password-generator
===========================

[![Build Status](https://travis-ci.org/sospedra/semantic-password-generator.svg?branch=master)](https://travis-ci.org/sospedra/semantic-password-generator)
[![dependencies Status](https://david-dm.org/sospedra/semantic-password-generator/status.svg)](https://david-dm.org/sospedra/semantic-password-generator)
[![Code Climate](https://codeclimate.com/github/sospedra/semantic-password-generator/badges/gpa.svg)](https://codeclimate.com/github/sospedra/semantic-password-generator)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Secure passwords that humans can read 🔒💬

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

## Demo

To explore the lib and explore it check out the `/demo` directory. Here's a snapshot of the final component:

```js
import React from 'react'
import spg from 'semantic-password-generator'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.renewGenerator()
    this.state = { password: '' }
  }

  async renewGenerator () {
    this.generator = await spg()
  }

  onClickGenerate () {
    return () => {
      if (this.generator) {
        // always renew the generator to get 100% different passwords
        this.renewGenerator()
        // using the current generator create a new one with default values
        this.setState({
          password: this.generator()
        })
      }
    }
  }

  render () {
    return (
      <div>
        <p>{this.state.password}</p>
        <button onClick={this.onClickGenerate()}>
          Generate
        </button>
      </div>
    )
  }
}
```
