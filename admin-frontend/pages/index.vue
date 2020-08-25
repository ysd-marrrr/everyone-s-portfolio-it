<template>
  <v-layout column justify-center align-center>
    <v-container v-if="apiResult.message">
      <v-alert type="warning"> {{ apiResult.message }} </v-alert>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <top-counter :title-prop="'未処理の登録申請数'" :count-prop="0" />
        </v-col>
        <v-col>
          <top-counter
            :title-prop="'登録総数'"
            :count-prop="apiResult.portfolioData.total"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-card outlined tile>
        <h2>登録されているポートフォリオ一覧(簡易)</h2>
        <portfolio-table-view
          :portfolio-list-prop="apiResult.portfolioData.data"
        />
        <p>
          さらに表示する場合は<nuxt-link to="/portfolios">データ管理</nuxt-link
          >を開いてください。
        </p>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioTableView from '@/components/organisms/PortfolioTableView.vue'
import TopCounter from '@/components/molecules/TopCounter.vue'

export default Vue.extend({
  components: {
    PortfolioTableView,
    TopCounter,
  },
  async asyncData(context: any) {
    const res = await context.app.$api.getList()
    return { apiResult: res }
  },
  data() {
    return {
      apiResult: {},
    }
  },
})
</script>
