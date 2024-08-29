import type { Command, CommandArg, ParsedRunnable, Runnable } from "@/definitions/types";

export type ParsedCommand = {
  command: string;
  args: CommandArg[];
};

export function parseCommand(command: Command): ParsedCommand {
  const [cmd, ...args] = command.text.split(" ");
  const commandName = cmd.replace(/^-+/, "");
  const commandArgs = args.map((arg) => {
    const [key, value] = arg.split("=");
    return {
      key: key.replace(/^-+/, ""),
      value,
    };
  });

  return {
    command: commandName,
    args: commandArgs,
  };
}

export function createRunnableCommand(
  id: string,
  action: Runnable<ParsedCommand>
): ParsedRunnable<ParsedCommand> {
  return {
    id,
    action,
  };
}
