<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="pa-2" outlined tile>
            <h2>未処理の登録申請数</h2>
            <p class="counter-number">0</p>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-2" outlined tile>
            <h2>登録総数</h2>
            <p class="counter-number">0</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-card outlined tile>
        <h2>登録されているポートフォリオ一覧(簡易)</h2>
        <portfolio-table-view :portfolio-list-prop="apiResult.data" />
        <p>さらに表示する場合はデータ管理を開いてください。</p>
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

<style lang="scss" scoped>
.counter-number {
  font-size: 300%;
}
</style>
