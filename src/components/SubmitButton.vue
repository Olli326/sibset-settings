<template>
<input type="submit" :value="btnText" :class="['button-' + btnColor, 'submit-button']">
</template>

<script>
export default {
  name: 'SubmitButton',

  props: {
    btnText: {
      type: String,
      required: true,
    },
    btnColor: {
      type: String,
      default: 'grey',
      validator(value) {
        return ['blue', 'grey'].includes(value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.submit-button {
    padding: 12px 20px;
    height: 48px;
    border: none;
    border-radius: 8px;
}

.button-blue {
    background: #0D5CF0;
    color: #FFF;
}

.button-grey {
    background: #EAEAEC;
    color: #6F6F71;
}
</style>
