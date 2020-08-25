<template>
  <section id="portfolio-list" class="flex flex-wrap">
    <portfolio-card
      v-for="(item, index) in portfolioList"
      :key="index"
      :url-prop="item.url"
      :image-url-prop="item.imageUrl"
      :skill-list-prop="item.skills"
    >
      <template v-slot:title>
        {{ item.title }}
      </template>
    </portfolio-card>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioCard from '@/components/molecules/Card/PortfolioCard.vue'

export default Vue.extend({
  components: {
    PortfolioCard
  },
  props: {
    portfolioListProp: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    portfolioList() {
      return this.portfolioListProp
    }
  }
})
</script>

<style lang="scss" scoped>
#portfolio-list {
  padding: 2.5rem 0 10rem 0;
  margin: auto auto;
  background: rgb(242, 224, 187);
}

// タブレット以上の場合は横に複数枚並べる
@media screen and (min-width: 1401px) {
  #portfolio-list {
    width: 70%;
    max-width: 1400px;
  }
}

// 横いっぱいカードを表示する
@media screen and (max-width: 1400px) {
  #portfolio-list {
    width: 95%;
  }
}
</style>
