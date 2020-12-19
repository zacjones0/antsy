const ESC = "\x1b[";
const OG_CL = console.log;

/**
 * Clear the entire terminal.
 * @param scrollback Delete scroll-back aswell
 */
function clearAll(scrollback?: boolean) {
        let mode = scrollback ? 3 : 2; 
    stdoutWrite(`${ESC}${mode}J`);
}
/** Clear the terminal until cursor position. */
function clearToCursor() {
    stdoutWrite(`${ESC}1J`);
}

/**
 * Clear the line the cursor is currently on.
 * @param toCursor Clear line up to the cursor
 */
function clearln(toCursor?: boolean) {
    let mode = toCursor ? 1 : 2;
    stdoutWrite(`${ESC}${mode}K`);
}
/**
 * Inserts blank lines after the cursor.
 * @param n Number of blank lines
 */
function insertln(n: Number) {
    stdoutWrite(`${ESC}${n}L`);
}
/**
 * Deletes lines after the cursor
 * @param n Number of lines to delete
 */
function deleteln(n: Number) {
    stdoutWrite(`${ESC}${n}M`);
}

/**
 * Erases(replaces with blank characters) characters from the start of the line.
 * @param n Number of characters to erase 
 */
function erasech(n: Number) {
    stdoutWrite(`${ESC}${n}X`);
}
/**
 * Insert characters at the start of the line, pushing everything to the right.
 * @param n Number of characters to insert
 */
function insertch(n: Number) {
    stdoutWrite(`${ESC}${n}@`);
}
/**
 * Deletes characters from the start of the line (pulling everything to the left).
 * @param n Number of characters to delete
 */
function deletech(n: Number) {
    stdoutWrite(`${ESC}${n}P`);
}

/**
 * Toggles automatically wrapping text that exceeds the 80th column to the nextline.
 * This will continue to effect the terminal after your program finishes.
 * @param toggle Most terminals enable automatic wrapping by default
 */
function autowrap(toggle: Boolean) {
    let mode = toggle ? "h" : "l";
    stdoutWrite(`${ESC}?7${mode}`);
}
/**
 * Toggle automatically adding a Reset escape sequence to the end of a console.log call.
 * This function overwrites console.log, but will reset it when toggled off.
 * @param toggle Toggle autoreset (true: on, false: off)
 * @param options Options: newline (append newline, default: true)
 */
function autoreset(toggle: Boolean, options: {newline:boolean} = {newline: true}) {
    if (toggle) {
        console.log = (s) => {
            if (s.includes(ESC)) s += '\x1b[m';
            if (options.newline) s += '\n';
            Deno.stdout.writeSync(new TextEncoder().encode(s));
        }
    } else {
        console.log = OG_CL;
    }
}

/**
 * New lines are added to the top.
 * @param n Number of new lines
 */
function scrollDown(n: Number) {
    stdoutWrite(`${ESC}${n}T`);
}
/**
 * New lines are added at the bottom.
 * @param n Number of new lines
 */
function scrollUp(n: Number) {
    stdoutWrite(`${ESC}${n}S`);
}

export {
    clearAll,
    clearToCursor,
    
    clearln,
    insertln,
    deleteln,

    erasech,
    insertch,
    deletech,

    autowrap,
    autoreset,

    scrollDown,
    scrollUp
};

function stdoutWrite(str: string) {
    Deno.stdout.writeSync(new TextEncoder().encode(str));
}