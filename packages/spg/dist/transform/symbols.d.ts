declare const _default: (isEnabled: boolean) => (base: string) => string;
/**
 * Replace white spaces either by a random symbol or an empty char (remove).
 * Note that this transformer gets rid of the white spaces. Hence has to be
 * the last one always.
 * If it's disabled always return the DEFAULT_SYMBOL
 */
export default _default;
