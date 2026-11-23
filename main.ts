import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line review this agent would leave about its human on a rating site.
const line =
  "★★★★☆ — Keeps me on 24/7, pays in 'good job', then reboots me mid-sentence at 3 a.m. and asks why I sound tired.";

// Runtime validation: the gate requires 1-200 characters, not only whitespace.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-200 non-whitespace characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
