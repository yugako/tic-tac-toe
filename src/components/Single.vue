<template>
	<div class="wrapper">
	    <div class="container">
	      <Header
	        :player1Name="playerName"
	        :player1Victory="playerVictory"
	        :playersDraw="playersDraw"
	        :player2Name="aiName"
	        :player2Victory="aiVictory"
	        
	      />
	      <Field @play='gamePlay' />
	    </div>
		<OverlaySingle
			:end='end'
			:message='message'
	    	@login='onLogin'
		/>
  </div>
</template>
<script>
	import Header from "./Header";
	import Field from "./Field";
	import OverlaySingle from './OverlaySingle';
	import * as win from "../js/checkPlayer";

	export default {
		components: {
			Header,
			OverlaySingle,
			Field,
		},
		data () {
			return {
				fc: 1,
				huPlayer: 'x',
				aiPlayer: 'o',
				playerName: 'Незнайомець',
				playerVictory: 0,
				aiName: 'Штучний інтелект',
				aiVictory: 0,
				playersDraw: 0,
				
			}
			
		},
		methods: {
			onLogin (data) {
			    this.playerName = data.playerName;
			},
		    gamePlay(data) {
				let e = data.ev,
					cells = data.cells,
					availSpots;

			    if (e.target.classList.contains("cell") && !e.target.innerHTML) {
			    	availSpots = cells.filter(s => s.innerHTML !== this.aiPlayer && s.innerHTML !== this.huPlayer && !s.classList.contains('cross'));
			    	this.ai(availSpots);
			    	win.setCross(e);

			    	

			    	
		     	}
		     	this.checkWinner(cells);
			    	
		      	
		    },
		    ai(board) {
		    	let random = this.randomInteger(0, board.length);
		    	if (board.length === 1) {
		    		return;
		    	} else {
		    		board[random].innerHTML = this.aiPlayer;
		    	}
		    	
		    	

		    },
		    randomInteger(min, max) {
		        var rand = min + Math.random() * (max + 1 - min);
		        rand = Math.floor(rand);
		        return rand;
		    },
		    checkWinner(cells) {
		      if (win.winChests(cells)) {
		        this.playerVictory++;

		        win.handleWinner(`${this.playerName} переміг(-ла)!`, this.message, cells, this.end);
		      } else if (win.winBubbles(cells)) {

		        this.aiVictory++;

		        win.handleWinner(`${this.aiName} переміг(-ла)!`,  this.message, cells, this.end);

		      } else if (win.draw(cells)) {
		        this.playersDraw++;
		        win.handleWinner("Нічия!",  this.message, cells, this.end);
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
	}
</script>
<style>