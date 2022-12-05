<template>
    <li v-for="user in users" :key="user.id" class="search__user" @click="updateActiveUser(user)">
        <div class="user__img">
            <img src="@/assets/user-img.jpg" />
        </div>
        <div :class="[activeUser?.id === user.id ? 'user__info-active' : 'user__info']">
            <h3 class="user__name">{{ user.username }}</h3>
            <h3 class="user__email">{{ user.email }}</h3>
        </div>
    </li>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
    props: {
        users: {
            type: Array,
            default: [],
        }
    },
    methods: {
        ...mapMutations({
            updateActiveUser: "users/updateActiveUser",
        }),
    },
    computed: {
        ...mapGetters({
            activeUser: "users/activeUser",
        }),
    },
}

</script>

<style scoped lang="scss">
.search__user {
    display: flex;
    box-shadow: $box-shadow;
    border-radius: 10px;
    background-color: #FFFFFF;
    width: 100%;
    overflow: hidden;

    .user__img {
        width: 30%;
        height: 4.375em;
        border-right: 1px solid #E0E0E0;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .user__info {
        width: 70%;
        display: flex;
        flex-direction: column;
        padding: 0px 0.938em;
        justify-content: center;
        align-items: start;
        @extend %tpl-h3;

        .user__name {
            color: $main-color;
            @extend %tpl-text-ellipsis;
        }

        .user__email {
            color: $secondary-color;
            @extend %tpl-text-ellipsis;
        }
    }

    .user__info-active {
        @extend .user__info;
        background: #E0E0E0;
    }
}

@media (max-width: $breakpoint-tablet) {
    .search__user {
        font-size: 14px;
    }
}

</style>