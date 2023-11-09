<script lang="ts">
    import Header from "../../components/Header.svelte";
    import { base } from "$app/paths";
    import { basket } from "$lib/stores/basket";
    import Card from "../../components/BasketCard.svelte";
</script>

<div id="basket-container" style="background-image: url('{base}/images/background.webp');">
    <Header />
    <div id="content-container">
        <div id="items-container">
            <div id="items">
                {#each $basket as item, key}
                    <Card image={item.image} imageKey={key} price={item.price} title={item.title} />
                {/each}
            </div>
        </div>
        <div id="sidebar">
            <div id="sidebar-content">
                <span>Kosárba tett képek: <span class="weight">{$basket.length}</span></span>
                <span
                    >Összesített ár (Ft.): <span class="weight"
                        >${$basket.reduce((acc, curr) => acc + Number(curr.price), 0)}</span
                    ></span
                >
                <button disabled>Vásárlás</button>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    #basket-container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        height: 100vh;
        max-height: 100vh;
    }

    #content-container {
        flex: 1;
        display: flex;
        flex-direction: row;
        width: 100%;
        min-height: 0;
    }

    #items-container {
        flex: 6;
        height: 100%;
        padding: 1rem;

        #items {
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 3rem;
            justify-content: center;
            align-items: flex-start;

            //make scrollbar transparent with only a gray handle
            &::-webkit-scrollbar {
                width: 0.5rem;
            }

            &::-webkit-scrollbar-track {
                background: transparent;
            }

            &::-webkit-scrollbar-thumb {
                background: hsla(0, 0%, 80%);
                border-radius: 0.5rem;
            }
        }
    }

    #sidebar {
        flex: 1;
        padding: 1rem;

        #sidebar-content {
            background-color: hsla(0, 0%, 60%, 0.9);
            border-radius: 1rem;
            // height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 2rem;

            span {
                font-size: 1.2rem;
            }

            .weight {
                font-weight: 600;
            }

            button {
                background-color: hsla(0, 0%, 0%, 0.7);
                color: white;
                border: none;
                border-radius: 0.5rem;
                padding: 0.5rem;
                font-size: 1.2rem;
                font-weight: 600;
                cursor: not-allowed;
                transition: background-color 0.2s ease-in-out;
            }
        }
    }
</style>
