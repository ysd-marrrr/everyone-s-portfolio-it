import HeaderNav from '@/components/organisms/Section/HeaderNav.vue'
import PortfolioCardList from '@/components/organisms/Section/PortfolioCardList.vue'
import SiteFooter from '@/components/organisms/Section/SiteFooter.vue'

// サンプルデータの読み込み
import { generateSampleData } from '@/storybook-data/sampleData.js'
const sampleData = generateSampleData()

export default {
  title: 'organisms/Section',
}

export const portfolioCardList = () => ({
  components: { PortfolioCardList },
  data: () => ({ sampleData }),
  template: `<portfolio-card-list :portfolio-list-prop="sampleData"/>`,
})

export const headerNav = () => ({
  components: { HeaderNav },
  template: `<header-nav />`,
})

export const siteFooter = () => ({
  components: { SiteFooter },
  template: `<site-footer />`,
})
