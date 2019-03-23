<template>
  <div class="wrapper">
    <div class="overlayStatus" :class="{flex: end}">
      <h1 id="status">{{message}}</h1>
    </div>
    <div class="overlayName" :class="{flex: !start}">
      <div class="form-group">
        <input type="text" class="input" :class="{error: isEmpty}" placeholder="Хто ти?" name v-model.lazy="player1Name">
        <input type="text" class="input" :class="{error: isEmpty}" placeholder="Хто ти?" name v-model.lazy="player2Name" >
      </div>
      <button type="submit" class="start" @click="login()">Почати гру</button>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            start: false,
            player1Name: "",
            player2Name: "",
        };
    },
    props: {
        end: Boolean,
        message: String
    },
    methods: {
        login() {
              
              this.start = true;
              this.$emit('login', {
              player1Name: this.player1Name,
              player2Name: this.player2Name
              }); 
        },
        
    },
    computed: {
      isEmpty () {
          return (!this.player1Name || this.player1Name !== /\s+/g.test(this.player1Name)) || (!this.player2Name || this.player1Name !== /\s+/g.test(this.player1Name));
        }
    }
};
</script>
<style scoped>
    .error {
      border: 2px solid red!important;
    }
    .overlayStatus, .overlayName {
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: 999999;
      background-color: rgba(0, 0, 0, 0.712);
      display: none;
      justify-content: center;
      align-items: center;
    }

    .overlayName {
      flex-direction: column;
    }
    .form-group {
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flex;
      display: -o-flex;
      display: flex;
      justify-content: space-between;
    }
    .input {
      background-color: transparent;
      padding: 10px 15px;
      border: none;
      border-bottom: 2px solid white;
      color: white;
      font-size: 20px;
      font-family: 'Jura', sans-serif;
      margin: auto 10px;
      text-align: center;
    }
    .input:focus {
      outline: none;
    }
    .start {
      margin-top: 25px;
      background-color: transparent;
      border: 2px solid white;
      font-family: 'Press Start 2P', cursive;
      font-size: 18px;
      padding: 10px 15px;
      color: #fff;
    }
    
</style>
