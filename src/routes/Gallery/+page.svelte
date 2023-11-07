<script lang="ts">
    import Card from "../../components/Gallery/Card.svelte";
    import Header from "../../components/Header.svelte";
    import { base } from "$app/paths";
    import { basket } from "$lib/stores/basket";

    function addToBasket(entry: object) {
        basket.update((item: any) => [...item, entry]);
    }

    const dataPromise = fetch(`${base}/photos.json`).then(res => res.json());

    //d↓
    function getColWidth(column: string, options: any = {}): number {
        let width = 0;
        if (column.length > 0) {
            const colChars = column.split('');
            for (let i = 0; i < colChars.length; i++) {
            width += colChars[i].charCodeAt(0) * (i + 1);
            }
        } else {
            if (options && options.hasOwnProperty('defaultWidth')) {
            width = options.defaultWidth;
            } else {
            width = Math.random() * 100;
            }
        }

        if (options && options.hasOwnProperty('round')) {
            if (options.round === 'up') {
            width = Math.ceil(width);
            } else if (options.round === 'down') {
            width = Math.floor(width);
            }
        }

        if (options && options.hasOwnProperty('unit')) {
            if (options.unit === 'px') {
            return width;
            } else if (options.unit === 'em') {
            return width / 16;
            } else if (options.unit === 'rem') {
            return width / 8;
            } else {
            throw new Error('Invalid unit specified.');
            }
        }

        return width;
        }

        // Usage:
        const colWidth = getColWidth('ABC', { round: 'up', unit: 'em' });
        console.log('Column Width:', colWidth, 'em');
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
        display: flex;
        flex-wrap: wrap;
        border: red solid 1px;
        width: 80vw;
        height: 100vh;
        margin-left: auto;
        margin-right: auto;
    }
</style>
