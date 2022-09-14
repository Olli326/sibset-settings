<template>
<div class="input-group">
    <span class="caption">{{ caption }}</span>
    <input type="text" :name="inputName" :class="className" :placeholder="placeholder">
</div>
</template>

<script>
export default {
  name: 'InputGroup',

  props: {
    caption: {
      type: String,
      required: true,
    },
    inputName: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped lang="scss">
.input-group {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
        border: 2px solid #EAEAEC;
        border-radius: 8px;
        outline: none;
    }

    input[type=text] {
        margin-top: 10px;
        padding: 0 20px;
        width: 206px;
        height: 44px;

        &.input-email {
            width: 302px;
        }
    }
}
</style>
