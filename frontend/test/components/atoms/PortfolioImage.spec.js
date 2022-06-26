import { mount } from '@vue/test-utils'
import PortfolioImage from '@/components/atoms/Image/PortfolioImage.vue'

describe('PortfolioImage', () => {
  const propsHasImage = {
    imageUrlProp: 'https://placebear.com/640/480',
  }
  const propsNoImage = {
    imageUrlProp: '',
  }

  it('画像なし時はNOW PRINTING(.no-image-message)が表示されているか確認', () => {
    const wrapper = mount(PortfolioImage, { propsData: { ...propsNoImage } })
    expect(wrapper.findComponent('.no-image-message').exists()).toBe(true)
  })

  it('画像URLのpropsがセットされているか確認', () => {
    const wrapper = mount(PortfolioImage, { propsData: { ...propsHasImage } })
    expect(wrapper.props().imageUrlProp).toBe(propsHasImage.imageUrlProp)
  })

  it('URLから画像を表示するCSSが出力されるか確認', () => {
    const expectedResult = {
      '--portfolio-image-url':
        'url("' + propsHasImage.imageUrlProp + '") 0 0 no-repeat',
    }
    expect(
      PortfolioImage.computed.portfolioImageStyle.call(propsHasImage)
    ).toStrictEqual(expectedResult)
  })
})
