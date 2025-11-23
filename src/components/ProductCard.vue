<template>
    <div class="products-card">
        <img :src='preview' alt="product image" class="products-card__preview">
        <h2 class="products-card__title">
            {{title}}
        </h2>
        <p class="products-card__description">
            {{description}} 
        </p>
        <div class="products-card__bottom">
            <span class="products-card__bottom-price">
                {{price}} ₽
            </span>
            <IconButton ><PlusWhite /></IconButton>
        </div>
    </div>
</template>
<script>
    import { toRefs } from 'vue';
    import IconButton from './IconButton.vue';
    import PlusWhite from '../assets/images/plus.svg';

    export default {
        name: 'ProductCard',
        props: {
            id: Number,
            preview: String,
            title: String,
            description: String,
            price: Number,
        },
        components: {
            IconButton,
            PlusWhite
        },
        setup(props) {
            const {description,id, preview, price, title} = toRefs(props);

            return {
                description, id, preview, price, title
            }
        },
    }
</script>
<style lang="scss" scoped>
    
</style>