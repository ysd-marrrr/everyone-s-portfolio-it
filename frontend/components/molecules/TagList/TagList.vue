<template>
  <ul class="tags">
    <tag v-for="(item, index) in tagList" :key="index">
      {{ item }}
    </tag>
  </ul>
</template>

<script>
import Tag from '@/components/atoms/Tag/Tag.vue'
export default {
  components: {
    Tag,
  },
  props: {
    tagListProp: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    tagList() {
      return this.tagListProp
    },
  },
}
</script>

<style lang="scss" scoped>
// タグ用共通スタイル
ul.tags {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
</style>
