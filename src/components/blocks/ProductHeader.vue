<template>
  <header class="header">
    <RouterLink to="/"><IconButton type="ghost" ><LeftArrow /></IconButton></RouterLink>
    <div class="header__inner">
      <div class="header__inner-products">
        <span class="header__inner-info">
          {{ store.getCount }} {{productWord}} <br>
          на сумму {{ store.getPrice }} ₽
        </span>
        <RouterLink to="/basket"><IconButton size="lg" type="secondary" ><Basket /></IconButton></RouterLink>
      </div>
      <TextButton text="Выйти" type="secondary" />
    </div>
  </header>
</template>
<script setup>
import IconButton from '../ui/IconButton.vue';
import TextButton from '../ui/TextButton.vue';
import Basket from '../icons/basket-icon.vue';
import LeftArrow from '../icons/left-arrow.vue';
import { normalize_count_form } from '../../shared/utils';
import { computed } from 'vue';
import { useBasketStore } from '@/stores/productList';


const store = useBasketStore();

const productWord = computed(() => normalize_count_form(store.getCount, ['товар', 'товара', 'товаров']))


</script>
<style scoped lang="scss">
  .header {
    padding-bottom: 0;
    padding-left: 70px;
    padding-right: 70px;
  }
</style>
