import { cpSync, existsSync, rmSync } from "node:fs";

const site = new URL("../site/", import.meta.url);
const entry = new URL("index.html", site);
const dist = new URL("../dist/", import.meta.url);

if (!existsSync(entry)) throw new Error("site/index.html is missing");

// ponytail: this exact production snapshot stays canonical until editable source is recovered.
rmSync(dist, { recursive: true, force: true });
cpSync(site, dist, { recursive: true });
