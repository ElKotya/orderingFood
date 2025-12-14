<template>
  <div class="main">
    <div class="container">
      <ProductHeader />
    </div>
  </div>
  <div class="container">
    <ProductPageCard :product="product[0]" />
  </div>
</template>
<script setup>
import ProductHeader from '@/components/blocks/ProductHeader.vue';
import ProductPageCard from '@/components/elements/ProductPageCard.vue';
import { PRODUCTS } from '@/shared/constants';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const {params} = useRoute();
const product = computed(() => PRODUCTS.filter((item) => item.id === +params.id));

</script>
<style>

</style>
