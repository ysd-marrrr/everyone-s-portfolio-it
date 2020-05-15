import HeaderNav from '@/components/organisms/Section/HeaderNav.vue'
import PortfolioCardList from '@/components/organisms/Section/PortfolioCardList.vue'
import SiteFooter from '@/components/organisms/Section/SiteFooter.vue'

function generateSampleData() {
  const samples = []
  const url = 'https://www.y-mix.dev/'
  const imageUrl = ''
  const tagSample = [
    { text: 'Go' },
    { text: 'Apache Spark' },
    { text: 'Twitter API' },
    { text: 'ShellScript' },
    { text: 'Flask' },
    { text: 'jQuery' },
    { text: 'Bulma' },
    { text: 'nginx' },
    { text: 'Jenkins' },
    { text: 'BigQuery' },
    { text: 'Ionic' },
    { text: 'Bootstrap' },
    { text: 'iOS(Objective-C)' },
    { text: 'Android(Java)' },
    { text: 'Unity(JS, C#)' }
  ]
  for (let i = 0; i < 20; i++) {
    samples.push({
      url,
      imageUrl,
      title: 'Sample ' + String(i),
      skills: tagSample
    })
  }

  return samples
}

const sampleData = generateSampleData()

export default {
  title: '/organisms/Section'
}

export const portfolioCardList = () => ({
  components: { PortfolioCardList },
  data: () => ({ sampleData }),
  template: `<portfolio-card-list :portfolio-list-prop="sampleData"/>`
})

export const headerNav = () => ({
  components: { HeaderNav },
  template: `<header-nav />`
})

export const siteFooter = () => ({
  components: { SiteFooter },
  template: `<site-footer />`
})
