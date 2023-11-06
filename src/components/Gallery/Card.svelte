
<script lang="ts">
    import { base } from "$app/paths"
    export let title:string;
    export let price:string;
    export let image:string;
</script>



<div class="card" style="background-image: url('{base}/images/photos/{image}.webp');">
    <div class="card-belt">
        <div class="card-title">
            <p> {title}</p>
        </div>
        <div class="card-price">
            <p>{price}</p>
        </div>
        

    </div>
</div>


<style lang="scss">


    .card{
        min-width: 18em;
        max-width: 20em;
        display: flex;
        background-size: 100%;
        margin: 5px;
        border-radius: 6px;
        border: solid 1px black;
    }
    .card-belt{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: flex-end;
        width: 100%;
        height: 2.3em;
        background-color: rgba($color: #fff, $alpha: 0.70);
        border-radius: 0px 0px 6px 6px;
    }
    .card-title{
        flex: 1;
        display: inline;
        padding-left: 6px;
        line-height: 2.3em;
    }
    .card-price{
        flex: 1;
        display: inline-block;
        text-align: right;
        padding-right: 6px;
        line-height: 2.3em;

    }
    
    .card{
        height: 160px;
        width: 260px;
    }


</style>