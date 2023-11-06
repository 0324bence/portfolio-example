




<div class="card">
    <div class="card-belt">
        <div class="card-title">
            <p>Kép címe</p>
        </div>
        <div class="card-price">
            <p>$20.0</p>
        </div>


    </div>
</div>


<style lang="scss">
    div{
        border: solid black 1px;
    }
    
    .card{
        width: 200px;

    }
    .belt{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
    


</style>