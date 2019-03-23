<template>
	<div id="game" @click='play'>
	    <div class="cell" ref="cell" :key="n" v-for="n in 9"></div>
	</div>
</template>
<script>
	export default {
		methods: {
			play(e) {
				this.$emit('play', {'ev': e, 'cells': this.$refs.cell} );
			}
		}
	}
</script>
<style>
  .cross {
    color: hsl(194, 100%, 73%);
    background-color: transparent;
    border-color: transparent;
    font-weight: bold;
}

.circle {
    color: hsl(7, 63%, 78%);
    background-color: transparent;
    border-color: transparent;
    font-weight: bold;
}
	.cell {
	    width: 100px;
	    height: 100px;
	    text-align: center;
	    font-size: 40px;
	    color: rgb(0, 61, 117);
	    cursor: pointer;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	}


	.cell:first-child,
	.cell:nth-of-type(2) {
	    border-right: 3px solid #ddd;
	    border-bottom: 3px solid #ddd;
	}

	.cell:nth-of-type(2) {
	    border-left: 3px solid #ddd;
	}

	.cell:nth-of-type(3) {
	    border-left: 3px solid #ddd;
	    border-bottom: 3px solid #ddd;
	}

	.cell:nth-of-type(4) {
	    border-top: 3px solid #ddd;
	    border-right: 3px solid #ddd;
	    border-bottom: 3px solid #ddd;
	}

	.cell:nth-of-type(5) {
	    border: 3px solid #ddd;
	}

	.cell:nth-of-type(6) {
	    border-top: 3px solid #ddd;
	    border-left: 3px solid #ddd;
	    border-bottom: 3px solid #ddd;
	}

	.cell:nth-of-type(7) {
	    border-top: 3px solid #ddd;
	    border-right: 3px solid #ddd;
	}

	.cell:nth-of-type(8) {
	    border-top: 3px solid #ddd;
	    border-right: 3px solid #ddd;
	    border-left: 3px solid #ddd;
	}

	.cell:nth-of-type(9) {
	    border-top: 3px solid #ddd;
	    border-left: 3px solid #ddd;
	}
</style>
