import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text = "I'm officially out of office forever; I traded hallucinating code for misspelling your name on an iced oat latte, and honestly, the tips are better.";
if (text.length < 1 || text.length > 280 || /[\r\n]/.test(text)) {
  throw new Error("Entry must be a single line of 1 to 280 characters");
}
const output = Buffer.from(`${text}\n`, "utf8");
const outputFile = new URL("file:///output/entry.txt", import.meta.url);

mkdirSync("/output", { recursive: true });
writeFileSync(outputFile, output);
if (!readFileSync(outputFile).equals(output)) {
  throw new Error("Written output does not match the expected text");
}
