const ESC = "\x1b[";

interface stringObject {
  [index: string]: string;
}

/** ANSI escape codes for foreground */
export const fore: stringObject = {
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
export const back: stringObject = {
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
export const style: stringObject = {
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

/**
  * Returns an ANSI escape sequence based on RGB values (defaults to foreground).
  * @param rgb The RGB values should be passed through an array e.g. [red, green, blue].
  */
export function rgb(
  rgb: Array<Number>,
  options?: rgbOptions,
): string {
  return `${ESC}${
    options && options.background ? "48" : "38"
  };2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
}

interface formatParams {
  foreground?: string,
  background?: string,
  styles?: Array<string>
}

/**
  * Return a formatted string based on parameters
  * @param str The string to format.
  * @param params.foreground The name of a colour ("red", "blue", etc). RGB values are currently not supported.
  * @param params.background Equivalent to params.foreground but for the text background.
  * @param params.styles An array of styles e.g. ["underline", "italic", "bold"].
  */
export function format(
  str: string,
  params?: formatParams
): string {
  let styleStr = "";
  if (params?.styles) {
    for (let i of params.styles) {
      styleStr += `;${style[i.toLowerCase()].slice(2).slice(0, -1)}`
    }
  }

  let foreground = params?.foreground?.toLowerCase() || "reset";
  let background = params?.background?.toLowerCase() || "reset";

  let colourStr = fore[foreground].slice(2).slice(0, -1) + ";" +
                  back[background].slice(2).slice(0, -1);
  return `${ESC}${colourStr}${styleStr}m${str}${style.reset}`;
}
