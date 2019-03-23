<template>
	<div class="wrapper">
	  <div class="overlayStatus" :class="{flex: end}">
	    <h1 id="status">{{message}}</h1>
	  </div>
	  <div class="overlayName" :class="{flex: !start}">
	    <div class="form-group">
	      <input type="text" class="input" placeholder="Хто ти?" name v-model.lazy="playerName">
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
            playerName: ""        
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
	        	playerName: this.playerName
	        }); 
        },
        
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