<template>
    <div id="app">
        <div id="header">
            <div id="logo"><h1>BLOCKS</h1></div>
            <div id="menu">
                <ul>
                    <router-link tag="li" to="/">Home</router-link>
                    <router-link tag="li" to="/game">Play</router-link>
                </ul>
            </div>
        </div>
        <div>

        </div>
        <router-view/>
    </div>
</template>

<style>
    @import "assets/css/style.css";
</style>
