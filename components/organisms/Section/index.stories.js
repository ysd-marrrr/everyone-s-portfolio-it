import HeaderNav from '@/components/organisms/Section/HeaderNav.vue'
import PortfolioCardList from '@/components/organisms/Section/PortfolioCardList.vue'
import SiteFooter from '@/components/organisms/Section/SiteFooter.vue'

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

export const siteFooter = () => ({
  components: { SiteFooter },
  template: `<site-footer />`
})
