export default function spg(): Promise<(args: number | {
    case: boolean;
    length: number;
    leet: boolean;
    random: boolean;
    symbols: boolean;
}) => string>;
