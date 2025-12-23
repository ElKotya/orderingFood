import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { PRODUCTS } from '@/shared/constants'
import { v4 } from 'uuid'

export const useProductListStore = defineStore('productList', () => {
  const productList = ref(PRODUCTS)
  const getProductList = computed(() => productList.value)
  const getProductById = (id) => {
    return productList.value.filter((item) => item.id === +id)[0]
  }

  return { productList, getProductList, getProductById }
})

export const useBasketStore = defineStore('basket', () => {
  const basket = ref([])
  const getBasket = computed(() => basket.value)
  const getCount = computed(() => basket.value.length)
  const getPrice = computed(() => basket.value.reduce((acc, item) => acc + item.price, 0))
  const addToBasket = (product) => {
    basket.value.push({...product, id: v4()});
  }
  const removeFromBasket = (id) => {
    basket.value = basket.value.filter((item) => item.id !== id)
  }

  return { basket, getBasket, getCount, getPrice, addToBasket, removeFromBasket }
})
