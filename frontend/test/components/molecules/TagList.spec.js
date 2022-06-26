import { mount } from '@vue/test-utils'
import TagList from '@/components/molecules/TagList/TagList.vue'

describe('TagList', () => {
  const props = {
    tagListProp: ['Go', 'Apache Spark', 'Twitter API', 'ShellScript', 'Flask'],
  }

  it('タグリストのpropsがセットされているか確認', () => {
    const wrapper = mount(TagList, { propsData: { ...props } })
    expect(wrapper.props().tagListProp).toBe(props.tagListProp)
  })

  it('タグリストのpropsはdefaultで正しい形式(Array)になっているか', () => {
    const wrapper = mount(TagList)
    expect(wrapper.props().tagListProp).toStrictEqual([])
  })
})
