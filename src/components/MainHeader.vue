<template>
  <header class="header">
    <h1 class="title">наша продукция</h1>
    <div class="header__inner">
      <div class="header__inner-products">
        <span class="header__inner-info">
          3 товара <br>
          на сумму 3 500 ₽  
        </span>
        <IconButton size="lg" type="secondary" ><Basket /></IconButton>
      </div>
      <TextButton text="Выйти" type="secondary" />
    </div>
  </header>
</template>
<script>
import IconButton from './IconButton.vue';
import TextButton from './TextButton.vue';
import Basket from '../assets/images/basket.svg'

export default {
  name: 'MainHeader',
  components: {
    TextButton, IconButton, Basket
  }
}
</script>
<style>
  
</style>