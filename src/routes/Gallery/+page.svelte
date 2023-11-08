<script lang="ts">
    import Card from "../../components/Gallery/Card.svelte";
    import Header from "../../components/Header.svelte";
    import { base } from "$app/paths";
    import { basket } from "$lib/stores/basket";

    function addToBasket(entry: object) {
        basket.update((item: any) => [...item, entry]);
    }

    const dataPromise = fetch(`${base}/photos.json`).then(res => res.json());

    

</script>

<Header />

<div class="body">
    {#await dataPromise}
        <p>Loading...</p>
    {:then data}
        {#each data as item}
            <Card imageID={item.id} title={item.title} price={item.price} image={item.image} />
        {/each}
    {/await}
</div>

<style lang="scss">
    :global(body) {
        background-color: gray;
    }

    .body {
        margin-top: 40px;
        display:flex;
        align-content: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        border: red solid 1px;
        width: 80vw;
        height: 100vh;
        margin-left: auto;
        margin-right: auto;
    }
</style>
