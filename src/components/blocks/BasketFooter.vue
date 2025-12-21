<template>
    <div class="footer-wrapper">
        <div class="divider" />
        <div class="container">
            <div class="wrapper">
                <div class="price">
                    <span class="summary">
                        Заказ на сумму:
                    </span>
                    <span class="sum">{{ store.getPrice }} ₽</span>
                </div>
                <TextButton text="Оформить заказ" type="primary" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { useBasketStore } from '@/stores/productList';
import TextButton from '../ui/TextButton.vue'

const store = useBasketStore();
</script>
<style lang="scss" scoped>
    .footer-wrapper {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100vw;
        background-color: #161516;
    }
    .container {
        width: 860px;
    }
    .divider {
        width: 100%;
        border-top: 1px solid #D58C51;
    }

    .wrapper {
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .price {
        display: flex;
        gap: 16px;
        align-items: center;
        & .summary {
            text-transform: uppercase;
            font-size: 21px;
            color: #FFFFFF;
        }

        & .sum {
            text-transform: uppercase;
            font-size: 18px;
            color: #D58C51;
        }
    }
</style>
