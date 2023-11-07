<script lang="ts">
    import { base } from "$app/paths";
    export let title: string;
    export let price: string;
    export let image: string;
    export let imageKey: number;
    import { basket } from "$lib/stores/basket";

    function removeFromBasket(key: number) {
        basket.update(item => {
            item.splice(key, 1);
            return item;
        });
        console.log(key);
    }
</script>

<div>
    <div class="card" style="background-image: url('{base}/images/photos/{image}');">
        <div class="card-belt">
            <div class="card-title">
                <p>{title}</p>
            </div>
            <div class="card-price">
                <p>${price}</p>
            </div>
        </div>
        <button class="remove" on:click={() => removeFromBasket(imageKey)}
            ><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"
                ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                /></svg
            ></button
        >
    </div>
</div>

<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@500&family=Share+Tech&display=swap");

    * {
        font-family: "Rubik", "Arial Narrow", Arial, sans-serif;
        text-decoration: none !important;
        color: black;
    }

    .card {
        min-width: 18em;
        max-width: 22em;
        aspect-ratio: 16/9;
        display: flex;
        background-size: contain;
        margin: 5px;
        border-radius: 6px;
        border: solid 1px black;
        position: relative;
    }
    .card-belt {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: flex-end;
        width: 100%;
        max-height: 2.9em;
        height: 23%;
        background-color: rgba($color: #fff, $alpha: 0.7);
        border-radius: 0px 0px 6px 6px;
    }
    .card-title {
        flex: 1.4;
        display: flex;
        padding-left: 9px;
        font-weight: 500;
        overflow: hidden;
        align-items: center;
        justify-content: start;
        font-size: 1.1em;
    }
    .card-price {
        flex: 0.6;
        display: flex;
        align-items: center;
        justify-content: end;
        text-align: right;
        padding-right: 9px;
        font-weight: 600;
        font-size: 0.9em;
    }
    .remove {
        position: absolute;
        top: 10px;
        right: 10px;
        fill: red;
        background: none;
        border: none;

        &:hover {
            cursor: pointer;
            fill: darken(red, 40%);
        }
    }
</style>
