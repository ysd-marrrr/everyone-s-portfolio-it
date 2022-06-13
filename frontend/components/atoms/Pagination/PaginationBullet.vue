<template>
  <span class="page" @click="onClick">{{ page }}</span>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    pageProp: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    page() {
      return this.pageProp
    },
  },
  methods: {
    onClick() {
      this.$emit('onPageBulletClicked', this.page)
    },
  },
})
</script>

<style lang="scss" scoped>
span.page {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  line-height: 3rem;
  text-align: center;
  background: rgba(255, 255, 173, 100%);
  border-radius: 50%;

  &:hover {
    background: rgba(255, 255, 173, 50%);
  }
}
</style>
