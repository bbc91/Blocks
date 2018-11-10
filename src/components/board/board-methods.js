export default {
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