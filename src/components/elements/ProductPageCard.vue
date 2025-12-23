<template>
  <div class="wrapper">
    <!-- не получилось динамически вставить путь к картинке -->
    <img src='@/assets/images/product.png' alt="product image" class="image">
    <div class="info">
      <h2 class="info_title">{{ product.title }}</h2>
      <p class="info_description">{{ product.description }}</p>
      <div class="info_footer">
        <span>{{ product.price }} ₽</span>
        <TextButton @click="onHandleAddClick" text="В корзину" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useBasketStore, useProductListStore } from '@/stores/productList';
import TextButton from '../ui/TextButton.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

  const store = useBasketStore();
  const productListStore = useProductListStore();
  const route = useRoute();
  const id = route.params.id;
  const product = ref(productListStore.getProductById(id))

  const onHandleAddClick = (e) => {
    e.stopPropagation();

    store.addToBasket(product.value);
  }
</script>
<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 200px;
    padding-top: 30px;
    padding-left: 142px;
    padding-right: 70px;
  }
  .image {
    width: 503px;
    height: 503px;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 21px;
    &_title {
      font-weight: 500;
      font-size: 30px;
      color: #D58C51;
    }
    &_description {
      font-weight: 400;
      font-size: 14px;
      color: #FFFFFF;
      height: 213px;
    }
    &_footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > span {
        color: #FFFFFF;
        font-weight: 500;
        font-size: 23px;
        min-width: 80px;
      }
    }
  }
</style>
