<template>
<vueper-slides
  class="stories no-shadow"
  :visible-slides="4"
  :bullets="false"
  slide-multiple
  :gap="3"
  :slide-ratio="1 / 4"
  :dragging-distance="200"
  :arrows="false"
  :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    class="story">
    <template #content>
      <img :src="slide.image" alt="" class="story-img">
      <div class="vueperslide__content-wrapper vueperslide__content-wrapper--outside-bottom">
        <div class="vueperslide__content story-content caption">{{ slide.content }}</div>
      </div>
    </template>
  </vueper-slide>
</vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'StoriesBlock',

  components: {
    VueperSlides,
    VueperSlide,
  },

  data() {
    return {
      slides: [
        { content: 'В школу под присмотром', image: require('../assets/Story1.png') },
        { content: 'Российская премьер-лига с Матч ТВ Премьер', image: require('../assets/Story2.png') },
        { content: 'Управляй легко!', image: require('../assets/Story3.png') },
        { content: 'Новые скидки и предложения от партнёров', image: require('../assets/Story4.png') },
        { content: 'Оплата через любой интернет-банк', image: require('../assets/Story5.png') },
      ],
    };
  },
};

</script>

<style scoped lang="scss">
  .story {
    width: 190px !important;
    height: 174px;
    border: 2px solid #0D5CF0;
    border-radius: 20px;

    ::v-deep .story-img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1
    }
  }

  ::v-deep .vueperslide__content-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;

    .story-content {
      color: #fff;
      margin-bottom: 12px;
      margin-left: 12px;
    }
  }
</style>
