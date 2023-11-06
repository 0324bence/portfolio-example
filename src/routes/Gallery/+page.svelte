<script lang="ts">
    import Card from "../../components/Gallery/Card.svelte";
    import Header from "../../components/Header.svelte";


</script>

<Header/>

<div class="body">
    {#each Array.from(Array(3).keys()) as _}
        <Card imageID="0001" title="Kutya" price="$5.00"/>
    {/each}


</div>




<style lang="scss">
    :global(body){
        background-color: gray;
    }

    .body{
        display: flex;
        border: red solid 1px;
        width: 80vw;
        height: 100vh;
        margin-left: auto;
        margin-right: auto;
    }

</style>