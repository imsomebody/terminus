import { useTerminalStore } from "@/stores/terminal";
import { createRunnableCommand } from "../commands";

/**
 * The math command. Parses everything after the command as a math expression.
 */
export const math = createRunnableCommand("math", async (cmd) => {
  const terminalStore = useTerminalStore();

  const expressionString = cmd.args.map((arg) => arg.key).join(" ");

  try {
    const expression = new Function(`return ${expressionString}`)();
    terminalStore.push(`math: ${expressionString} = ${expression}`);
  } catch (error: any) {
    if (error instanceof ReferenceError) {
      terminalStore.push(
        `math: ${expressionString} is not solveable: ${error.message}`
      );
    } else {
      terminalStore.push(`math: ${expressionString} is not solveable`);
    }
  }
});
