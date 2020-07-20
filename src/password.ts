const MIN_PASSWORD_LENGTH = 8

export const getMaxLength = (sentences: string[]) => {
  return sentences.reduce((memo, { length }) => {
    return length > memo ? length : memo
  }, Number.MIN_SAFE_INTEGER)
}

export const getMinLength = (inputLength: number) => {
  return Math.max(inputLength, MIN_PASSWORD_LENGTH)
}

export const getLength = (inputLength: number, maxLength: number) => {
  return Math.min(getMinLength(inputLength), maxLength)
}
