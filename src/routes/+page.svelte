<script lang="ts">
    import Header from "../components/Header.svelte";
</script>

<div id="main-body">
    <section class="fullpage" id="first">
        <Header />
        <div class="content"><h1>asd</h1></div>
    </section>
    <section class="fullpage" id="second">
        <div class="content"><h1>asd</h1></div>
    </section>
    <section class="fullpage" id="third">
        <div class="content"><h1>asd</h1></div>
    </section>
</div>

<style lang="scss">
    #main-body {
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        scroll-snap-type: y mandatory;
        position: relative;

        //hide scrollbar
        &::-webkit-scrollbar {
            display: none;
        }

        .fullpage {
            flex-shrink: 0;
            scroll-snap-align: start;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: stretch;

            .content {
                flex-grow: 1;
            }
        }

        #first {
            background-image: url("./images/main-page/first.webp");
        }
        #second {
            background-image: url("./images/main-page/second.webp");
        }
        #third {
            background-image: url("./images/main-page/third.webp");
        }
    }
</style>
