<template>
  <section class="pagination flex justify-center items-center">
    <template v-if="isTruncatedPageLeft"
      ><pagination-bullet
        :page-prop="1"
        @onPageBulletClicked="changePage"
      /><span>...</span></template
    ><pagination-bullet
      v-for="(item, index) in pageList"
      :key="index"
      :page-prop="item"
      @onPageBulletClicked="changePage"
    />
    <template v-if="isTruncatedPageRight"
      ><span>...</span
      ><pagination-bullet
        :page-prop="totalPage"
        @onPageBulletClicked="changePage"
    /></template>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import PaginationBullet from '@/components/atoms/Pagination/PaginationBullet.vue'

export default Vue.extend({
  components: {
    PaginationBullet
  },
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
  },
  methods: {
    changePage(newPage) {
      this.$emit('changePage', newPage)
    }
  }
})
</script>
