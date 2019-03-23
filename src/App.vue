<template>
  <div class="wrapper">
    <h1>Хрестики-нулики</h1>
    <nav class="navigation" v-if="this.$route.name != 'home'">
      <router-link class='back'  to="/">&#8630;</router-link>
    </nav>
    <router-view></router-view>
    <footer>
      Made by Yurko <br>
      v.1.0.0
    </footer>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>
<style>
  .wrapper {
    height: 80vh;
  }
  h1 {
    margin-top: 30px;
  }

.back {
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 50px;
  font-family: 'Press Start 2P', cursive;
  text-decoration: none;
  color: #fff;
}
  
</style>