import nlp from 'wink-nlp-utils'
import deburr from 'lodash.deburr'

export default function semantic(extract: string): string[] {
  return [
    nlp.string.removeHTMLTags,
    nlp.string.removeExtraSpaces,
    deburr,
    nlp.string.sentences,
  ]
    .reduce((memo, fn) => fn(memo), extract)
    .map(nlp.string.removePunctuations)
}
