<template>
  <v-layout column justify-center align-center>
    <v-container fluid>
      <v-card>
        <h2>登録されているポートフォリオ一覧(簡易)</h2>
        <portfolio-table-view :portfolio-list-prop="apiResult.data" />
      </v-card>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioTableView from '@/components/organisms/PortfolioTableView.vue'

export default Vue.extend({
  components: {
    PortfolioTableView,
  },
  async asyncData({ app }) {
    const path = '/portfolios?page=1'
    const res = await app.$axios.get(path)
    return { apiResult: res.data }
  },
})
</script>
