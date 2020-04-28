import PortfolioCardList from '@/components/organisms/Section/PortfolioCardList.vue'

export default {
  title: '/organisms/Section/PortfolioCardList'
}

export const portfolioCardList = () => ({
  components: { PortfolioCardList },
  template: `<portfolio-card-list />`
})
