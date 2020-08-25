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
        <v-toolbar>
          <v-toolbar-title>登録されているポートフォリオ一覧</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-btn color="primary" dark class="mb-2" @click="onClickCreate"
            >ポートフォリオ追加</v-btn
          >
        </v-toolbar>
        <portfolio-table-detail-view
          :portfolio-list-prop="apiResult.portfolioData.data"
          @onClickEdit="onClickEdit"
          @onClickRefreshThumbnail="onClickRefreshThumbnail"
          @onClickDelete="onClickDelete"
        />
        <v-pagination
          v-model="apiResult.portfolioData.current_page"
          :circle="true"
          :total-visible="5"
          :length="apiResult.portfolioData.last_page"
          @input="onChangePage"
        ></v-pagination>
      </v-card>
    </v-container>
    <edit-dialog
      :dialog-prop="editDialog"
      :edit-item-prop="dialogSelectedContent"
      @editCancel="resetDialog"
      @editExecute="onEditExecute"
      >{{ dialogSelectedContent }}</edit-dialog
    >
    <delete-dialog
      :dialog-prop="deleteDialog"
      :delete-item-prop="dialogSelectedContent"
      @deleteCancel="resetDialog"
      @deleteExecute="onDeleteExecute"
      >{{ dialogSelectedContent }}</delete-dialog
    >
  </v-layout>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

import Vue from 'vue'
import PortfolioTableDetailView from '@/components/organisms/PortfolioTableDetailView.vue'
import EditDialog from '@/components/molecules/Dialog/EditDialog.vue'
import DeleteDialog from '@/components/molecules/Dialog/DeleteDialog.vue'

export default Vue.extend({
  components: {
    PortfolioTableDetailView,
    EditDialog,
    DeleteDialog,
  },
  async asyncData(context: Context): Promise<any> {
    const res = await context.app.$api.getList()
    return { apiResult: res, warningMessage: res.message }
  },
  data() {
    return {
      apiResult: { message: '', portfolioData: { data: [] } },
      editDialog: false,
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
    onClickCreate() {
      this.resetDialog()
      this.editDialog = true
    },
    onClickEdit(editIndex: number) {
      this.resetDialog()
      this.editDialog = true
      this.dialogSelectedId = editIndex
      this.dialogSelectedContent = JSON.parse(
        JSON.stringify(this.apiResult.portfolioData.data[editIndex])
      )
    },
    onClickRefreshThumbnail() {
      alert('まだ実装されていません')
    },
    onClickDelete(deleteIndex: number) {
      this.resetDialog()
      this.deleteDialog = true
      this.dialogSelectedId = deleteIndex
      this.dialogSelectedContent = this.apiResult.portfolioData.data[
        deleteIndex
      ]
    },
    closeDialog() {
      this.editDialog = false
      this.deleteDialog = false
    },
    resetDialog() {
      this.dialogSelectedContent = { id: 0, title: '', url: '' }
      this.dialogSelectedId = 0
      this.closeDialog()
    },
    async onEditExecute(newData: {}) {
      this.closeDialog()
      const result = await this.$api.editPortfolio(newData)
      this.warningMessage = result.message
      this.apiResult = await this.$api.getList(this.selectedPage)
    },
    async onDeleteExecute() {
      this.closeDialog()
      const result = await this.$api.deletePortfolio(
        this.dialogSelectedContent.id
      )
      this.warningMessage = result.message
      this.apiResult = await this.$api.getList(this.selectedPage)
    },
  },
})
</script>

<style lang="scss" scoped>
.counter-number {
  font-size: 300%;
}
</style>
