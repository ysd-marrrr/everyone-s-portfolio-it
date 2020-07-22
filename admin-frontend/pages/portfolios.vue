<template>
  <v-layout column justify-center align-center>
    <v-container fluid>
      <h1>データ管理</h1>
    </v-container>
    <v-container fluid>
      <v-card outlined tile>
        <h2>登録されているポートフォリオ一覧</h2>
        <portfolio-table-detail-view :portfolio-list-prop="apiResult.data" />
        <v-pagination
          v-model="apiResult.current_page"
          :circle="true"
          :total-visible="5"
          :length="apiResult.total"
        ></v-pagination>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioTableDetailView from '@/components/organisms/PortfolioTableDetailView.vue'

export default Vue.extend({
  components: {
    PortfolioTableDetailView,
  },
  async asyncData({ app }) {
    const path = '/portfolios?page=1'
    const res = await app.$axios.get(path)
    return { apiResult: res.data }
  },
})
</script>

<style lang="scss" scoped>
.counter-number {
  font-size: 300%;
}
</style>
