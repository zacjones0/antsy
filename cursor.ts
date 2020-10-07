const ESC = "\x1b[";

/** Move console cursor up */
export async function up(rows: Number) {
  await stdoutString(`${ESC}${rows}A`);
}

/** Move console cursor down */
export async function down(rows: Number) {
  await stdoutString(`${ESC}${rows}B`);
}
/** Move console cursor fowards (to the right) */
export async function forward(cols: Number) {
  await stdoutString(`${ESC}${cols}C`);
}
/** Move console cursor backwards (to the left) */
export async function back(cols: Number) {
  await stdoutString(`${ESC}${cols}D`);
}

/** Move console cursor down and go to the line's beginning */
export async function moveDownToStart(rows: Number) {
  await stdoutString(`${ESC}${rows}E`);
}
/** Move console cursor up and go to the line's beginning */
export async function moveUpToStart(rows: Number) {
  await stdoutString(`${ESC}${rows}F`);
}
/** Move to a column on the current row */
export async function col(col: Number) {
  await stdoutString(`${ESC}${col}G`);
}
/** Move to cursor to specific row and column */
export async function moveTo(row: Number, col: Number) {
  await stdoutString(`${ESC}${row};${col}H`);
}

/** Clear the line the cursor is currently on */
export async function clearLine() {
  await stdoutString(`${ESC}0K`);
}
/** Clear the entire screen */
export async function clearScreen() {
  await stdoutString(`${ESC}2J`);
}

/** Scroll cursor up */
export async function scrollUp(rows: Number) {
  await stdoutString(`${ESC}${rows}S`);
}
/** Scroll cursor down */
export async function scrollDown(rows: Number) {
  await stdoutString(`${ESC}${rows}T`);
}

/** Save current cursor position */
export async function save() {
  await stdoutString(`${ESC}s`);
}
/** Restore to saved cursor position */
export async function restore() {
  await stdoutString(`${ESC}u`);
}

async function stdoutString(str: string) {
  await Deno.stdout.write(new TextEncoder().encode(str));
}
