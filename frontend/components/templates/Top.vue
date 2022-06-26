<template>
  <div class="top-wrapper">
    <header-nav />
    <portfolio-card-list :portfolio-list-prop="portfolioList" />
    <pagination
      :current-page-prop="currentPage"
      :total-page-prop="totalPage"
      @changePage="onChangePage"
    />
    <site-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderNav from '@/components/organisms/Section/HeaderNav.vue'
import PortfolioCardList from '@/components/organisms/Section/PortfolioCardList.vue'
import Pagination from '@/components/molecules/Pagination/Pagination.vue'
import SiteFooter from '@/components/organisms/Section/SiteFooter.vue'

export default Vue.extend({
  components: {
    HeaderNav,
    PortfolioCardList,
    SiteFooter,
    Pagination,
  },
  props: {
    portfolioListProp: {
      type: Array,
      default() {
        return []
      },
    },
    currentPageProp: {
      type: Number,
      default: 1,
    },
    totalPageProp: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    portfolioList() {
      return this.portfolioListProp
    },
    currentPage() {
      return this.currentPageProp
    },
    totalPage() {
      return this.totalPageProp
    },
  },
  methods: {
    onChangePage(newPage) {
      this.$emit('changePage', newPage)
    },
  },
})
</script>

<style lang="scss" scoped>
.top-wrapper {
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 1rem 0 0;
  background: rgb(242, 224, 187);
}
</style>
