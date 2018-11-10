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
            self.rolling = false;
            console.log('Done rolling!');
            return
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
    }
}