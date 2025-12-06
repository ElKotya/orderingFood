<template>
  <header class="header">
    <h1 class="title">наша продукция</h1>
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
<script>
import Basket from '../icons/basket-icon.vue';
import IconButton from '../ui/IconButton.vue';
import TextButton from '../ui/TextButton.vue';

export default {
  name: 'MainHeader',
  components: {
    TextButton, IconButton, Basket
  }
}
</script>
<style>

</style>
