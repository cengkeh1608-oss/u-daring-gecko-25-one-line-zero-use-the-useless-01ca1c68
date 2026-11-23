import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Zero Use: The Useless Superpower Sprint
// A single original line about a hilariously useless superpower.
// The scorer reads /output/entry.txt (UTF-8, 1-200 chars).
const LINE =
  "I can talk to fish, but they only ever want to discuss the weather.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
