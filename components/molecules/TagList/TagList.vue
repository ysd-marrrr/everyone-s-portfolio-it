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
    Tag
  },
  props: {
    tagListProp: {
      type: Array,
      default() {
        return ['sample 1', 'sample 2', 'sample 3']
      }
    }
  },
  computed: {
    tagList() {
      return this.tagListProp
    }
  }
}
</script>

<style lang="scss" scoped>
// タグ用共通スタイル
ul.tags {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
