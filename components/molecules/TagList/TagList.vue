<template>
  <ul :class="'tags ' + customClassProp">
    <tag
      v-for="(item, index) in tagList"
      :key="index"
      :custom-class-prop="item.style"
    >
      {{ item.text }}
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
    customClassProp: {
      type: String,
      default: ''
    },
    tagListProp: {
      type: Array,
      default() {
        return [
          { text: 'sample 1', style: 'is-info' },
          { text: 'sample 2', style: 'is-warning' },
          { text: 'sample 3', style: 'is-danger' }
        ]
      }
    }
  },
  computed: {
    tagList() {
      this.tagListProp.forEach((element) => {
        if ('style' in element === false) {
          element.style = ''
        }
      })
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
