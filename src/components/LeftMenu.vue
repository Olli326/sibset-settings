<template>
    <div class="left-menu">
        <div class="abanents-info">
            <div class="abanents-balance">
                <div>Баланс</div>
                <div class="summa">749 ₽</div>
                <div class="bonuses">225 б.</div>
            </div>
            <div class="abanents-number">
                <div>Лицевой счет <a href="">Все счета</a></div>
                <div class="number">12000001 <span class="arrow"></span></div>
            </div>
            <div>Ближайшая дата списания 28.08</div>
            <div>До списания внесите еще 90 ₽</div>
        </div>

        <ul class="menu-list">
            <li class="list-item active">
                <span class="d-flex">
                    <img src="../assets/services.svg" alt="">
                    <a href="/services">Мои услуги</a>
                </span>
            </li>
            <li class="list-item">
                <span class="d-flex">
                    <img src="../assets/credit_card.svg" alt="">
                    <a href="">Оплата</a>
                </span>
                <span class="footnote">Отсрочка платежа, автоплатеж</span>
            </li>
            <li class="list-item">
                <span class="d-flex">
                    <img src="../assets/diagram.svg" alt="">
                    <a href="">Расходы и пополнения</a>
                </span>
            </li>
            <li class="list-item">
                <span class="d-flex">
                    <img src="../assets/lock.svg" alt="">
                    <a href="">Добровольная блокировка</a>
                </span>
                <span class="footnote">Отключена</span>
            </li>
        </ul>

        <ul class="menu-list menu-list-info">
            <li class="list-item">
                <span class="d-flex">
                    <img src="../assets/star.svg" alt="">
                    <a href="">Сибсети Бонус</a>
                </span>
            </li>
            <li class="list-item">
                <span class="d-flex">
                    <img src="../assets/document.svg" alt="">
                    <a href="">Документы</a>
                </span>
            </li>
            <li class="list-item requests">
                <span class="d-flex">
                    <img src="../assets/write.svg" alt="">
                    <a href="">Заявки</a>
                </span>
                <default-counter :count="2" size="m" />
            </li>
        </ul>
    </div>
</template>

<script>
import DefaultCounter from '@/components/DefaultCounter.vue';

export default {
  name: 'LeftMenu',

  components: {
    DefaultCounter,
  },
};
</script>

<style scoped lang="scss">
.left-menu {
    width: 300px;
}

.abanents-info {
    margin-bottom: 30px;
    padding: 20px;
    width: 260px;
    height: 198px;
    background-color: #0D5CF0;
    border-radius: 15px;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
}

.abanents-balance,
.abanents-number {
    position: relative;
    margin-bottom: 10px;
}

.abanents-balance {
    .summa {
        margin-top: 5px;
        font-size: 32px;
        line-height: 42px;
    }

    .bonuses {
        position: absolute;
        top: 0;
        right: 0;
        padding: 8px 10px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        font-size: 16px;
        line-height: 24px;
    }
}

.abanents-number {
    a {
        margin-left: 7px;
        text-decoration: underline;
        color: #fff;
    }

    .number {
        display: flex;
        align-items: center;
        margin-top: 5px;
        font-size: 32px;
        line-height: 42px;
    }

    .arrow {
        display: flex;
        margin-left: 10px;
        width: 24px;
        height: 24px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;

        &::after {
            content: "";
            width: 24px;
            height: 24px;
            background-image: url('../assets/arrow.svg');
        }
    }
}

.menu-list-info {
        margin-top: 20px;
}

.list-item {
    display: flex;
    flex-direction: column;
    padding: 20px 15px 20px 20px;

    img {
        margin-right: 10px;
    }

    &.active a {
        font-weight: 600;
        color: #0D5CF0;
    }

    &.requests {
        flex-direction: row;
        justify-content: space-between;
    }
}

.footnote {
    margin-top: 10px;
    font-size: 14px;
    line-height: 21px;
    color: #6F6F71;
}
</style>
