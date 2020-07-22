declare const DEFAULT_ARGS: {
    case: boolean;
    length: number;
    leet: boolean;
    random: boolean;
    symbols: boolean;
};
declare type Args = number | typeof DEFAULT_ARGS;
export default function createGenerator(sentences?: string[]): (args?: Args) => any;
export {};
