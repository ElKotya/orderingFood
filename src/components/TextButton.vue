<template>
    <button class="header__inner-button">{{ text }}</button>
</template>
<script>
import { toRefs } from 'vue';

export default {
    name: 'TextButton',
    props: {
        text: String
    },
    setup(props) {
        const { text } = toRefs(props);
        return {
            text
        }
    }
}
</script>
<style lang="">
    
</style>