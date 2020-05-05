<template>
  <section id="portfolio-list" class="container">
    <portfolio-card />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioCard from '@/components/molecules/Card/PortfolioCard.vue'

export default Vue.extend({
  components: {
    PortfolioCard
  }
})
</script>

<style lang="scss" scoped>
#portfolio-list {
  padding: 2.5rem 0 10rem 0;
  margin: auto auto;
}

// タブレット以上の場合は横に複数枚並べる
@media screen and (min-width: 1401px) {
  #portfolio-list {
    width: 70%;
    max-width: 1400px;
  }
}

@media screen and (min-width: 900px) and (max-width: 1400px) {
  #portfolio-list {
    width: 80%;
  }
}

// モバイルの場合は横いっぱいカードを表示する
@media screen and (max-width: 899px) {
  #portfolio-list {
    width: 95%;
  }
}
</style>
