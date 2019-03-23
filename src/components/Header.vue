<template>
  <div>
    <header>
      <div class="statistic">
        <p>
          {{player1Name}}
          <br>
          <span id="player1Wins">{{player1Victory}}</span>
        </p>
        <p>Нічия
          <br>
          <span id="drawWin">{{playersDraw}}</span>
        </p>
        <p>
          {{player2Name}}
          <br>
          <span id="player2Wins">{{player2Victory}}</span>
        </p>
      </div>
    </header>
    <div class="turn">
        Хід гравця:
        <span id="turn">{{cross == circle? player1Name: player2Name}}</span>
      </div>
  </div>
  
</template>
<script>
export default {
    props: {
        player1Name: String,
        player1Victory: Number,
        playersDraw: Number,
        player2Name: String,
        player2Victory: Number,
        cross: Number,
        circle: Number
    }
}
</script>

