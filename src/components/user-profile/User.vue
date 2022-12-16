<template>
    <div :class="[activeUser === null ? 'user__wrapper' : 'user__wrapper active']" v-if="activeUser !== null">
        <header>
            <button class="btn-icon" @click="this.closeActiveUser">
                <img src="@/assets/left-arrow.png" />
            </button>
        </header>
        <div class="dividing-stroke"></div>
        <div class="user__img">
            <img src="@/assets/user-img.jpg" />
        </div>
        <div class="user__info">
            <h2 class="user__name">{{ activeUser.name }}</h2>
            <h3 class="user__email">email: <span>{{ activeUser.email }}</span></h3>
            <h3 class="user__phone">phone: <span>{{ activeUser.phone }}</span></h3>
            <h2 class="user__about-title">О себе</h2>
            <p class="user__about">{{ this.text }}</p>
        </div>
    </div>
    <h3 class="user__select" v-else>Select a user to view his profile</h3>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
    data() {
        return {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }
    },
    methods: {
        ...mapMutations({
            closeActiveUser: 'users/closeActiveUser',
        }),
    },
    computed: {
        ...mapGetters({
            activeUser: 'users/activeUser',
        }),
    },
}

</script>

<style scoped lang='scss'>
.user__wrapper {
    padding: 1.875em 1.875em 1.25em 1.25em;
    border-left: 1px solid #E0E0E0;
    width: 70%;
    display: flex;
    position: relative;
    background-color: $main-background;
    align-items: start;

    header {
        display: none;
    }

    .dividing-stroke {
        position: absolute;
        top: -30px;
        bottom: -20px;
        left: 0;
        width: 2px;
        background-color: $main-background;
        z-index: -1;
    }

    .user__img {
        width: 40%;
        height: 18.125em;
        border: 1px solid #E0E0E0;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .user__info {
        width: 60%;
        display: flex;
        flex-direction: column;
        row-gap: 0.625em;
        align-items: start;
        padding-left: 3.75em;
        color: $main-color;

        .user__email,
        .user__phone {
            font-size: 0.875em;
            font-weight: 600;

            span {
                color: $secondary-color;
            }
        }
        .user__name, .user__about-title {
            @extend %tpl-h2;
            color: $main-color;
        }
        .user__about-title  {
            margin-top: 10px;
        }
        .user__about {
            @extend %tpl-h3;
            text-align: left;
            white-space: normal;
            margin-top: 0.938em;
        }
    }
}
.user__select {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 30px 20px 22px;
    border-left: 1px solid #E0E0E0;
    width: 70%;
    color: $secondary-color;
    @extend %tpl-h3;
    white-space: normal;
}

/* --- MEDIA --- */

@media (max-width: $breakpoint-tablet) {
    .user__select {
        display: none;
    }
    .user__wrapper {
        font-size: 14px;
        flex-direction: column;
        align-items: center;
        border: none;

        header {
            display: flex;
            width: 100%;
            margin-bottom: 0.625em;
            padding-bottom: 0.313em;
            border-bottom: 1px solid #e0e0e0;
        }
        .btn-icon {
            background: #e0e0e0;
            border: none;
            padding: 5px;
            border-radius: 12px;
            outline: none;

            img {
                width: 30px;
                height: 30px;
                object-fit: contain;
            }
        }
        &.active {
            display: flex;
            width: 100%;
        }
        .user__img {
            width: 100%;
        }
        .user__info {
            width: 100%;
            align-items: flex-start;
            padding: 0;
        }
    }
}

@media (max-width: $breakpoint-mobile) {
    .user-select {
        display: none;
    }
}
</style>