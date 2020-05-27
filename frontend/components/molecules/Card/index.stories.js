import PortfolioCard from '@/components/molecules/Card/PortfolioCard.vue'

const tagSample = [
  'Go',
  'Apache Spark',
  'Twitter API',
  'ShellScript',
  'Flask',
  'jQuery',
  'Bulma',
  'nginx',
  'Jenkins',
  'BigQuery',
  'Ionic',
  'Bootstrap',
  'iOS(Objective-C)',
  'Android(Java)',
  'Unity(JS, C#)'
]

export default {
  title: 'molecules/Card/PortfolioCard'
}

export const hasImage = () => ({
  components: { PortfolioCard },
  template:
    '<portfolio-card :image-url-prop="\'https://placebear.com/640/480\'" />'
})

export const noImage = () => ({
  components: { PortfolioCard },
  template: '<portfolio-card />'
})

export const hasLongItem = () => ({
  components: { PortfolioCard },
  data: () => ({ tagSample }),
  template: `
    <portfolio-card :image-url-prop="'https://placebear.com/640/480'" :skill-list-prop="tagSample">
      <template v-slot:title>Super Long Lorem Ipsum 2 Prime Max</template>
    </portfolio-card>
    `
})
