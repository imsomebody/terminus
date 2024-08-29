import { useTerminalStore } from "@/stores/terminal";
import { createRunnableCommand } from "../commands";

export const clear = createRunnableCommand('clear', async () => {
    useTerminalStore().clear();
})