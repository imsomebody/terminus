import type { Command, FeedRow, RunnableStorage } from "@/definitions/types";
import { parseCommand, type ParsedCommand } from "@/logic/commands";
import { everyCommand } from "@/logic/runners";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTerminalStore = defineStore("terminal", () => {
  const feed: FeedRow[] = reactive([]);
  const commands: RunnableStorage<ParsedCommand> = Object.fromEntries(everyCommand.map(({ id, action }) => [id, { id, action }]))

  function nextSequentialId() {
    return feed.length
  }

  function command(cmd: Command) {
    const parsed = parseCommand(cmd)

    if (import.meta.env.DEV) {
        console.log(parsed);
    }

    const runnable = commands[parsed.command]

    if (runnable) {
      runnable.action.call(null, parsed)
    } else {
      onCommandNotFound(parsed)
    }
  }

  function onCommandNotFound(cmd: ParsedCommand) {
    feed.push({
      text: `${cmd.command}: command not found. Try 'help' for a list of commands.`,
      type: "output",
      id: nextSequentialId(),
    })
  }

  function push(text: string) {
    feed.push({
      text,
      type: "output",
      id: nextSequentialId(),
    })
  }

  return {
    feed,
    push,
    command,
  }
});
