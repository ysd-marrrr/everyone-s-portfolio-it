<template>
  <section id="header">
    <h1>みんなのポートフォリオ！</h1>
    <nav>
      <p>
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
      default: 0
    },
    lastUpdatedProp: {
      type: String,
      default: '2020-04-30'
    }
  }
})
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
