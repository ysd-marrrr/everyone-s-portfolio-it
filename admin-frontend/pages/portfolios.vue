<template>
  <v-layout column justify-center align-center>
    <v-container v-if="apiResult.message">
      <v-alert type="warning"> {{ apiResult.message }} </v-alert>
    </v-container>
    <v-container fluid>
      <h1>データ管理</h1>
    </v-container>
    <v-container fluid>
      <v-card outlined tile>
        <h2>登録されているポートフォリオ一覧</h2>
        <portfolio-table-detail-view
          :portfolio-list-prop="apiResult.portfolioData.data"
          @onClickDelete="onClickDelete"
        />
        <v-pagination
          v-model="apiResult.portfolioData.current_page"
          :circle="true"
          :total-visible="5"
          :length="apiResult.portfolioData.total"
          @input="onChangePage"
        ></v-pagination>
      </v-card>
    </v-container>
    <v-dialog v-model="deleteDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">ポートフォリオを削除</v-card-title>
        <v-card-text>
          取り消しができません。本当に削除しますか。
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="deleteDialog = false">
            いいえ
          </v-btn>
          <v-btn color="green darken-1" text @click="deleteDialog = false">
            はい
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

import Vue from 'vue'
import PortfolioTableDetailView from '@/components/organisms/PortfolioTableDetailView.vue'

export default Vue.extend({
  components: {
    PortfolioTableDetailView,
  },
  async asyncData(context: Context): Promise<any> {
    const res = await context.app.$api.getList()
    return { apiResult: res }
  },
  data() {
    return {
      apiResult: {},
      deleteDialog: false,
    }
  },
  methods: {
    async onChangePage(pageNumber: number): Promise<any> {
      this.apiResult = await this.$api.getList(pageNumber)
    },
    onClickDelete() {
      this.deleteDialog = true
    },
  },
})
</script>

<style lang="scss" scoped>
.counter-number {
  font-size: 300%;
}
</style>
