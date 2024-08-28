<template>
  <div class="terminal-feed">
    <div v-for="line in feed" :key="line.id">{{ line.text }}</div>
  </div>
  <div class="terminal-input">
    <span class="terminal-cursor">></span>
    <input
      v-model="inputState.text"
      :id="elements.input"
      type="text"
      @keyup="onKeyUp"
    />
  </div>
</template>

<script setup lang="ts">
import { elements } from "@/definitions/globals";
import { useTerminalStore } from "@/stores/terminal";
import { storeToRefs } from "pinia";
import { reactive } from "vue";

const terminalStore = useTerminalStore();
const { feed } = storeToRefs(terminalStore);

const inputState = reactive({
  text: "",
});

function reset() {
  inputState.text = "";
}

const sendKeys = ["Enter"];

function onKeyUp(event: KeyboardEvent) {
  if (sendKeys.includes(event.key)) {
    terminalStore.command({
      ...inputState,
    });

    reset();
  }
}
</script>

<style lang="scss">
.terminal-feed {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.terminal-input {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  align-items: center;
  padding: 0.2rem;

  input {
    &:focus {
      outline: 0;
    }

    width: 100%;
  }
}
</style>
