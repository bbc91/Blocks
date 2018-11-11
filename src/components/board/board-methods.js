export default {
	rollTheDices(rollTime) {

		let self = this;

		self.rolling = true;

		if (rollTime < 10) {

			console.log('Rolling!');

			this.dice1Value = Math.floor(Math.random() * 6);
			this.dice2Value = Math.floor(Math.random() * 6);

			setTimeout(function () {
				self.rollTheDices(rollTime + 1);
			}, 100);

		} else {

			//depending on the players starting position create blocks on grid
			if (self.players[self.playerTurnIndex].firstTurn) {

				let player = self.players[self.playerTurnIndex];

				if (player.startingPoint[0] === 0) {

					self.drawPlayer1Box(this.dice1Value, this.dice2Value);


				} else {

					self.drawPlayer2Box(this.dice1Value, this.dice2Value);
				}

			}

		}
	},
	drawPlayer1Box(rowToDraw, columnToDraw) {

		for (let row = 0; row < rowToDraw + 1; row++) {

			for (let column = 0; column < columnToDraw + 1; column++) {

				this.grid[row][column].selected = true;
			}
		}

	},
	drawPlayer2Box(rowToDraw, columnToDraw) {

		console.log(rowToDraw)
		//row = 27


		for (let row = this.grid.length-1; row > this.grid.length-1 - (rowToDraw + 1); row--) {
			console.log("row: " + row);

			for (let column = this.grid[this.grid.length - 1].length - 1; column > this.grid[this.grid.length - 1].length-1 - (columnToDraw + 1); column--) {
				console.log("column: " + column);

				this.grid[row][column].selected = true;
			}
		}

	},
	buildBoard() {
		for (let a = 0; a < 27; a++) {

			this.grid.push([]);

			for (let b = 0; b < 18; b++) {

				let block = {
					id: b + 1,
					position: {
						x: a + 1,
						y: b + 1
					},
					selected: false,
					owner: false
				};

				this.grid[a].push(block);
			}
		}
	},
	deselectBoard() {
		for (let a = 0; a < 27; a++) {

			for (let b = 0; b < 18; b++) {

				this.grid[a][b].selected = false;
			}
		}
	},
	selectToOwner() {

		for (let a = 0; a < 27; a++) {

			for (let b = 0; b < 18; b++) {

				if (this.grid[a][b].selected) {

					this.grid[a][b].selected = false;
					this.grid[a][b].owner = this.players[this.playerTurnIndex];
				}
			}
		}

		this.nextPlayerTurn();
	},
	nextPlayerTurn() {

		this.dice1Value = null;
		this.dice2Value = null;

		if (this.players[this.playerTurnIndex + 1]) {

			this.playerTurnIndex += 1;
		} else {

			this.playerTurnIndex = 0;
		}

		this.rolling = false;

	},
}