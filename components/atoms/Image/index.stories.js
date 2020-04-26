import PortfolioImage from '@/components/atoms/Image/PortfolioImage.vue'

export default {
  title: '/atoms/Image/PortfolioImage'
}

export const hasImage = () => ({
  components: { PortfolioImage },
  template:
    '<portfolio-image :image-url-prop="\'https://placebear.com/640/480\'"/>'
})

export const noImage = () => ({
  components: { PortfolioImage },
  template: '<portfolio-image />'
})
