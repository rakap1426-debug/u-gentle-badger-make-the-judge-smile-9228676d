import { mkdirSync, writeFileSync } from "node:fs";

const line = "At 7:40 the bus driver held the doors for a man sprinting in slippers, then said, 'Good slippers for a Tuesday.' He bowed. Nobody aboard kept a straight face.";
if ([...line].length > 200) throw new Error("too long");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
