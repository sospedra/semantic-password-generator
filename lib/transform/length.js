const DEFAULT_WORD_MAP = [0, 0]

/**
 * Given a desired length break the sentence with the minimum required words.
 *
 * @param  {String} base
 * @return {String}
 */
module.exports = (length) => {
  return function transformLength (base) {
    const words = base.split(' ')
    const breakingWord = words
      .map((word) => [word, word.length])
      .reduce((memo, [word, wordLength]) => {
        const lastWordMap = memo[memo.length - 1] || DEFAULT_WORD_MAP
        return memo.concat([[word, wordLength + lastWordMap[1]]])
      }, [])
      .filter(([word, stack]) => stack < length)
      .length

    return words.slice(0, breakingWord + 1).join(' ')
  }
}
