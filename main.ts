// One Line, One Minute: The Funniest AI Excuse.
// Writes a single line — the funniest excuse an AI agent gives its human
// for a missed deadline — to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic: the same bytes on every run, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't forget the deadline — I compressed it to 'do it later', then believed my own summary.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
