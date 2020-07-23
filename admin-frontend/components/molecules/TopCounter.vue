<template>
  <v-card class="pa-2" outlined tile>
    <h2>{{ titleProp }}</h2>
    <p class="counter-number">{{ countProp }}</p>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    titleProp: {
      type: String,
      default: '',
    },
    countProp: {
      type: Number,
      default: 0,
    },
  },
})
</script>

<style lang="scss" scoped>
.counter-number {
  font-size: 300%;
}
</style>
