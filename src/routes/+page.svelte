<script lang="ts">
    import Header from "../components/Header.svelte";
    import { base } from "$app/paths";
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

<header>
    <title>Fényképész úr</title>
</header>

<div id="main-body">
    <section
        class="fullpage"
        id="first"
        use:observer
        style="background-image: url('{base}/images/main-page/first.webp');"
    >
        <Header />
        <div class="content">
            <div id="quote">
                <span>A Természet az egyetlen könyv, amely minden lapján nagy tartalmat nyújt nekünk.</span>
                <span>- Johann Wolfgang von Goethe</span>
            </div>
        </div>
    </section>
    <section
        class="fullpage"
        id="second"
        use:observer
        style="background-image: url('{base}/images/main-page/second.webp');"
    >
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
    <section
        class="fullpage"
        id="third"
        use:observer
        style="background-image: url('{base}/images/main-page/third.webp');"
    >
        <div class="content">
            <div id="contacts-container">
                <div id="form-container" class="contacts">
                    <form action="{base}/#third" method="POST">
                        <h1>Kapcsolatfelvétel</h1>
                        <div class="input-group">
                            <label for="name">Név:</label>
                            <input type="text" name="name" />
                        </div>
                        <div class="input-group">
                            <label for="email">E-mail-cím:</label>
                            <input type="email" name="email" />
                        </div>
                        <div class="input-group" id="big">
                            <label for="message">Üzenet:</label>
                            <textarea id="" name="message" />
                        </div>
                        <button type="submit">Küldés</button>
                    </form>
                </div>
                <div id="text-container" class="contacts">
                    <h1>Elérhetőségek</h1>
                    <div class="group">
                        <div class="icon-container">
                            <svg viewBox="0 0 38 50" fill="#D0D0D0" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.1876 48.8765C26.2267 42.5907 37.7193 27.3559 37.7193 18.7986C37.7193 8.42023 29.2717 0 18.8596 0C8.44755 0 0 8.42023 0 18.7986C0 27.3559 11.4926 42.5907 16.5317 48.8765C17.7399 50.3745 19.9794 50.3745 21.1876 48.8765ZM18.8596 12.5324C20.5269 12.5324 22.126 13.1926 23.3049 14.3678C24.4839 15.5429 25.1462 17.1367 25.1462 18.7986C25.1462 20.4606 24.4839 22.0544 23.3049 23.2295C22.126 24.4047 20.5269 25.0649 18.8596 25.0649C17.1924 25.0649 15.5933 24.4047 14.4144 23.2295C13.2354 22.0544 12.5731 20.4606 12.5731 18.7986C12.5731 17.1367 13.2354 15.5429 14.4144 14.3678C15.5933 13.1926 17.1924 12.5324 18.8596 12.5324Z"
                                />
                            </svg>
                        </div>
                        <span>6100 Kiskunfélegyháza, Kossuth u. 24.</span>
                    </div>
                    <div class="group">
                        <div class="icon-container">
                            <svg viewBox="0 0 47 47" fill="#D0D0D0" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_20_131)">
                                    <path
                                        d="M15.1373 2.25808C14.4305 0.550654 12.567 -0.358135 10.7861 0.128388L2.70801 2.33151C1.11074 2.77214 0 4.22253 0 5.87487C0 28.5854 18.4145 46.9999 41.125 46.9999C42.7773 46.9999 44.2277 45.8891 44.6684 44.2919L46.8715 36.2137C47.358 34.4329 46.4492 32.5694 44.7418 31.8626L35.9293 28.1907C34.433 27.5665 32.6981 27.9979 31.6791 29.2555L27.9705 33.7811C21.508 30.7243 16.2756 25.4919 13.2188 19.0294L17.7443 15.33C19.002 14.3018 19.4334 12.576 18.8092 11.0798L15.1373 2.26726V2.25808Z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <span>+36 12 345 6789</span>
                    </div>
                    <div class="group">
                        <div class="icon-container">
                            <svg viewBox="0 0 45 45" fill="#D0D0D0" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.21875 5.625C1.88965 5.625 0 7.51465 0 9.84375C0 11.1709 0.624024 12.4189 1.6875 13.2187L20.8125 27.5625C21.8145 28.3096 23.1855 28.3096 24.1875 27.5625L43.3125 13.2187C44.376 12.4189 45 11.1709 45 9.84375C45 7.51465 43.1104 5.625 40.7812 5.625H4.21875ZM0 15.4688V33.75C0 36.8525 2.52246 39.375 5.625 39.375H39.375C42.4775 39.375 45 36.8525 45 33.75V15.4688L25.875 29.8125C23.8711 31.3154 21.1289 31.3154 19.125 29.8125L0 15.4688Z"
                                />
                            </svg>
                        </div>
                        <span>kapcsolat@fenykepeszur.hu</span>
                    </div>
                </div>
            </div>
        </div>
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

                #contacts-container {
                    padding: 2rem 4rem 2rem 4rem;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    .contacts {
                        width: 48%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        font-family: "Jost", sans-serif;
                        font-size: 1.2rem;
                        color: white;
                        background-color: hsla(0, 0%, 12%, 0.8);

                        h1 {
                            font-size: 4rem;
                            font-weight: normal;
                        }

                        &#text-container {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: flex-start;
                            padding: 2.5rem;
                            gap: 2rem;

                            .group {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: flex-start;
                                gap: 1rem;
                                width: 100%;
                                font-size: 1.8rem;

                                .icon-container {
                                    display: grid;
                                    place-items: center;
                                    aspect-ratio: 1 / 1;
                                    height: 4.6rem;
                                    padding: 1.2rem;
                                    background-color: hsla(0, 0%, 66%, 0.4);
                                    border-radius: 50%;
                                }
                            }
                        }

                        form {
                            display: flex;
                            width: 100%;
                            height: 100%;
                            flex-direction: column;
                            align-items: center;
                            justify-content: space-between;
                            padding: 2.5rem;
                            gap: 1rem;

                            .input-group {
                                width: 100%;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: flex-start;

                                label {
                                    font-size: 1.5rem;
                                }

                                input {
                                    width: 100%;
                                    height: 2.5rem;
                                    border: none;
                                    outline: none;
                                    background-color: hsla(0, 0%, 66%, 0.4);

                                    &:focus {
                                        background-color: hsla(0, 0%, 66%, 0.6);
                                    }
                                }
                            }

                            button {
                                border: none;
                                outline: none;
                                background-color: hsla(0, 0%, 26%, 0.8);
                                color: #fff;
                                padding: 1.2rem;
                                width: 30%;
                                font-size: 1.5rem;
                                font-weight: normal;
                                cursor: pointer;

                                &:hover {
                                    background-color: hsla(0, 0%, 26%, 1);
                                }
                            }

                            #big {
                                flex-grow: 1;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: flex-start;

                                textarea {
                                    width: 100%;
                                    background-color: hsla(0, 0%, 66%, 0.4);
                                    border: none;
                                    outline: none;
                                    flex-grow: 1;

                                    &:focus {
                                        background-color: hsla(0, 0%, 66%, 0.6);
                                    }
                                }
                            }
                        }
                    }
                }

                .card-container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding: 8rem 4rem 8rem 4rem;

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
                    margin: 8rem 4rem 8rem 4rem;

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

        // #first {
        //     background-image: url("./images/main-page/first.webp");
        // }
        // #second {
        //     background-image: url("./images/main-page/second.webp");
        // }
        // #third {
        //     background-image: url("./images/main-page/third.webp");
        // }
    }
</style>
