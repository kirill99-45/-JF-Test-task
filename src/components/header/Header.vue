<template>
    <header class="app__header">
        <h1>Жилфонд</h1>
        <h3>Пользователь</h3>
    </header>
</template>

<script>

export default {

}

</script>

<style lang="scss">
@import '@/assets/styles.scss';
    
    .app__header {
        display: flex;
        justify-content: space-between;
        padding: 30px 0px;
        align-items: center;

        h1 {
            @extend %tpl-company
        }

        h2 {
            color: $main-color;
            font-size: 16px;
            font-weight: 400;
        }
    }

</style>