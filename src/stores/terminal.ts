import type { Command, FeedRow } from "@/definitions/types";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTerminalStore = defineStore("terminal", () => {
  const feed: FeedRow[] = reactive([]);

  function command({ text }: Command) {
    const id = feed.length;
    feed.push({ text, type: "input", id });
  }

  return {
    feed,
    command,
  }
});
