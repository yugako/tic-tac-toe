<template>
	<div class="container">
		<nav class="nav">
	      <router-link class='nav-link' to="/single">Один гравець</router-link>
	      <router-link class='nav-link' to="/couple">Два гравці</router-link>
	    </nav>
	</div>
	
</template>
<style scoped>
	.container {
	    position: relative;
	    z-index: 99999;
	    height: 100%;
	    display: -webkit-flex;
	    display: -moz-flex;
	    display: -ms-flex;
	    display: -o-flex;
	    display: flex;
	    justify-content: center;
	    -ms-align-items: center;
	    align-items: center;
	}
	.nav-link {
		display: block;
		margin-bottom: 20px;
		font-family: 'Press Start 2P', cursive;
		color: #f9f9f9;
		text-decoration: none;
	}
</style>