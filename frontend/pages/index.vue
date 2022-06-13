<template>
  <top
    :portfolio-list-prop="apiResult.data"
    :current-page-prop="currentPage"
    :total-page-prop="totalPage"
    @changePage="onChangePage"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import Top from '@/components/templates/Top.vue'

export default Vue.extend({
  components: {
    Top,
  },
  // @ts-ignore
  async asyncData({ app, query }) {
    const pageNo = query.page || 1
    const path = '/portfolios?page=' + pageNo
    const res = await app.$axios.get(path)

    return { apiResult: res.data }
  },
  data() {
    return {
      currentPage: 1,
      totalPage: 1,
    }
  },
  methods: {
    onChangePage(newPage) {
      // @ts-ignore
      this.currentPage = newPage
      // @ts-ignore
      this.receiveData()
    },
    async receiveData() {
      // @ts-ignore
      const path = '/portfolios?page=' + this.currentPage

      // @ts-ignore
      const res = await this.$axios.get(path)
      return { apiResult: res.data }
    },
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.title {
  display: block;
  font-family: Quicksand, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 100px;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  font-size: 42px;
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
