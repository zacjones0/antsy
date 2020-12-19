const ESC = "\x1b[";
const palette = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white"];

// Basic colors
/** Normal foreground color constants */
export const fg: {[key:string]: string} = {};
/** Normal background color constants */
export const bg: {[key:string]: string} = {};

/** Bright foreground color constants */
export const fgbright: {[key:string]: string} = {};
/** Bright background color constants */
export const bgbright: {[key:string]: string} = {};

/**
 * Returns a RGB escape sequence.
 * @param r Red value
 * @param g Green value 
 * @param b Blue value
 * @param foreground True: return foreground value, false: return background value
 * @returns The escape sequence for the RGB values.
 */
export function rgb(r: Number, g: Number, b: Number, foreground: boolean = true): string {
    let mode = foreground ? "3" : "4";
    return `${ESC}${mode}8;2;${r};${g};${b}m`;
}

for (let i = 0; i < palette.length; i++) {
    fg[palette[i]] = `${ESC}3${i}m`;
    bg[palette[i]] = `${ESC}4${i}m`;

    fgbright[palette[i]] = `${ESC}9${i}m`;
    bgbright[palette[i]] = `${ESC}10${i}m`;
}