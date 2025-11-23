<template>
    <button
        :class="{
                button: true,
                primary: type === 'primary',
                secondary: type === 'secondary',
                lg: size !== 'sm',
            }"
    >
        <slot/>
    </button>
</template>
<script>
export default {
    name: 'IconButton',
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: 'sm',
        }
    },
    setup() {

    }
}
</script>
<style lang="scss" scoped>
    $base-color: #D58C51;
    .button {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: transparent;
        transition: 0.5s;
    }
    .primary {
        color: white;
        border: 1px solid white;
        &:hover {
            background-color: $base-color;
            border-color: $base-color;
        }
    }
    .secondary {
        background-color: $base-color;
        &:hover {
            background-color: transparent;
            border: 1px solid $base-color;
        }
    }
    .ghost {
        border: 1px solid $base-color;
        &:hover {
            opacity: 0.8;
        }
    }
    .lg {
        width: 50px;
        height: 50px;
    }
</style>