
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
    div{
        border: solid black 1px;
    }
    
    .card{
        min-width: 18em;
        max-width: 20em;
        display: flex;
        background-size: 100%;
        margin: 5px;
    }
    .card-belt{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: flex-end;
        width: 100%;
        
    }
    .card-title{
        flex: 1;
        display: inline;

    }
    .card-price{
        flex: 1;
        display: inline-block;
        text-align: right;

    }
    
    .card{
        height: 160px;
        width: 260px;
    }


</style>