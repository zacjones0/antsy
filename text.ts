const ESC = "\x1b[";

/** ANSI escape codes for foreground */
export const fore = {
  black: `${ESC}30m`,
  red: `${ESC}31m`,
  green: `${ESC}32m`,
  yellow: `${ESC}33m`,
  blue: `${ESC}34m`,
  magenta: `${ESC}35m`,
  cyan: `${ESC}36m`,
  white: `${ESC}37m`,
  reset: `${ESC}39m`
};

/** ANSI escape codes for background */
export const back = {
  black: `${ESC}40m`,
  red: `${ESC}41m`,
  green: `${ESC}42m`,
  yellow: `${ESC}43m`,
  blue: `${ESC}44m`,
  magenta: `${ESC}45m`,
  cyan: `${ESC}46m`,
  white: `${ESC}47m`,
  reset: `${ESC}49m`
};

/** ANSI escape codes for styling text */
export const style = {
  reset: `${ESC}0m`,
  bold: `${ESC}1m`, // NOTE: This can either be bold or bright depending on the system/user config
  italic: `${ESC}3m`,
  underline: `${ESC}4m`,
  invert: `${ESC}7m`,
};

interface rgbOptions {
  foreground?: boolean;
  background?: boolean;
}

/** Returns an ANSI escape sequence based on RGB values. */
export function rgb(
  rgb: Array<Number>,
  options?: rgbOptions,
): string {
  return `${ESC}${
    options && options.background ? "48" : "38"
  };2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
}
