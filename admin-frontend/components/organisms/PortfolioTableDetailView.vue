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
          <th class="text-left">操作</th>
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
          <td>
            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    操作
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(dropItem, index) in dropdownItems"
                    :key="index"
                    @click="onClick(dropItem.action, item.id)"
                  >
                    <v-list-item-title>{{ dropItem.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </td>
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
  data() {
    return {
      dropdownItems: [
        { title: '編集', action: 'onClickEdit' },
        { title: 'サムネイル更新', action: 'onClickRefreshThumbnail' },
        { title: '削除', action: 'onClickDelete' },
      ],
    }
  },
  methods: {
    onClick(eventType, index) {
      console.log('onClick: ' + eventType + ' and ' + index)
      this.$emit(eventType)
    },
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
