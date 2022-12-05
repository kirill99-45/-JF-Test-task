<template>
    <MainHeader />
    <div class="content">
      <Search />
      <User/>
    </div>
</template>

<script>

import MainHeader from '@/components/header/Header.vue';
import Search from '@/components/sidebar/Search.vue';
import User from '@/components/user-profile/User.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    MainHeader,
    Search,
    User,
  },
  computed: {
    ...mapGetters({
      activeUser: 'users/activeUser',
    }),
  },
}

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  position: fixed;
  top: 0px;
  left: 3.125em;
  right: 3.125em;
  bottom: 0px;
  text-align: center;
  color: #2c3e50;
  font-family: Monserrat;

  .content {
    height: 85vh;
    overflow: hidden;
    display: flex;
    background: #FDFDFD;
    box-shadow: $box-shadow;
    border-radius: 10px;
    position: relative;
    width: 100%;
  }
}

/*-- MEDIA --*/

@media (max-width: $breakpoint-tablet) {
  #app {
    font-size: 14px;
  }
}

@media (max-width: $breakpoint-mobile) {
  #app {
    font-size: 12px;
  }
}

</style>
