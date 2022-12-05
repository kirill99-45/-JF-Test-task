<template>
    <div :class="[ activeUser === null ? 'search__wrapper' : 'search__wrapper hidden' ]">
        <header>
            <h2 class="search__title">Поиск сотрудников</h2>
            <input type="text" placeholder="Введите Id или имя" :value="searchQuery" @input="updateQuery" />
            <h3 class="result__title">Результаты</h3>
        </header>
        <main class="search__result-wrapper">
            <h4 v-if="searchQuery.length === 0 && !isUsersLoading && !allUsers.length" >
                начните поиск
            </h4>
            <template v-else>
                <ul class="result__users" v-if="allUsers.length > 0">
                    <UserCard :users="allUsers" />
                </ul>
                <h4 v-else-if="searchBadRequest.length > 0" class="result__title">{{ searchBadRequest }}</h4>
                <h4 class="result__title" v-else-if="!isUsersLoading">ничего не найдено </h4>
            </template>
            <Loader v-if="isUsersLoading" />
        </main>
    </div>
</template>

<script>

import UserCard from './UserCard.vue';
import { Loader } from '@/components/UI/index.js';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
    components: {
        UserCard,
        Loader,
    },
    methods: {
        ...mapMutations({
            setLoading: 'users/setLoading',
            setSearchQuery: 'users/setSearchQuery',
        }),
        ...mapActions({
            fetchUsers: 'users/fetchUsers',
        }),
        updateQuery(event) {
            this.setSearchQuery(event.target.value)
        },
    },
    async mounted() {
        this.fetchUsers()
    },
    computed: {
        ...mapState({
            searchQuery: state => state.users.searchQuery,
            isUsersLoading: state => state.users.isUsersLoading,
            searchBadRequest: state => state.users.searchBadRequest,
        }),
        ...mapGetters({
            allUsers: 'users/allUsers',
            activeUser : 'users/activeUser',
        }),
    },
}

</script>

<style scoped lang="scss">

$padding: 0.625em 1.875em 1.25em 1.25em;

.search__wrapper {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: $main-background;
    position: relative;

    header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: $padding;

        .search__title {
            @extend %tpl-h2;
            padding: $padding;
            padding-left: 0;
            display: block;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: left;
        }

        .result__title {
            @extend %tpl-h2;
            margin-top: 1.375em;
        }

        input {
            width: 100%;
            padding: 0.906em 1em;
            background: #FFFFFF;
            border: 1.5px solid #E9ECEF;
            border-radius: 8px;
            outline: none;
            @extend %tpl-h3
        }
    }

    .search__result-wrapper {
        padding: $padding;
        height: 37.5em;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 1.125em;
        align-items: start;
        position: relative;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        @include custom-hidden-scroll-bar;

        .result__title {
            text-align: left;
        }


        &:hover {
            @include custom-scroll-bar;
        }

        .result__users {
            display: flex;
            flex-direction: column;
            row-gap: 1.125em;
            width: 100%;
        }
    }
}

/*-- MEDIA --*/

@media (max-width: $breakpoint-tablet) {
    $animation-transition: 0.4s;

    .search__wrapper {
        font-size: 14px;
        width: 100%;
        transition: $animation-transition;
    }

    .search__wrapper {
        &.hidden {
            transition: $animation-transition;
            width: 0;
            overflow: hidden;
        }
    }
}

@media (max-width: $breakpoint-mobile) {
    .search__wrapper {
        font-size: 16px;
    }
}

</style>