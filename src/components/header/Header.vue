<template>
    <header class="app__header">
        <h1>CompanyName</h1>
        <h3>User</h3>
    </header>
</template>

<script>

export default {
}

</script>

<style lang="scss" scoped>
.app__header {
    display: flex;
    justify-content: space-between;
    padding: 1.875em 0px;
    align-items: center;

    h1 {
        @extend %tpl-company;
    }

    h2 {
        color: $main-color;
        font-size: 1em;
        font-weight: 400;
    }
}

/*-- MEDIA --*/ 

@media (max-width: $breakpoint-mobile-mini) {
    .app__header {
        font-size: 12px;
    }
}

</style>