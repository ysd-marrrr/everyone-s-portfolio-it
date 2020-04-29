import PortfolioCardList from '@/components/organisms/Section/PortfolioCardList.vue'
import HeaderNav from '@/components/organisms/Section/HeaderNav.vue'

export default {
  title: '/organisms/Section'
}

export const portfolioCardList = () => ({
  components: { PortfolioCardList },
  template: `<portfolio-card-list />`
})

export const headerNav = () => ({
  components: { HeaderNav },
  template: `<header-nav />`
})
