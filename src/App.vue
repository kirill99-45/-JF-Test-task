<template>
  <div class='app'>
    <Header />
    <div class="wrapper">
      <Search />
      <User v-if="activeUser !== null" />
      <h3 class="user-select" v-else>Выберите сотрудника, чтобы посмотреть его профиль</h3>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Search from '@/components/sidebar/Search.vue';
import User from '@/components/user-profile/User.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Header,
    Search,
    User,
  },
  computed: {
    ...mapGetters({
      activeUser : 'users/activeUser',
    })
  },
}
</script>

<style lang="scss">
@import './assets/styles.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  position: fixed;
  top: 0px;
  left: 50px;
  right: 50px;
  bottom: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: Monserrat;

  .wrapper {
    height: 85vh;
    overflow: hidden;
    display: flex;
    background: #FDFDFD;
    box-shadow: $box-shadow;
    border-radius: 10px;
    position: relative;
    width: 100%;

    .user-select {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px 30px 20px 22px;
      border-left: 1px solid #E0E0E0;
      width: 70%;
      color: $secondary-color;
      @extend %tpl-h3;
    }
  }

}
</style>
