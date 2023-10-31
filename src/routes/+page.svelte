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
        <div class="content">
            <div class="card-container">
                <div class="card">
                    <div class="card-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aliquid rerum vitae placeat
                            cumque debitis totam possimus temporibus, fugit dicta doloribus numquam dignissimos. Sed
                            provident cum fugiat ex. Magnam, amet!
                        </p>
                        <p>
                            Quo rerum hic ipsum saepe nostrum reprehenderit tempore vero quasi quaerat amet. Repellat
                            voluptatibus consectetur, alias beatae eaque distinctio ex aliquid deleniti iusto libero
                            corrupti nobis dolores facilis molestiae incidunt?
                        </p>
                        <p>
                            Quaerat earum, ipsum iste molestias, deleniti explicabo expedita aliquam libero rem vel
                            magni accusantium velit quisquam ad eveniet incidunt, labore ea aperiam. Vel sapiente at
                            minima facere nesciunt natus id.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat cumque nulla itaque quos
                            laudantium nostrum nisi quasi fugiat numquam qui ipsa, ad vitae, consequatur tempore
                            expedita amet quibusdam molestiae harum?
                        </p>
                    </div>
                    <div class="bar">
                        <div class="image">
                            <img
                                src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
                                alt="card"
                            />
                        </div>
                        <span class="title">Rólam</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aliquid rerum vitae placeat
                            cumque debitis totam possimus temporibus, fugit dicta doloribus numquam dignissimos. Sed
                            provident cum fugiat ex. Magnam, amet!
                        </p>
                        <p>
                            Quo rerum hic ipsum saepe nostrum reprehenderit tempore vero quasi quaerat amet. Repellat
                            voluptatibus consectetur, alias beatae eaque distinctio ex aliquid deleniti iusto libero
                            corrupti nobis dolores facilis molestiae incidunt?
                        </p>
                        <p>
                            Quaerat earum, ipsum iste molestias, deleniti explicabo expedita aliquam libero rem vel
                            magni accusantium velit quisquam ad eveniet incidunt, labore ea aperiam. Vel sapiente at
                            minima facere nesciunt natus id.
                        </p>
                    </div>
                    <div class="bar">
                        <div class="image">
                            <img
                                src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
                                alt="card"
                            />
                        </div>
                        <span class="title">Rólam</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aliquid rerum vitae placeat
                            cumque debitis totam possimus temporibus, fugit dicta doloribus numquam dignissimos. Sed
                            provident cum fugiat ex. Magnam, amet!
                        </p>
                        <p>
                            Quo rerum hic ipsum saepe nostrum reprehenderit tempore vero quasi quaerat amet. Repellat
                            voluptatibus consectetur, alias beatae eaque distinctio ex aliquid deleniti iusto libero
                            corrupti nobis dolores facilis molestiae incidunt?
                        </p>
                        <p>
                            Quaerat earum, ipsum iste molestias, deleniti explicabo expedita aliquam libero rem vel
                            magni accusantium velit quisquam ad eveniet incidunt, labore ea aperiam. Vel sapiente at
                            minima facere nesciunt natus id.
                        </p>
                        <p>
                            Voluptatum ratione amet ducimus soluta saepe facere odit repellendus. Quibusdam tempora
                            iusto temporibus ipsum libero, numquam necessitatibus recusandae sunt itaque quae. Labore
                            perspiciatis odio id commodi voluptatem tempore dolor neque.
                        </p>
                    </div>
                    <div class="bar">
                        <div class="image">
                            <img
                                src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
                                alt="card"
                            />
                        </div>
                        <span class="title">Rólam</span>
                    </div>
                </div>
            </div>
        </div>
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
                padding: 8rem 4rem 8rem 4rem;

                .card-container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    .card {
                        background-color: hsla(0, 0%, 12%, 0.8);
                        width: 30%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;

                        .card-content {
                            flex: 11;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            font-family: "Jost", sans-serif;
                            font-size: 1.2rem;
                            color: white;
                            padding: 2rem 2rem 0 2rem;
                        }

                        .bar {
                            flex: 1;
                            background-color: hsl(118, 47%, 15%, 0.8);
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            position: relative;
                            font-family: "Jost", sans-serif;
                            color: white;
                            font-size: 2rem;
                            padding: 0 4rem 0 4rem;

                            .image {
                                position: absolute;
                                left: 10%;
                                bottom: 30%;
                                width: 7.5rem;
                                height: 7.5rem;
                                border-radius: 50%;
                                overflow: hidden;
                                display: grid;
                                place-items: center;
                                border: 0.2rem solid #fff;

                                img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                }
                            }
                        }
                    }
                }

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
