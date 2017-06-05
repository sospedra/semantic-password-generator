const nlp = require('compromise')
const random = require('lodash.random')

const LENGTH_DEFAULT = 24
const SYMBOLS = '@#$%{}[]()/~,;:.><'.split('')

module.exports = (sentences) => {
  return function generator (length = LENGTH_DEFAULT) {
    const data = sentences.filter((x) => x.length > length)
    const base = data[0]

    if (!base) return null

    const mayusQty = Number.parseInt(length / random(50, 80) * 10)
    const mayusCoords = Array(mayusQty).join(0).split(0).map(() => random(length))
    const password = base
      .replace(/ /g, () => SYMBOLS[random(SYMBOLS.length - 1)])
      .split('')
      .map((char, idx) => mayusCoords.includes(idx) ? char.toUpperCase() : char)
      .slice(0, length)
      .join('')

    return nlp(password).normalize().out()
  }
}
