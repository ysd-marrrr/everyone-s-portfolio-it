<template>
  <div class="portfolio-image-wrapper">
    <div v-if="imageUrlProp == ''" class="no-image">
      <div class="inner">
        <p class="no-image-message">NOW<br />PRINTING</p>
      </div>
    </div>
    <div v-else class="has-image">
      <div class="inner" :style="portfolioImageStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrlProp: {
      type: String,
      default: ''
    }
  },
  computed: {
    portfolioImageStyle() {
      return {
        '--portfolio-image-url':
          'url("' + this.imageUrlProp + '") 0 0 no-repeat'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 正方形のまま「レスポンシブに」サイズを小さくする
// thx: http://wreath-ent.co.jp/blog-3560/
.portfolio-image-wrapper {
  position: relative;
  width: 85%;
  height: auto;
  text-align: center;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .has-image {
    .inner {
      background: var(--portfolio-image-url);

      background-position: center center;
      background-size: cover;
    }
  }

  .no-image {
    .inner {
      background: lightgray;
    }

    .no-image-message {
      font-family: 'Comfortaa', cursive;
      font-size: 250%;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
    }
  }
}

// タブレット以上の場合は横に複数枚並べる
@media screen and (min-width: 769px) {
  .portfolio-image-wrapper {
    width: 95%;

    .inner {
      left: 2.5%;
    }
  }
}

// モバイルの場合は横いっぱいカードを表示する
@media screen and (max-width: 768px) {
  .portfolio-image-wrapper {
    width: 100%;
    .inner {
      left: 0;
    }
  }
}
</style>
