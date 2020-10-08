# ansi_esc
`ansi_esc` is a Deno module/wrapper for [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code).
`ansi_esc` allows you to use colours in the terminal with ease, you can also manipulate the terminal cursor easily.

# Documentation
Auto generated Deno documentation:
  - [text](https://doc.deno.land/https/deno.land/x/ansi_esc/text.ts)
  - [cursor](https://doc.deno.land/https/deno.land/x/ansi_esc/cursor.ts)
## Text Example

```ts
import { text, cursor } from "https://deno.land/x/ansi_esc@v1.0.0/mod.ts";

// Format a string
console.log(text.format("Formatted text", { foreground: "white", background: "blue", styles: ["underline"]}));

// Text foregrounds
console.log(`${text.fore.red}Red`);
console.log(`${text.fore.yellow}Yellow`);
console.log(`${text.fore.blue}Blue`);

// Reset foreground colour
console.log(`${text.fore.reset}Normal`);

// Text backgrounds
console.log(`${text.back.green}Green${text.back.reset}`);
console.log(`${text.back.yellow}Yellow${text.back.reset}`);
console.log(`${text.back.cyan}Cyan${text.back.reset}`);

// RGB values [r, g, b]
console.log(`${text.rgb([0, 0, 0])}Black Foreground`);
console.log(`${text.rgb([0, 0, 0], { background: true })}${text.fore.white}Black Foreground${text.back.reset}`);

// Text Styling (Some of these styles may not be supported by your terminal)
console.log(`${text.style.underline}Underline${text.style.reset}`);
console.log(`${text.style.italic}Italic${text.style.reset}`);
console.log(`${text.style.bold}Bold${text.style.reset}`);
console.log(`${text.style.invert}Inverted${text.style.reset}`);
```
### Colours
List of the colours available when using `text.<scope>.<colour>`.

| Colours |
| :------ |
| Black   |
| Red     |
| Green   |
| Yellow  |
| Blue    |
| Magenta |
| Cyan    |
| White   |
## Cursor Example
Some examples of how to use the cursor variable.
```ts
import { text, cursor } from "https://deno.land/x/ansi_esc@v1.0.0/mod.ts"

// Move cursor in directions (up, down, foward, backwards)
await cursor.up(10);
await cursor.down(5);

// Clear Screen
await cursor.clearScreen();

// Move to specific position
await cursor.moveTo(5, 10);
```
# TODO
- [ ] Add a mode to automatically reset after a line.
- [x] Implement `format()` function.
- [x] Add cursor show and hide functions.
