<template>
    <div class="user__wrapper">
        <div class="dividing-stroke"></div>
        <div class="user__img">
            <img src="@/assets/user-img.jpg" />
        </div>
        <div class="user__info">
            <h2>{{ activeUser.name }}</h2>
            <h3>email: <span>{{ activeUser.email }}</span></h3>
            <h3>phone: <span>{{ activeUser.phone }}</span></h3>
            <h2>О себе</h2>
            <p>{{ this.text }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }
    },
    computed: {
        ...mapGetters({
            activeUser: 'users/activeUser',
        })
    }
}

</script>

<style scoped lang='scss' >
@import '@/assets/styles.scss';

.user__wrapper {
    padding: 30px 30px 20px 22px;
    border-left: 1px solid #E0E0E0;
    width: 70%;
    display: flex;
    position: relative;
    background-color: $main-background;
    align-items: start;

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
        height: 290px;
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
        row-gap: 10px;
        align-items: start;
        padding-left: 60px;
        color: $main-color;

        h3 {
            font-size: 14px;
            font-weight: 600;

            span {
                color: $secondary-color;
            }
        }

        h2 {
            font-size: 16px;
            font-weight: 600;
            color: $main-color;
            margin-top: 10px;
        }

        h3 {
            font-size: 14px;
            color: $main-color;
        }

        p {
            color: $secondary-color;
            text-align: left;
            font-size: 14px;
            font-size: 400;
            margin-top: 15px;

        }
    }
}
</style>