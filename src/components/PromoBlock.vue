<template>
<div class="promo-block">
    <h2 class="title">Подпишитесь на уведомления</h2>
    <p class="text">
        Получайте информацию о скором списании, персональных акциях и важных событиях!
    </p>
    <form>
        <input-group caption="Email" input-name="Email" />
        <submit-button btn-text="Подписаться" btn-color="blue" />
    </form>
</div>
</template>

<script>
import InputGroup from '@/components/InputGroup.vue';
import SubmitButton from '@/components/SubmitButton.vue';

export default {
  name: 'PromoBlock',

  components: {
    InputGroup,
    SubmitButton,
  },
};
</script>

<style scoped lang="scss">
.promo-block {
    padding: 20px;
    width: 260px;
    height: min-content;
    border-radius: 15px;
    background-color: #F9F9FB;

    .title,
    .text {
        margin-bottom: 20px;
    }

    .submit-button {
        margin-top: 20px;
    }
}
</style>
