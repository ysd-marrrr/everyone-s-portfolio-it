<template>
  <span class="page" @click="onClick">{{ page }}</span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    pageProp: {
      type: Number,
      default: 1
    }
  },
  computed: {
    page() {
      return this.pageProp
    }
  },
  methods: {
    onClick() {
      this.$emit('onPageBulletClicked', this.page)
    }
  }
})
</script>

<style lang="scss" scoped>
span.page {
  display: inline-block;
  background: rgba(255, 255, 173, 1);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;

  margin: 1rem;
  &:hover {
    background: rgba(255, 255, 173, 0.5);
  }
}
</style>
