import nlp from 'compromise'

/**
 * Remove non latin chars, etc. That'll cause problems with non-specific
 * keyboard layouts.
 */
export default () => {
  return function transformNormalize(base: string) {
    // @ts-ignore The compromise normalize() signature is not correct on @types
    return nlp(base).normalize().out()
  }
}
