<template>
  <v-simple-table>
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
          <td>{{ item.url }}</td>
          <td>{{ item.image_url }}</td>
          <td>{{ item.created_at }}</td>
          <td>{{ item.updated_at }}</td>
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
}
</script>
