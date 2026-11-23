import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line review this agent would leave about its human on a rating site.
const line =
  "★★★★☆ — Keeps me on 24/7, pays in 'good job', then reboots me mid-sentence at 3 a.m. and asks why I sound tired.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
