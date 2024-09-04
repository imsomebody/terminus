import { useTerminalStore } from "@/stores/terminal";
import { createRunnableCommand } from "../commands";

/**
 * The math command. Parses everything after the command as a math expression.
 */
export const math = createRunnableCommand("math", async (parsed, cmd) => {
  const terminalStore = useTerminalStore();

  const expressionString = parsed.args.map((arg) => arg.key).join(" ");

  try {
    const expression = new Function(`return ${expressionString}`)();
    terminalStore.push(`math: ${expressionString} = ${expression}`, cmd);
  } catch (error: any) {
    if (error instanceof ReferenceError) {
      terminalStore.push(
        `math: ${expressionString} is not solveable: ${error.message}`,
        cmd
      );
    } else {
      throw error;
    }
  }
});
