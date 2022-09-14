<template>
  <div class="settings">
    <div class="narrow-content">
      <h2>Настройки</h2>
      <settings-form />
    </div>
    <div class="right-content">
      <button class="close">✕</button>
      <PromoBlock />
    </div>
  </div>
</template>

<script>
import SettingsForm from '@/components/SettingsForm.vue';
import PromoBlock from '@/components/PromoBlock.vue';

export default {
  name: 'SettingsPage',
  components: {
    SettingsForm,
    PromoBlock,
  },
};
</script>

<style scoped lang="scss">
.settings {
  display: flex;
  flex-wrap: wrap;
}

.right-content {
  .close {
    display: block;
    margin: 0 0 24px auto;
    width: 40px;
    height: 40px;
    background: #F9F9FB;
    border: none;
    border-radius: 50%;
    font-size: 18px;
    font-weight: 600;
    color: #6F6F71;
  }
}
</style>
