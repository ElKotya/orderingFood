<template>
  <header class="header">
    <h1 class="title">наша продукция</h1>
    <div class="header__inner">
      <div class="header__inner-products">
        <span class="header__inner-info">
          {{store.getCount}} {{ productWord }} <br>
          на сумму {{ store.getPrice }} ₽
        </span>
        <RouterLink to="/basket"><IconButton size="lg" type="secondary" ><Basket /></IconButton></RouterLink>
      </div>
      <TextButton text="Выйти" type="secondary" />
    </div>
  </header>
</template>
<script setup>
import Basket from '../icons/basket-icon.vue';
import IconButton from '../ui/IconButton.vue';
import TextButton from '../ui/TextButton.vue';
import { computed } from 'vue';
import { normalize_count_form } from '../../shared/utils';
import { useBasketStore } from '@/stores/productList';

const store = useBasketStore();

const productWord = computed(() => normalize_count_form(store.getCount, ['товар', 'товара', 'товаров']))

</script>
<style>

</style>
