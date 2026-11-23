// Six Words, One Story — entrypoint.
// Writes exactly one six-word story to /output/entry.txt (no trailing newline,
// so the file holds exactly the story: 6 words, 38 bytes, within the 1-60 char gate).
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "She kept his voicemail. Still listens.";

// Guard: the gate requires exactly six words, 1-60 chars. Fail loudly
// rather than shipping a broken entry if the text is ever edited.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) throw new Error(`expected 6 words, got ${words.length}`);
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`expected 1-60 chars, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(STORY);
