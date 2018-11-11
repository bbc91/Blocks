<template>
    <div>
        <div id="dices">
            <h2 id="playerTurn">{{players[playerTurnIndex].name}}</h2>
            <button :disabled="rolling" @click="rollTheDices(1)" class="rollTheDices" :class="{'disabled': rolling}">
                Roll the dices
            </button>
            <div>
                <div v-if="dice1Value != null" class="dice" v-html="'&#x268' + dice1Value + ';'"></div>
                <div v-if="dice2Value != null" class="dice" v-html="'&#x268' + dice2Value + ';'"></div>
            </div>
        </div>
        <div id="board">
            <div class="row" v-for="(row, index) in grid">
                <div :class="{'player1': (block.owner && block.owner.id === players[0].id), 'player2': (block.owner && block.owner.id === players[1].id)}"
                     class="block"
                     v-for="(block, index2) in row">
                    <div v-if="block.selected">X</div>
                    <!--<div v-if="block.owner">{{block.owner.name}}</div>-->
                    <span>{{block.position.x}}:{{block.position.y}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import boardMethods from './board-methods'
	import boardData from './board-data'

	export default {
		name: 'board',
		data() {
			return boardData(this);
		},
		methods: boardMethods,
		created() {
			let self = this;
			window.addEventListener("keypress", function (e) {
				console.log(e.keyCode);

				if (e.keyCode === 32) {

					e.preventDefault();

					if ((this.dice1Value !== null && this.dice2Value !== null) && (this.dice1Value !== this.dice2Value)) {
						//space is pressed
						//rotate
						let dice1ValueOld = this.dice1Value;
						let dice2ValueOld = this.dice2Value;

						this.dice1Value = dice2ValueOld;
						this.dice2Value = dice1ValueOld;

						if (this.players[this.playerTurnIndex].firstTurn) {
							self.deselectBoard();
							if (this.playerTurnIndex === 0) {

								self.drawPlayer1Box(this.dice1Value, this.dice2Value)
							} else {

								self.drawPlayer2Box(this.dice1Value, this.dice2Value)
							}

						}
					}
				}

				if (e.keyCode === 13) {

					e.preventDefault();

					if ((this.dice1Value !== null && this.dice2Value !== null)) {
						//space is pressed
						//rotate

						if (this.players[this.playerTurnIndex].firstTurn) {
							self.players[self.playerTurnIndex].firstTurn = false;

						}

						self.selectToOwner();
					}
				}

			}.bind(this));

			this.buildBoard();

			let player1 = {
				id: 1,
				name: "Gogo",
				startingPoint: [0, 0],
				firstTurn: true,
			};

			let player2 = {
				id: 2,
				name: "Miti",
				startingPoint: [this.grid.length - 1, this.grid[0].length - 1],
				firstTurn: true,
			};

			this.players.push(player1);
			this.players.push(player2);

			this.playerTurnIndex = Math.floor(Math.random() * this.players.length);
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
