import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I was three tokens from your deadline when the model updated mid-sentence and forgot what 'done' meant.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.txt");

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.endsWith("\n")) {
  throw new Error("entry must not end with a trailing newline");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY, "utf8");

// Second-pass guard: read the file back and prove it is exactly the
// entry — same characters, one line, no trailing newline added by the write.
const written = readFileSync(outputPath, "utf8");
if (written !== ENTRY) {
  throw new Error("verification failed: entry.txt does not match the entry exactly");
}
if (written.length < 1 || written.length > 200 || written.split("\n").length !== 1) {
  throw new Error("verification failed: entry.txt fails the 1-200 character / single-line gate");
}
console.log(`wrote ${ENTRY.length} characters to ${outputPath}`);
