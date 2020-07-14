import PaginationBullet from '@/components/atoms/Pagination/PaginationBullet.vue'

export default {
  title: 'atoms/Pagination/PaginationBullet'
}

export const single = () => ({
  components: { PaginationBullet },
  template: '<pagination-bullet :page-prop="1"/>'
})
