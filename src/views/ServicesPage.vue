<template>
  <div class="services">
    <stories-block />
    <div class="narrow-content">
      <div class="accordions">
        <accordion-services>
          <template v-slot:header>
            <div class="header-wrapper">
              <div class="header">
                <span class="h1">Интернет</span>
                <span class="h1">199 ₽/мес</span>
              </div>
              <div class="header-control">
                <div>
                  <a href="" class="link-regular link-primary">Сменить тариф</a>
                  <a href="" class="link-regular link-secondary">Отключить</a>
                </div>
                <span class="caption">Без учета подключенных услуг</span>
              </div>
              <div class="tariff">
                <span class="tariff-name">Корпоративный</span>
                <span class="tariff-additions">
                  <img src="../assets/game.svg" alt="">
                  <img src="../assets/kaspersky.svg" alt="">
                </span>
              </div>
              <div class="address">
                <p class="note">Адрес подключения:</p>
                <p>г. Новосибирск, ул. Сибиряков-Гвардейцев 89, кв 193</p>
              </div>
              <div class="warning">
                Ведутся технические работы, услуги по вашему адресу могут быть недоступны.
                Примерное время решения проблемы с 14:00 до 15:00.
              </div>
            </div>
          </template>
          <p class="pb-5">Lorem ipsum dolor sit amet, ut alii voluptaria est</p>

          <p class="pb-5">Ut vel percipit facilisi, sea partem veritus mandamus eu</p>
        </accordion-services>
        <accordion-services>
          <template v-slot:header>
            <div class="header-wrapper">
              <div class="header">
                <span class="h1">Телевидение</span>
                <span class="h1">499 ₽/мес</span>
              </div>
              <div class="tariff">
                <span class="tariff-name">Базовый ТВ</span>
                <span class="tariff-additions">
                  <img src="../assets/kino.svg" alt="">
                  <img src="../assets/fox.svg" alt="">
                  <img src="../assets/amediateka.svg" alt="">
                </span>
              </div>
              <div class="address">
                <p class="note">Адрес подключения:</p>
                <p>г. Новосибирск, ул. Сибиряков-Гвардейцев 89, кв 193</p>
              </div>
            </div>
          </template>
          <p class="pb-5">Lorem ipsum dolor sit amet, ut alii voluptaria est, ad</p>

          <p class="pb-5">Ut vel percipit facilisi, sea partem veritus mandamus eu,</p>
        </accordion-services>
      </div>
    </div>
  </div>
</template>

<script>
import StoriesBlock from '@/components/StoriesBlock.vue';
import AccordionServices from '@/components/AccordionServices.vue';

export default {
  name: 'ServicesPage',

  components: {
    StoriesBlock,
    AccordionServices,
  },
};
</script>

<style scoped lang="scss">
  .accordions {
    display: flex;
    flex-direction: column;

    .header-wrapper {
      width: 100%;

      .header {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      .link-primary {
        margin-right: 20px;
      }

      .header-control {
        display: flex;
        justify-content: space-between;
      }

      .tariff {
        display: flex;
        align-items: center;
        margin: 20px 0;

        .tariff-name {
          margin-right: 30px;
        }

        .tariff-additions img:not(:first-child) {
          position: relative;
          margin: 0px -10px;
        }
      }

      .address {
        p {
          padding-bottom: 20px;
        }
      }

      .warning {
        position: relative;
        padding-top: 20px;
        padding-left: 10px;
        border-top: 2px solid #EAEAEC;
        &::before {
          content: '';
          position: absolute;
          display: block;
          left: 0;
          width: 3px;
          height: calc(100% - 20px);
          min-height: 1px;
          border-radius: 10px;
          background-color: #FFC41F;
        }
      }
    }
  }
</style>
