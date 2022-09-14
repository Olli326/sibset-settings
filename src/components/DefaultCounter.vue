<template>
    <span :class="['counter-' + size, 'counter']">{{ count }}</span>
</template>

<script>
export default {
  name: 'DefaultCounter',

  props: {
    count: {
      type: Number,
      default: 0,
    },
    size: {
      type: String,
      default: 's',
    },
  },
};
</script>

<style scoped lang="scss">
    .counter {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-weight: 600;
        color: #fff;
        background-color: #0D5CF0;

        &-s {
          width: 15px;
          height: 15px;
          font-size: 8px;
          line-height: 11px;
        }

        &-m {
          width: 24px;
          height: 24px;
          font-size: 12px;
          line-height: 18px;
        }
    }
</style>
