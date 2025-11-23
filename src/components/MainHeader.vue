<template>
  <header class="header">
    <h1 class="title">наша продукция</h1>
    <div class="header__inner">
      <div class="header__inner-products">
        <span class="header__inner-info">
          3 товара <br>
          на сумму 3 500 ₽  
        </span>
        <img src="../assets/images/basket.svg" alt="" class="header__inner-basket" id="basket">
      </div>
      <TextButton text="Выйти" />
    </div>
  </header>
</template>
<script>
import TextButton from './TextButton.vue';

export default {
  name: 'MainHeader',
  components: {
    TextButton
  }

}
</script>
<style>
  
</style>