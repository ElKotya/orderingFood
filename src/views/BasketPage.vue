<script setup>
    import BasketCard from '../components/elements/BasketCard.vue';
    import BasketFooter from '../components/blocks/BasketFooter.vue';
    import BasketHeader from '../components/blocks/BasketHeader.vue';
    import { PRODUCTS } from '../shared/constants';

</script>

<template>
  <main class="main">
    <div class="container">
      <BasketHeader />
      <section class="product-list">
        <BasketCard
          v-for="props in PRODUCTS"
          :description="props.description"
          :id="props.id"
          :preview="props.preview"
          :price="props.price"
          :title="props.title"
        />
      </section>
    </div>
    <BasketFooter />
  </main>
</template>

<style lang="scss" scoped>
  .product-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 35px 0 100px;
  }
</style>