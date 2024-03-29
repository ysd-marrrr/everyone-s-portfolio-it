<template>
  <div class="portfolio-card">
    <a class="portfolio-link" :href="portfolioUrl">
      <portfolio-image :image-url-prop="imageUrlProp" />
    </a>
    <div class="portfolio-content">
      <a class="portfolio-link" target="_blank" :href="portfolioUrl">
        <h3 class="portfolio-title">
          <slot name="title">TITLE</slot>
        </h3>
      </a>
    </div>
    <div class="portfolio-footer">
      <tag-list
        :tag-list-prop="portfolioSkillList"
        :custom-class-prop="'portfolio-skill-list'"
      />
    </div>
  </div>
</template>

<script>
import TagList from '@/components/molecules/TagList/TagList.vue'
import PortfolioImage from '@/components/atoms/Image/PortfolioImage.vue'

export default {
  components: {
    TagList,
    PortfolioImage,
  },
  props: {
    urlProp: {
      type: String,
      default: '#portfolios',
    },
    imageUrlProp: {
      type: String,
      default: '',
    },
    skillListProp: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    portfolioUrl() {
      return this.urlProp
    },
    portfolioSkillList() {
      return this.skillListProp
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-card {
  position: relative;
  top: 0;
  padding: 0.5rem;
  margin: 0.5rem;
  background: white;
  border-radius: 5px;
  box-shadow: 0 1rem 30px 0 rgba(0, 0, 0, 20%);
  transition: all 0.5s ease;

  &:hover {
    top: -1rem;
  }
}

.portfolio-date {
  font-size: 2rem;
  letter-spacing: 0.25rem;
}

.portfolio-content {
  margin: 0.5rem 0 1rem;
  text-align: center;
}

// タブレット以上の場合は横に複数枚並べる
@media screen and (min-width: 1401px) {
  .portfolio-card {
    width: calc(25% - 1rem);
    max-width: 15rem;
  }
}

@media screen and (min-width: 900px) and (max-width: 1400px) {
  .portfolio-card {
    width: calc(33.3% - 1rem);
    max-width: 15rem;
  }
}

// モバイルの場合は横いっぱいカードを表示する
@media screen and (min-width: 640px) and (max-width: 899px) {
  .portfolio-card {
    width: calc(50% - 1rem);
    max-width: 100vw;
  }
}

@media screen and (max-width: 640px) {
  .portfolio-card {
    width: calc(100% - 1rem);
    max-width: 100vw;
  }
}
</style>
