<script lang="ts">
    import Header from "../../components/Header.svelte";
    import { base } from "$app/paths";
</script>

<div id="basket-container" style="background-image: url('{base}/images/background.webp');">
    <Header />
    <div id="content-container">
        <div id="items-container">
            <div id="items">asd</div>
        </div>
        <div id="sidebar">
            <div id="sidebar-content">asd</div>
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
    }

    #content-container {
        flex: 4;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }

    #items-container {
        flex: 6;
        height: 100%;
        padding: 1rem;

        #items {
            width: 100%;
            height: 100%;
            overflow-y: scroll;
        }
    }

    #sidebar {
        flex: 1;
        padding: 1rem;

        #sidebar-content {
            background-color: hsla(0, 0%, 60%, 0.9);
            border-radius: 1rem;
            height: 100%;
            width: 100%;
        }
    }
</style>
