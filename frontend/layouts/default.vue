<template>
  <div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// nuxt.config.jsで読み込んだTypekitを動作させる
declare module Typekit {
  export function load(Object): void
}

export default Vue.extend({
  mounted() {
    Typekit.load({ async: true })
  },
})
</script>

<style>
html {
  box-sizing: border-box;
  font-size: 16px;
  word-spacing: 1px;
  text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
