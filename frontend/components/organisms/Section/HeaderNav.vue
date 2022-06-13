<template>
  <section id="header" class="flex justify-center">
    <nav class="flex flex-wrap w-3/4 justify-center content-center">
      <h1 class="md:w-1/2">みんなのポートフォリオ！</h1>
      <p class="md:w-1/2 text-right">
        {{ portfolioCountProp }}件掲載中 / 最終更新日: {{ lastUpdatedProp }}
      </p>
    </nav>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    portfolioCountProp: {
      type: Number,
      default: 0,
    },
    lastUpdatedProp: {
      type: String,
      default: '2020-04-30',
    },
  },
})
</script>

<style lang="scss" scoped>
#header {
  background: rgb(242, 224, 187);
}

h1 {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
