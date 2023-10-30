<script lang="ts">
    import Header from "../components/Header.svelte";
    let current = "first";
    const ratioLimit = 0.522;
    function observer(node: HTMLElement) {
        const sectObs = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    //document.querySelector(`[href*='#${entry.target.id}']`).classList.remove("active")
                    //console.log(entry.target.id, entry.intersectionRatio)
                    if (entry.isIntersecting /* && entry.intersectionRatio >= ratioLimit */) {
                        current = entry.target.id;
                        console.log(current);
                    }
                });
            },
            { threshold: [0.25 /* , ratioLimit, 0.75 */] }
        );
        sectObs.observe(node);

        return {
            destroy() {
                sectObs.disconnect();
            }
        };
    }
    function scrollTo(id: string) {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth" });
    }
</script>

<div id="main-body">
    <section class="fullpage" id="first" use:observer>
        <Header />
        <div class="content">
            <div id="quote">
                <span>A Természet az egyetlen könyv, amely minden lapján nagy tartalmat nyújt nekünk.</span>
                <span>- Johann Wolfgang von Goethe</span>
            </div>
        </div>
    </section>
    <section class="fullpage" id="second" use:observer>
        <div class="content"><h1>asd</h1></div>
    </section>
    <section class="fullpage" id="third" use:observer>
        <div class="content"><h1>asd</h1></div>
    </section>
    <div id="scrollstate">
        <!-- Circle svg -->
        <button on:click={() => scrollTo("first")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#000" stroke="#" />
                {#if current == "first"}
                    <circle cx="10" cy="10" r="5" fill="#f00" />
                {/if}
            </svg>
        </button>
        <button on:click={() => scrollTo("second")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#000" />
                {#if current == "second"}
                    <circle cx="10" cy="10" r="5" fill="#f00" />
                {/if}
            </svg>
        </button>
        <button on:click={() => scrollTo("third")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#000" />
                {#if current == "third"}
                    <circle cx="10" cy="10" r="5" fill="#f00" />
                {/if}
            </svg>
        </button>
    </div>
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

        #scrollstate {
            position: fixed;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.3rem;
            padding: 0.5rem;

            button {
                background: none;
                border: none;
                cursor: pointer;
                outline: none;

                &:hover {
                    svg circle:first-child {
                        fill: #555;
                    }
                }
            }
        }

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
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;

            .content {
                flex-grow: 1;
                display: flex;
                align-items: flex-end;
                padding: 6%;

                #quote {
                    color: white;
                    display: flex;
                    flex-direction: column;
                    font-family: "Rozha One", serif;
                    font-weight: 400;
                    width: 80%;

                    span:first-child {
                        font-size: 3rem;
                    }
                    span:last-child {
                        font-size: 2rem;
                        margin-top: 1rem;
                    }
                }
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
