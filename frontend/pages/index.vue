<template>
  <top :portfolio-list-prop="apiResult.data" />
</template>

<script lang="ts">
import Vue from 'vue'
import Top from '@/components/templates/Top.vue'

export default Vue.extend({
  components: {
    Top
  },
  async asyncData({ app, query }) {
    const pageNo = query.page || 1
    const path = '/portfolios?page=' + pageNo
    const res = await app.$axios.get(path)
    return { apiResult: res.data }
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
