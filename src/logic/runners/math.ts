import { useTerminalStore } from "@/stores/terminal";
import { createRunnableCommand } from "../commands";

/**
 * The math command. Parses everything after the command as a math expression.
 */
export const math = createRunnableCommand("math", async (raw) => {
    const terminalStore = useTerminalStore()
    terminalStore.push("math command")
})