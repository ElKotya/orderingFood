<template>
    <div class="basket-card">
        <img :src='preview' alt="product image" class="basket-card__preview">
        <div>
            <h2 class="basket-card__text">
                {{title}}
            </h2>
        </div>
        <div class="basket-card__right">
            <span class="basket-card__right-price">
                {{price}} ₽
            </span>
            <IconButton type="ghost" ><Cancel /></IconButton>
        </div>
    </div>
</template>
<script>
    import Cancel from '../icons/cancel-icon.vue';
    import IconButton from '../ui/IconButton.vue';

    export default {
        name: 'ProductCard',
        props: {
            id: Number,
            preview: String,
            title: String,
            price: Number,
        },
        components: {
            IconButton,
            Cancel
        },

    }
</script>
<style lang="scss" scoped>
    .basket-card {
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        gap: 88px;
        align-items: center;
        width: 860px;
        font-size: 18px;
        font-family: 'Montserrat';
        &__text {
            max-width: 310px;
            line-height: 100%;
            font-weight: 500;
        }
        &__preview {
            width: 132px;
            height: 132px;
        }
        &__right {
            display: flex;
            gap: 16px;
            align-items: center;
            font-weight: 400;
            &-price {
                color: #D58C51;
            }
        }
    }
</style>
