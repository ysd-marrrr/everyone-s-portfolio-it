<template>
  <div class="pagination flex justify-center items-center">
    <template v-if="isTruncatedPageLeft"
      ><span class="page">1</span><span>...</span></template
    >
    <span v-for="(item, index) in pageList" :key="index" class="page">{{
      item
    }}</span>
    <template v-if="isTruncatedPageRight"
      ><span>...</span><span class="page">{{ totalPage }}</span></template
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    currentPageProp: {
      type: Number,
      default: 1
    },
    totalPageProp: {
      type: Number,
      default: 1
    },
    maxDisplayPageProp: {
      type: Number,
      default: 5
    }
  },
  computed: {
    currentPage() {
      return this.currentPageProp
    },
    totalPage() {
      return this.totalPageProp
    },
    maxDisplayPage() {
      return this.maxDisplayPageProp
    },
    pageSpan() {
      return (this.maxDisplayPage - 1) / 2
    },
    pageListOffset() {
      return this.currentPage < this.pageSpan
        ? 0
        : this.currentPage - this.pageSpan
    },
    pageList() {
      if (this.totalPage <= this.maxDisplayPage) {
        return Array.from({ length: this.totalPage }, (_, i) => i + 1)
      }
      // 左端
      if (!this.isTruncatedPageLeft) {
        return Array.from({ length: this.maxDisplayPage }, (_, i) => i + 1)
      }

      // 右端
      if (!this.isTruncatedPageRight) {
        return Array.from(
          { length: this.maxDisplayPage },
          (_, i) => i + (this.totalPage - this.maxDisplayPage + 1)
        )
      }

      return Array.from(
        { length: this.maxDisplayPage },
        (_, i) => i + this.pageListOffset
      )
    },
    isTruncatedPageLeft() {
      return this.currentPage - this.pageSpan <= 1
        ? false
        : this.currentPage - this.pageListOffset > 1
    },
    isTruncatedPageRight() {
      return this.totalPage <= this.maxDisplayPage
        ? false
        : this.currentPage + this.pageSpan < this.totalPage
    }
  }
})
</script>

<style lang="scss" scoped>
span.page {
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
