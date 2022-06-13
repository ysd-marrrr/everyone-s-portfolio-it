import Top from '@/components/templates/Top.vue'

// サンプルデータの読み込み
import { generateSampleData } from '@/storybook-data/sampleData.js'
const sampleData = generateSampleData()

export default {
  title: 'templates/TopPage',
}

export const top = () => ({
  components: { Top },
  data: () => ({ sampleData }),
  template: `<top :portfolio-list-prop="sampleData"/>`,
})
