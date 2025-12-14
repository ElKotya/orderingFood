<template>
  <header class="header">
    <RouterLink to="/"><IconButton type="ghost" ><LeftArrow /></IconButton></RouterLink>
    <div class="header__inner">
      <div class="header__inner-products">
        <span class="header__inner-info">
          3 товара <br>
          на сумму 3 500 ₽
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


</script>
<style scoped lang="scss">
  .header {
    padding-bottom: 0;
    padding-left: 70px;
    padding-right: 70px;
  }
</style>
