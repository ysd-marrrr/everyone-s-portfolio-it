import PortfolioCard from '@/components/molecules/Card/PortfolioCard.vue'

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
