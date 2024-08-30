<script setup lang="ts">
import AppTerminal from "./components/AppTerminal.vue";
import { elements, getGlobalElement } from "./definitions/globals";

function redirectFocus(event: FocusEvent | MouseEvent) {
  if (event.target === getGlobalElement("main")) {
    document.getElementById(elements.input)?.focus();
  }
}
</script>

<template>
  <main @focus="redirectFocus" @click="redirectFocus" id="app_main">
    <AppTerminal></AppTerminal>
  </main>
</template>
