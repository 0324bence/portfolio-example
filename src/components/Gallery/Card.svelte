<script lang="ts">
    import { base } from "$app/paths";
    export let title: string;
    export let price: string;
    export let imageID: string;
    export let image: string;
</script>

<a href="gallery/{imageID}" class="card-link">
    <div class="card" style="background-image: url('{base}/images/photos/{image}');">
        <div class="card-belt">
            <div class="card-title">
                <p>{title}</p>
            </div>
            <div class="card-price">
                <p>{price}</p>
            </div>
        </div>
    </div>
</a>

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
</style>
