<script lang="ts">
</script>

<main>
<div class="header">Your Library</div>
<div class="container centered">
        <div class="buttons">
            <button class="sort button-17">sort</button>
            <button class="filter button-17">filter</button>
        </div>
        <div class="console">
            <h1>Playstation</h1>
        </div>
        <div class="game">
            <img src="/Screenshot_20231107_133929.png" alt="">
            <div class="info"> 
                <h2>Titel van een game</h2>
                <p>release date</p>
            </div>
        </div>
        <div class="game">
            <img src="/Screenshot_20231107_133929.png" alt="">
            <div class="info"> 
                <h2>Titel van een game</h2>
                <p>release date</p>
            </div>
        </div>
        <div class="console">
            <h1>Switch</h1>
        </div>
        <div class="game">
            <img src="/Screenshot_20231107_133929.png" alt="">
            <div class="info"> 
                <h2>Titel van een game</h2>
                <p>release date</p>
            </div>
        </div>
        <div class="add">
            <button class="button-17"> Add a game</button>
        </div>
    </div>
</main>

<style>
    .centered{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .add{
        padding: 1em;
        position: fixed;
        bottom: 0px;
    }
    .console{
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }

    .game{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 1em;
    }

    .info{
        margin-left: 10px;
    }

	.header {
        background-color: #373960;
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 2em;
    }

    .buttons{
        display: flex;
        flex-direction: row;
        padding: 0.8em;
        justify-content: center;
    }

    .sort{
        margin-right: 10px;
    }

    .button-17 {
    align-items: center;
    appearance: none;
    background-color: #fff;
    border-radius: 24px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #3c4043;
    cursor: pointer;
    display: inline-flex;
    fill: currentcolor;
    font-family: "Google Sans",Roboto,Arial,sans-serif;
    font-size: 1em;
    font-weight: 900;
    height: 48px;
    justify-content: center;
    letter-spacing: .25px;
    line-height: normal;
    max-width: 100%;
    overflow: visible;
    padding: 2px 24px;
    position: relative;
    text-align: center;
    text-transform: none;
    transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 40vw;
    will-change: transform,opacity;
    z-index: 0;
    }

    .button-17:hover {
    background: #F6F9FE;
    color: #174ea6;
    }

    .button-17:active {
    box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
    outline: none;
    }

    .button-17:focus {
    outline: none;
    border: 2px solid #4285f4;
    }

    .button-17:not(:disabled) {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }

    .button-17:not(:disabled):hover {
    box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
    }

    .button-17:not(:disabled):focus {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }

    .button-17:not(:disabled):active {
    box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
    }

    .button-17:disabled {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }
</style>
