<template>
  <v-layout column justify-center align-center>
    <v-container v-if="warningMessage">
      <v-alert type="warning"> {{ warningMessage }} </v-alert>
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
    <delete-dialog
      :dialog-prop="deleteDialog"
      :delete-item-prop="dialogSelectedContent"
      @deleteCancel="onDeleteCancel"
      @deleteExecute="onDeleteExecute"
      >{{ dialogSelectedContent }}</delete-dialog
    >
  </v-layout>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

import Vue from 'vue'
import PortfolioTableDetailView from '@/components/organisms/PortfolioTableDetailView.vue'
import DeleteDialog from '@/components/molecules/Dialog/DeleteDialog.vue'

export default Vue.extend({
  components: {
    PortfolioTableDetailView,
    DeleteDialog,
  },
  async asyncData(context: Context): Promise<any> {
    const res = await context.app.$api.getList()
    return { apiResult: res, warningMessage: res.message }
  },
  data() {
    return {
      apiResult: { message: '', portfolioData: { data: [] } },
      deleteDialog: false,
      dialogSelectedContent: { id: 0, title: '', url: '' },
      dialogSelectedId: 0,
      selectedPage: 1,
      warningMessage: '',
    }
  },
  methods: {
    async onChangePage(pageNumber: number): Promise<any> {
      this.selectedPage = pageNumber
      this.apiResult = await this.$api.getList(this.selectedPage)
      this.warningMessage = this.apiResult.message
    },
    onClickDelete(deleteIndex: number) {
      this.deleteDialog = true
      this.dialogSelectedId = deleteIndex
      this.dialogSelectedContent = this.apiResult.portfolioData.data[
        deleteIndex
      ]
    },
    onDeleteCancel() {
      this.deleteDialog = false
      this.dialogSelectedContent = { id: 0, title: '', url: '' }
      this.dialogSelectedId = 0
    },
    async onDeleteExecute() {
      this.deleteDialog = false
      const result = await this.$api.deletePortfolio(
        this.dialogSelectedContent.id
      )
      this.warningMessage = result.message
      this.apiResult = await this.$api.getList(this.selectedPage)
      this.dialogSelectedContent = { id: 0, title: '', url: '' }
      this.dialogSelectedId = 0
    },
  },
})
</script>

<style lang="scss" scoped>
.counter-number {
  font-size: 300%;
}
</style>
