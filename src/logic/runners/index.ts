import type { ParsedRunnable } from "@/definitions/types";
import type { ParsedCommand } from "../commands";

import { math } from "./math";
import { clear } from "./clear";
import { shark } from "./shark";

export const everyCommand: ParsedRunnable<ParsedCommand>[] = [math, clear, shark];
