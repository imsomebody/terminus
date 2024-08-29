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
      runnable.action.call(null, parsed, cmd)
    } else {
      onCommandNotFound(parsed, cmd)
    }
  }

  function clear() {
    feed.splice(0)
  }

  function onCommandNotFound(cmd: ParsedCommand, originator: Command) {
    feed.push({
      text: `${cmd.command}: command not found. Try 'help' for a list of commands.`,
      type: "output",
      id: nextSequentialId(),
      originator,
    })
  }

  function push(text: string, originator: Command) {
    feed.push({
      text,
      type: "output",
      id: nextSequentialId(),
      originator
    })
  }

  return {
    feed,
    clear,
    push,
    command,
  }
});
