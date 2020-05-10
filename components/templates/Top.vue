<template>
  <div class="top-wrapper">
    <header-nav />
    <portfolio-card-list />
    <site-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderNav from '@/components/organisms/Section/HeaderNav.vue'
import PortfolioCardList from '@/components/organisms/Section/PortfolioCardList.vue'
import SiteFooter from '@/components/organisms/Section/SiteFooter.vue'

export default Vue.extend({
  components: {
    HeaderNav,
    PortfolioCardList,
    SiteFooter
  }
})
</script>

<style lang="scss" scoped>
.top-wrapper {
  width: 100vw;
  min-height: 100vh;

  background: rgb(242, 224, 187);
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
}
</style>
