<template>
<div>
    <div class="accordion-header" @click.prevent="active = !active">
        <slot name="header"></slot>
        <span class="arrow-down"></span>
    </div>
    <div class="accordion-content" v-show="active">
        <slot></slot>
        <button class="close" @click.prevent="active = !active">✕</button>
    </div>
</div>
</template>

<script>
export default {
  name: 'AccordionServices',

  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped lang="scss">
.accordion-header,
.accordion-content {
    margin-bottom: 30px;
    padding: 20px;
    border: 2px solid #EAEAEC;
    border-radius: 15px;
}

.accordion-header {
    display: flex;

    .arrow-down {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        width: 32px;
        height: 32px;
        background: #F9F9FB;
        border-radius: 50%;

        &::after {
            content: "";
            width: 12px;
            height: 6px;
            background: url('../assets/arrow-down.svg') no-repeat;
        }
    }
}

.close {
    display: block;
    margin: 0 0 24px auto;
    width: 32px;
    height: 32px;
    background: #F9F9FB;
    border: none;
    border-radius: 50%;
    font-size: 13px;
    font-weight: 600;
    color: #0D5CF0;
}
</style>
