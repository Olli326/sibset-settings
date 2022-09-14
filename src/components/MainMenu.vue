<template>
    <header class="menu">
        <div class="container menu-wrapper">
            <a href="/" class="logo"></a>
            <ul class="menu-list">
                <li class="list-item">
                    <a href="">Магазин услуг</a>
                </li>
                <li class="list-item">
                    <a href="">Пункт меню 2</a>
                </li>
                <li class="list-item">
                    <a href="">Акции и персональные предложения</a>
                </li>
                <li class="notifications">
                    <default-counter :count="99" />
                </li>
                <li class="user">
                    <span class="user-name">Артем</span>
                    <div class="user-icon">А</div>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import DefaultCounter from '@/components/DefaultCounter.vue';

export default {
  name: 'MainMenu',

  components: {
    DefaultCounter,
  },
};
</script>

<style scoped lang="scss">
.menu {
    display: flex;
    height: 90px;
    background-color: #fff;
    border-bottom: 1px solid #EAEAEC;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);

    .menu-wrapper {
        justify-content: space-between;
    }

    .logo {
        display: flex;
        align-self: center;
        width: 162px;
        height: 40px;
        background: url('../assets/logo.svg') no-repeat;
        background-position-y: center;
    }

    .menu-list {
        display: flex;
        align-items: center;
    }

    .list-item {
        padding-left: 30px;

        &:first-child {
            padding-left: 0;
        }
    }

    .notifications {
        display: flex;
        justify-content: flex-end;
        margin: 0 20px;
        width: 50px;
        height: 50px;
        background: url('../assets/notifications.svg') no-repeat;
        background-position: center;
        cursor: pointer;
    }

    .user {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .user-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        width: 46px;
        height: 46px;
        border: 2px solid #0D5CF0;
        border-radius: 50%;
        background-color: #0D5CF0;
        box-shadow: inset 0px 0 0px 4px #fff;
        color: #fff;
    }
}
</style>
