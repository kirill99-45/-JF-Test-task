<template>
    <div class="search__wrapper">
        <header>
            <h2 class="search__title">Поиск сотрудников</h2>
            <input type="text" placeholder="Введите Id или имя" :value="searchQuery" @input="updateQuery" />
            <h3 class="result__title">Результаты</h3>
        </header>
        <main class="search__result-wrapper">
            <h4 v-if="searchQuery.length === 0 && !isUsersLoading && !allUsers.length"
                class="search__result-title">начните поиск</h4>
            <template v-else>
                <ul class="result__users" v-if="allUsers.length > 0">
                    <SearchUser :users="allUsers" />
                </ul>
                <h4 v-else-if="searchBadRequest.length > 0">{{ searchBadRequest }}</h4>
                <h4 class="result-title" v-else-if="!isUsersLoading">ничего не найдено </h4>
            </template>
            <Loader v-if="isUsersLoading" />
        </main>
    </div>
</template>

<script>
import SearchUser from './SearchUser';
import Loader from '@/components/UI/Loader.vue';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
    components: {
        SearchUser,
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
        }),
    },
}

</script>

<style scoped lang="scss">
@import '@/assets/styles.scss';

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
        padding: 10px 30px 20px 20px;

        .search__title {
            @extend %tpl-h2;
            padding: 10px 30px 20px 0px;
        }

        .result__title {
            @extend %tpl-h2;
            margin-top: 22px;
        }

        input {
            width: 100%;
            padding: 14.5px 16px;
            background: #FFFFFF;
            border: 1.5px solid #E9ECEF;
            border-radius: 8px;
            outline: none;
            @extend %tpl-h3
        }

    }



    .search__result-wrapper {
        padding: 10px 30px 20px 20px;
        height: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 18px;
        align-items: start;
        position: relative;
        height: 100%;
        overflow-y: scroll;
        @include custom-hidden-scroll-bar;

        &:hover {
            @include custom-scroll-bar;
        }

        .result__users {
            display: flex;
            flex-direction: column;
            row-gap: 18px;
            width: 100%;
        }

    }




}
</style>