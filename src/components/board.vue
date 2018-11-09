<template>
    <div id="board">
        <div class="row" v-for="(row, index) in grid">
            <div class="block" v-for="(block, index2) in row">
                <span>{{block.position.x}}:{{block.position.y}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'board',
        data() {
            return {
                grid: []
            }
        },
        methods: {
            // 18
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
        },
        created() {
            this.buildBoard();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
