import Pagination from '@/components/molecules/Pagination/Pagination.vue'

export default {
  title: 'molecules/Pagination/Pagination',
}

export const singlePage = () => ({
  components: { Pagination },
  template: '<pagination/>',
})

export const notTruncated = () => ({
  components: { Pagination },
  template: '<pagination :current-page-prop="2" :total-page-prop="4"/>',
})

export const leftTruncated = () => ({
  components: { Pagination },
  template: '<pagination :current-page-prop="7" :total-page-prop="9"/>',
})

export const rightTruncated = () => ({
  components: { Pagination },
  template: '<pagination :current-page-prop="3" :total-page-prop="9"/>',
})

export const bothTruncated = () => ({
  components: { Pagination },
  template: '<pagination :current-page-prop="5" :total-page-prop="9"/>',
})

export const customMaxPage = () => ({
  components: { Pagination },
  template:
    '<pagination :current-page-prop="7" :total-page-prop="19" :max-display-page-prop="7"/>',
})
