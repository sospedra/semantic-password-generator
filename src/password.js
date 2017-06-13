const MIN_PASSWORD_LENGTH = 8

const password = module.exports = {}

password.getMaxLength = (sentences) => {
  return sentences
    .concat() // for immutability reasons
    .sort((a, b) => b.length - a.length)
    .find(() => true) // return the first element
    .length
}

password.getMinLength = (inputLength) => {
  return Math.max(inputLength, MIN_PASSWORD_LENGTH)
}

password.getLength = (inputLength, maxLength) => {
  return Math.min(password.getMinLength(inputLength), maxLength)
}
