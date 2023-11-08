<script lang="ts">
    import Card from "../../components/Gallery/Card.svelte";
    import Header from "../../components/Header.svelte";
    import { base } from "$app/paths";
    import { basket } from "$lib/stores/basket";


    function addToBasket(entry: object) {
        basket.update((item: any) => [...item, entry]);
    }

    const dataPromise = fetch(`${base}/photos.json`).then(res => res.json());

    let bgColor = `url(${base}/images/background.webp)`
    

</script>

<header>
    <title>Képvásárlás | Fényképész úr</title>
</header>

<div class="htm" style="background-image: url('{base}/images/background.webp');">
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
</div>


<style lang="scss">


    @media (min-width: 6px) {
        .body{
            width: 90vw;
        }
    }
    @media (min-width: 992px) {
        .body{
            width: 80vw;
        }
    }


    :global(body) {
        background-color: gray;
    }

    .htm{
        background-size: 100%;
        background-attachment: fixed;
        height: 100%;
        padding-bottom: 50px;
    }

    .body {
        margin-top: 30px;
        display:flex;
        align-content: flex-start;
        justify-content: center;
        flex-wrap: wrap;

        height: 100vh;
        margin-left: auto;
        margin-right: auto;
        height: auto;
    }
</style>
