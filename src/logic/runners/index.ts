import type { ParsedRunnable } from "@/definitions/types";
import type { ParsedCommand } from "../commands";
import { math } from "./math";

export const everyCommand: ParsedRunnable<ParsedCommand>[] = [math];
