import { cpSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of ["index.html", "styles.css", "script.js", "_headers"]) {
  cpSync(resolve(root, file), resolve(dist, file));
}

console.log("Built static site to dist/");
