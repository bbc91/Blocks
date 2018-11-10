<template>
    <div>
        <div id="dices">
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
                <div class="block" v-for="(block, index2) in row">
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
            this.buildBoard();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
