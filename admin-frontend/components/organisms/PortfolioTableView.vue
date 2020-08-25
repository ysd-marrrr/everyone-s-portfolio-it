<template>
  <v-simple-table class="portfolio-list">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">id</th>
          <th class="text-left">title</th>
          <th class="text-left">url</th>
          <th class="text-left">image_url</th>
          <th class="text-left">created_at</th>
          <th class="text-left">updated_at</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in portfolioListProp" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>
            <a :href="item.url" target="_blank">{{ item.url }}</a>
          </td>
          <td>{{ item.image_url }}</td>
          <td>{{ convertUtcToLocal(item.created_at) }}</td>
          <td>{{ convertUtcToLocal(item.updated_at) }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    portfolioListProp: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    convertUtcToLocal(uctDateStr) {
      return this.$dayjs(uctDateStr).format('YYYY-MM-DD HH:mm:ss')
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-list {
  a {
    color: rgb(191, 191, 255);
  }
}
</style>
