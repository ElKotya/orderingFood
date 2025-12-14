<template>
  <div class="wrapper">
    <img src='../../assets/images/product.png' alt="product image" class="image">
    <div class="info">
      <h2 class="info_title">Свиные ребрышки на гриле</h2>
      <p class="info_description">Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений.</p>
      <div class="info_footer">
        <span>1 600 ₽</span>
        <TextButton text="В корзину" />
      </div>
    </div>
  </div>
</template>
<script setup>
import TextButton from '../ui/TextButton.vue';

</script>
<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 200px;
    padding-top: 30px;
    padding-left: 142px;
    padding-right: 70px;
  }
  .image {
    width: 503px;
    height: 503px;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 21px;
    &_title {
      font-weight: 500;
      font-size: 30px;
      color: #D58C51;
    }
    &_description {
      font-weight: 400;
      font-size: 14px;
      color: #FFFFFF;
      height: 213px;
    }
    &_footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > span {
        color: #FFFFFF;
        font-weight: 500;
        font-size: 23px;
        min-width: 80px;
      }
    }
  }
</style>
