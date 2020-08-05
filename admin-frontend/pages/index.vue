<template>
  <v-layout column justify-center align-center>
    <v-container v-if="message">
      <v-alert type="warning"> {{ message }} </v-alert>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <top-counter :title-prop="'未処理の登録申請数'" :count-prop="0" />
        </v-col>
        <v-col>
          <top-counter :title-prop="'登録総数'" :count-prop="apiResult.total" />
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
import TopCounter from '@/components/molecules/TopCounter.vue'

export default Vue.extend({
  components: {
    PortfolioTableView,
    TopCounter,
  },
  async asyncData(context: any) {
    const res = await context.app.$api.getList().catch((error: any) => {
      console.log('error(override)')
      console.log(error)
      return error
    })
    return (
      res || {
        apiResult: [],
        message: '取得に失敗しました',
      }
    )
  },
})
</script>
