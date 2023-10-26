<script lang="ts">
    import { base } from "$app/paths";
</script>

<div id="header">
    <h1>Fényképész úr</h1>
    <div id="links">
        <a href="{base}/">Képvásárlás</a>
        <a href="{base}/">Blog</a>
        <a href="{base}/">Kosár</a>
    </div>
</div>

<style lang="scss">
    //testing
    :global(body) {
        background-color: black;
    }

    #header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        color: white;

        h1 {
            font-family: "special elite", sans-serif;
            font-size: 4rem;
        }
        a {
            color: inherit;
            text-decoration: none;
        }

        #links {
            display: flex;
            align-items: center;
            width: 20%;
            justify-content: space-around;
            font-family: "rubik", sans-serif;
            font-size: 1.5rem;
        }
    }
</style>
