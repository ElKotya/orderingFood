<template>
    <button
        :class="{ button: true, primary: type === 'primary', secondary: type !== 'primary' }"
    >
        {{ text }}
    </button>
</template>
<script>

export default {
    name: 'TextButton',
    props: {
        text: String,
        type: {
            type: String,
            default: 'primary'
        }
    },
    setup() {

    }
}
</script>
<style lang="scss" scoped>
    $base-color: #D58C51;
    $black-color: #131313;
    .button {
        min-width: 200px;
        padding: 12px;
        cursor: pointer;
        transition: 0.5s;
        font-size: 14px;
        font-weight: 400;
    }
    .primary {
        background-color: $base-color;
        color: $black-color;
        &:hover {
            background-color: transparent;
            color: $base-color;
            border: 1px solid $base-color;
        } 
    }
    .secondary {
        background-color: transparent;
        color: $base-color;
        border: 1px solid $base-color;
        &:hover {
            background-color: $base-color;
            color: $black-color;
        } 
    }
</style>