<script lang="ts">
    import Card from "../../components/Gallery/Card.svelte";
    import Header from "../../components/Header.svelte";
    import { base } from "$app/paths";
    import { basket } from "$lib/stores/basket";

    function addToBasket(entry: object) {
        basket.update((item: any) => [...item, entry]);
        showNoti = true;
        setTimeout(() => {
            showNoti = false;
        }, 1000);
    }

    const dataPromise = fetch(`${base}/photos.json`).then(res => res.json());

    let bgColor = `url(${base}/images/background.webp)`;

    let showNoti = false;
</script>

<svelte:head>
    <title>Képvásárlás | Fényképész úr</title>
</svelte:head>

<div class="htm" style="background-image: url('{base}/images/background.webp');">
    <Header />

    <div class="body">
        {#await dataPromise}
            <p>Loading...</p>
        {:then data}
            {#each data as item}
                <Card title={item.title} price={item.price} image={item.image} click={() => addToBasket(item)} />
            {/each}
        {/await}
    </div>
</div>
<div class="notification {showNoti ? 'shown' : ''}">
    <h1>Elem hozzáadva!</h1>
</div>

<style lang="scss">
    .notification {
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        transition: transform 0.2s ease-in-out;
        background-color: white;
        border: 1px solid gray;
        border-radius: 1rem;
        width: 20%;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        &.shown {
            transform: translateX(-50%) translateY(-50%);
        }
    }

    @media (min-width: 6px) {
        .body {
            width: 90vw;
        }
    }
    @media (min-width: 992px) {
        .body {
            width: 80vw;
        }
    }

    :global(body) {
        background-color: gray;
    }

    .htm {
        background-size: 100%;
        background-attachment: fixed;
        height: 100%;
        padding-bottom: 50px;
    }

    .body {
        margin-top: 30px;
        display: flex;
        align-content: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;

        height: 100vh;
        margin-left: auto;
        margin-right: auto;
        height: auto;
    }
</style>
