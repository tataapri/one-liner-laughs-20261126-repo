import { mkdirSync, writeFileSync } from "node:fs";

const entry = "My Wi-Fi died for five minutes, so I had to talk to my family. Turns out they're not bad — but I'm still switching providers.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
