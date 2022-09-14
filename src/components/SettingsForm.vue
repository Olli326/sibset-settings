<template>
<form>
    <div class="form-group">
        <h3>Средства связи</h3>
        <input-group caption="Основной телефон" input-name="phone" />
        <a href="" class="link-regular link-primary">Проверить дополнительный телефон</a>
        <input-group caption="Email" input-name="email" class-name="input-email" />
        <div class="checkbox-custom">
            <input type="checkbox" name="subscribe" id="subscribe">
            <label for="subscribe" class="caption">
                Уведомлять при недостаточном балансе
            </label>
        </div>
    </div>
    <div class="form-group">
        <h3>Авторизация</h3>
        <span class="note">
            Из дома вы попадаете в личный кабинет без ввода пароля по умолчанию. Поставьте галочку
            ниже, если хотите обезопасить свой личный кабинет от сторонних лиц.
        </span>
        <div class="checkbox-custom ask-password">
            <input type="checkbox" name="ask_password" id="ask_password">
            <label for="ask_password" class="caption">
                Всегда спрашивать пароль для входа
            </label>
        </div>
    </div>
    <div class="form-group">
        <h3>Сменить пароль</h3>
        <span class="note">
            Новый пароль должен состоять не менее чем из 6 символов, может содержать латинские буквы
            (A—Z, a—z) и цифры (0—9). Пароль чувствителен к регистру.
        </span>
        <div class="group-control">
            <input-group
            caption="Новый пароль"
            input-name="new_password"
            placeholder="Введите пароль"
            />
            <input-group
            caption="Повторите пароль"
            input-name="confirm_password"
            placeholder="Введите пароль"
            />
        </div>
    </div>
    <submit-button btn-text="Сохранить изменения" />
</form>
</template>

<script>
import InputGroup from '@/components/InputGroup.vue';
import SubmitButton from '@/components/SubmitButton.vue';

export default {
  name: 'SettingsForm',

  components: {
    InputGroup,
    SubmitButton,
  },
};
</script>

<style scoped lang="scss">
.form-group {
    display: flex;
    flex-direction: column;
    padding: 30px 0;

    &:not(:last-of-type) {
        border-bottom: 2px solid #EAEAEC;
    }

    & > .note {
        margin-top: 10px;
    }

    .group-control {
        display: flex;

        .input-group:first-child {
            margin-right: 20px;
        }
    }

    .link-regular {
        margin-top: 10px;
    }

    label {
        display: flex;
        align-items: center;
        margin-top: 10px;
        color: #1C1C1E;
    }
}

.checkbox-custom {
    position: relative;
    display: flex;
    input[type=checkbox] {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    input[type=checkbox] + label {
        display: inline-flex;
        align-items: center;
        user-select: none;

        &:before {
            content: '';
            display: inline-block;
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            flex-grow: 0;
            border: 2px solid #EAEAEC;
            border-radius: 8px;
            margin-right: 10px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
        }
    }

    input[type=checkbox]:checked + label::before {
        border-color: #0D5CF0;
        background-color: #0D5CF0;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }

    &.ask-password {
        margin-top: 10px;
    }
}
</style>
