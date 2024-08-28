<script setup lang="ts">
import AppTerminal from './components/AppTerminal.vue';
import { elements } from './definitions/globals';

function redirectFocus() {
  document.getElementById(elements.input)?.focus()
}
</script>

<template>
  <main @focus="redirectFocus" @click="redirectFocus">
    <AppTerminal></AppTerminal>
  </main>
</template>
