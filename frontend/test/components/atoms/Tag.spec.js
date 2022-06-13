import { mount } from '@vue/test-utils'
import Tag from '@/components/atoms/Tag/Tag.vue'

describe('Tag', () => {
  it('Tagのslotが正しくセットされているか確認', () => {
    const sampleText = 'Vue.js'
    const wrapper = mount(Tag, {
      slots: {
        default: sampleText,
      },
    })
    expect(wrapper.find('span.tag').text()).toBe(sampleText)
  })
})
