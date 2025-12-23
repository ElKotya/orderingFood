<template>
  <div class="products-card" @click="onHandleClick">
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
      <IconButton @click="onHandleAddClick" ><PlusWhite /></IconButton>
    </div>
  </div>
</template>
<script setup>
  import { useRouter } from 'vue-router';
  import PlusWhite from '../icons/plus-icon.vue';
  import IconButton from '../ui/IconButton.vue';
  import { useBasketStore } from '@/stores/productList';


  const props = defineProps({
    id: Number,
    preview: String,
    title: String,
    description: String,
    price: Number,
  })
  const store = useBasketStore();
  const onHandleAddClick = (event) => {
    event.stopPropagation();
    store.addToBasket(props);
  }

  const router = useRouter();

  const onHandleClick = () => {
    router.push(`/product/${props.id}`)
  }

</script>
<style lang="scss" scoped>
.products-card {
  display: flex;
  flex-direction: column;
  padding: 45px 20px 32px 20px;
  height: 550px;
  max-width: 310px;
  border: 1px solid #D58C51;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: #D58C51;
  }

  &__preview {
    margin-bottom: 32px;
    width: 100%;
  }

  &__title {
    font-weight: 500;
    font-size: 17px;
    margin-bottom: 14px;
  }

  &__description {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  .card__count {
    display: flex;
    gap: 10px;
  }

  &__count .card__count {
    &-minus, &-result, &-plus {
      font-size: 24px;
    }

    &-minus, &-plus {
      cursor: pointer;

      &:hover {
        color: #D58C51;
      }
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;

    &-price {
      font-weight: 500;
      font-size: 17px;
    }
  }
}
</style>
