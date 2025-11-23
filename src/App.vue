<script setup>
  import MainHeader from './components/MainHeader.vue';
  import ProductCard from './components/ProductCard.vue';
  import { PRODUCTS } from './shared/constants';

</script>

<template>
  <main class="main">
    <div class="container">
      <MainHeader />
      <section class="products-list">
        <ProductCard
          v-for="props in PRODUCTS"
          :description="props.description"
          :id="props.id"
          :preview="props.preview"
          :price="props.price"
          :title="props.title"
        />
      </section>
      
    </div>
  </main>
</template>

<style lang="scss">
  @import url('./styles/style.scss');
</style>
