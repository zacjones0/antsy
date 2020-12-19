const ESC = "\x1b[";

/**
 * Move cursor upwards.
 * @param n Number of rows upwards
 */
function up(n: Number = 1) {
    stdoutWrite(`${ESC}${n}A`);
    return cursor;
}
/**
 * Move cursor downwards.
 * @param n Number of rows downwards
 */
function down(n: Number = 1) {
    stdoutWrite(`${ESC}${n}B`);
    return cursor;
}
/**
 * Move cursor fowards (to the right).
 * @param n Number of columns fowards
 */
function forward(n: Number = 1) {
    stdoutWrite(`${ESC}${n}C`);
    return cursor;
}
/**
 * Move cursor backwards (to the left).
 * @param n Number of columns backwards
 */
function backward(n: Number = 1) {
    stdoutWrite(`${ESC}${n}D`);
    return cursor;
}

/**
 * Move the cursor downwards n lines and to the first column.
 * @param n Number of lines to move downwards
 */
function nextln(n: Number = 1) {
    stdoutWrite(`${ESC}${n}E`);
    return cursor;
}
/**
 * Move the cursor upwards n lines and to the first column.
 * @param n Number of lines to move upwards
 */
function prevln(n: Number = 1) {
    stdoutWrite(`${ESC}${n}F`);
    return cursor;
}
/**
 * Move to column on current row.
 * @param n Column
 */
function column(n: Number) {
    stdoutWrite(`${ESC}${n}G`);
    return cursor;
}
/**
 * Move to row while keeping current column position.
 * @param n Row
 */
function row(n: Number) {
    stdoutWrite(`${ESC}${n}d`);
    return cursor;
}
/**
 * Move to specific position in terminal.
 * @param row Row to move to
 * @param column Column to move to
 */
function move(row: Number, column: Number) {
    stdoutWrite(`${ESC}${row};${column}H`);
    return cursor;
}
/** Save current cursor position, used in combination with restorePos(). */
function savePos() {
    stdoutWrite(`${ESC}s`);
    return cursor;
}
/** Restore saved cursor position using savePos(). */
function restorePos() {
    stdoutWrite(`${ESC}u`);
    return cursor;
}
/** Hide the cursor which will usually show as a blinking block or line. */
function hide() {
    stdoutWrite(`${ESC}?25l`);
    return cursor;
}
/** Show the cursor. */
function show() {
    stdoutWrite(`${ESC}?25h`);
    return cursor;
}

const cursor = {
    up,
    down,
    forward,
    backward,
    nextln,
    prevln,
    column,
    row,
    move,
    savePos,
    restorePos,
    hide,
    show
};

export {
    up,
    down,
    forward,
    backward,
    nextln,
    prevln,
    column,
    row,
    move,
    savePos,
    restorePos,
    hide,
    show
}

function stdoutWrite(str: string) {
    Deno.stdout.writeSync(new TextEncoder().encode(str));
}