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

export type ArgDefinition = {
  [command: string]: {
    [arg: string]: {
      required: boolean;
      type: string | number;
    };
  };
}

export function createDefinedArgs(definition: ArgDefinition, command: ParsedCommand) {
  const commandDefinition = definition[command.command];
  if (!commandDefinition) return {};

  return command.args.reduce((acc, arg) => {
    const argDefinition = commandDefinition[arg.key];
    if (!argDefinition) return acc;

    return {
      ...acc,
      [arg.key]: argDefinition.type === "number" ? Number(arg.value) : arg.value,
    };
  }, {});
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
