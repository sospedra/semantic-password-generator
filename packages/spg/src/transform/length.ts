const DEFAULT_WORD_MAP = [0, 0]

/**
 * Given a desired length break the sentence with the minimum required words.
 */
export default (length: number) => {
  return function transformLength(base: string) {
    const words = base.split(' ')
    const breakingWord = words
      .map<[string, number]>((word) => [word, word.length])
      .reduce((memo, [word, wordLength]) => {
        const lastWordMap = memo[memo.length - 1] || DEFAULT_WORD_MAP
        return memo.concat([[word, wordLength + lastWordMap[1]]])
      }, [])
      .filter(([_, stack]) => stack < length).length

    return words.slice(0, breakingWord + 1).join(' ')
  }
}
