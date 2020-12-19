const ESC = "\x1b[";

/** Toggle bold mode, usually increases font weight and brightness. */
function bold(toggle: boolean) {
    stdoutWrite(`${ESC}${toggleM(toggle)}1m`);
}
/** Toggle dim mode, decreases brightness. */
function dim(toggle: boolean) {
    stdoutWrite(`${ESC}${toggleM(toggle)}2m`);
}
/** Toggle italics, not widely supported. */
function italic(toggle: boolean) {
    stdoutWrite(`${ESC}${toggleM(toggle)}3m`);
}
/** Toggle underline, the underline color will be the foreground color. */
function underline(toggle: boolean) {
    stdoutWrite(`${ESC}${toggleM(toggle)}4m`);
}
/** Toggle invert, inverts the background and foreground colors. */
function invert(toggle: boolean) {
    stdoutWrite(`${ESC}${toggleM(toggle)}7m`);
}
/** Toggle conceal, prints text invisibly (not widely supported). */
function conceal(toggle: boolean) {
    stdoutWrite(`${ESC}${toggleM(toggle)}8m`);
}
/** Toggle strikethrough, draws a line through the text but keeps it legible. */
function strikethrough(toggle: boolean) {
    stdoutWrite(`${ESC}${toggleM(toggle)}9m`);
}

export {
    bold,
    dim,
    italic,
    underline,
    invert,
    conceal,
    strikethrough
};

function stdoutWrite(str: string) {
    Deno.stdout.writeSync(new TextEncoder().encode(str));
}

function toggleM(toggle: boolean): String {
    return toggle ? "" : "2";
}