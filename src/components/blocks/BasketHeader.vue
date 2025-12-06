<template>
    <header class="header">
        <div style="width: 80px;"></div>
        <div class="wrapper">
            <RouterLink to="/"><IconButton type="ghost" ><LeftArrow /></IconButton></RouterLink>
            <h1 class="title">Корзина с выбранными товарами</h1>
        </div>
        <TextButton text="Выйти" type="secondary" />
    </header>
</template>
<script>
import LeftArrow from '../icons/left-arrow.vue'
import IconButton from '../ui/IconButton.vue';
import TextButton from '../ui/TextButton.vue';

export default {
    name: 'BasketHeader',
    components: {
        TextButton,
        IconButton,
        LeftArrow
    }
}
</script>
<style lang="scss" scoped>
    .header {
        margin-bottom: 0;
    }
    .wrapper {
        display: flex;
        gap: 63px;
    }
</style>
