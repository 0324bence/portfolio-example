<script lang="ts">
    import { base } from "$app/paths";
</script>

<div id="header">
    <a class="title" href="{base}/">Fényképész úr</a>
    <div id="links">
        <a href="{base}/Gallery/">Képvásárlás</a>
        <a href="{base}/">Kosár</a>
    </div>
</div>

<style lang="scss">
    #header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        color: white;

        .title {
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
            width: 225px;
            justify-content: space-around;
            font-family: "rubik", sans-serif;
            font-size: 1.5rem;
        }
    }
</style>
