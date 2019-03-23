<template>
	<div class="wrapper">
	    <div class="container">
	      <Header
	        :player1Name="player1Name"
	        :player1Victory="player1Victory"
	        :playersDraw="playersDraw"
	        :player2Name="player2Name"
	        :player2Victory="player2Victory"
	        :cross='cross'
	        :circle='circle'
	      />
	      <Field @play='gamePlay' />
	    </div>
		<OverlayCouple
			:end='end'
			:message='message'
	    	@login='onLogin'
		/>
  </div>
</template>
<script>
	import Header from "./Header";
	import Field from "./Field";
	import OverlayCouple from './OverlayCouple';
	import * as win from "../js/checkPlayer";
	export default {

		components: {
		  	Header,
		  	Field,
		  	OverlayCouple
	  	},
		  data() {
		    return {
		      cross: 0,
		      circle: 0,
		      player1Victory: 0,
		      player2Victory: 0,
		      playersDraw: 0,
		      end: false,
		      message: "",
		      player1Name: '',
		      player2Name: '',
		      start: false,
		      
		    };
		  },
		  methods: {
		    onLogin (data) {
		        this.player1Name = data.player1Name;
		        this.player2Name = data.player2Name;
		    },
		    gamePlay(data) {
					let e = data.ev,
						cells = data.cells;
					
		      if (e.target.classList.contains("cell") && !e.target.innerHTML) {
		        if (this.cross == this.circle) {
		          win.setCross(e);
		          this.cross++;
		        } else if (this.circle < this.cross) {
		          win.setBubbles(e);
		          this.circle++;
		        }
		      }
		      this.checkWinner(cells);
		    },

		    checkWinner(cells) {
		      if (win.winChests(cells)) {
		        this.player1Victory++;
		        this.handleWinner(`${this.player1Name} переміг(-ла)!`, cells);
		      } else if (win.winBubbles(cells)) {
		        this.player2Victory++;
		        this.handleWinner(`${this.player2Name} переміг(-ла)!`, cells);
		      } else if (win.draw(cells)) {
		        this.playersDraw++;
		        this.handleWinner("Нічия!", cells);
		      }
		    },

		    handleWinner(message, cells) {
		      this.end = true;
		      this.message = message;

		      setTimeout(() => {
		        this.cleanContent(cells);
		      }, 2000);
		    },

		    cleanContent(elems) {
		      this.cross = this.circle = 0;
		      this.message = "";
		      this.end = false;
		      elems.forEach(item => {
		        item.innerHTML = "";
		        item.classList.remove("cross", "circle");
		      });
		    }
		  }
		};
</script>
<style>


  .turn {
    font-size: 18px;
    margin-bottom: 20px;
    color: #fff;
    font-family: 'Pangolin', cursive;
  }
  @media (max-width: 400px) {
      body {
          overflow-y: scroll;
      }
      .cell {
          width: 80px;
          height: 80px;
      }
  }
</style>