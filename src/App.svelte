<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { spring } from "svelte/motion";
  import { useMachine } from "xstate-svelte";
  import { ShowMachine } from "./ShowMachine.js";
  import { groups, subjects } from "./data.js";
  import LowerThird from "./LowerThird.svelte";
  import Carousel from "./Carousel.svelte";


  const { state, send } = useMachine(ShowMachine);
  const bugSpring = spring(-40, {stiffness: 0.02, damping: 0.21});
  let bugUp = false;

  onMount(() => {
    send("START", {value: groups.length});
    setTimeout(() => {
      bugUp = true;
      $bugSpring += 45;
    }, 3000);
  });
</script>

<main>
  {#if $state.matches('lower_third_up')}
    <section
      class="lower-third-container"
      in:fly={{ x: 2000, duration: 500 }}
      out:fly={{ x: -2000, duration: 900 }}>
      <LowerThird {subjects} />
    </section>
  {/if}

  {#if $state.matches('carousel_up')}
    <section
      class="carousel-container"
      in:fly={{ x: 2000, duration: 500 }}
      out:fly={{ x: -2000, duration: 900 }}>
      <Carousel
        loop="true"
        perPage="1"
        autoplay="20000"
        duration="500"
        easing="ease-out"
        startIndex="0"
        dots="false"
        controls="false">
        {#each groups as group, index}
          <div class="slide-content">
            {#each group.teams as team, index}
              <div
                class="team-container flat"
                style={index !== 0 ? 'flex-direction: row-reverse; padding-left: 2rem; margin-left: 1rem;' : 'flex-direction: row; padding-right: 2rem; margin-right: 1rem'}>
                <div
                  class="team-logo"
                  style={index !== 0 ? 'border-top-right-radius: 1rem; border-bottom-right-radius: 1rem; border-left: 1px solid #fff;' : 'border-top-left-radius: 1rem; border-bottom-left-radius: 1rem; border-right: 1px solid #fff'}>
                  <img
                    src="images/{team.school
                      .replace(/\s/g, '')
                      .toLowerCase()}.png"
                    alt={team.school} />
                </div>
                <div
                  class="team-data"
                  style={index !== 0 ? 'flex-direction: row-reverse; padding-right: 2rem;' : 'flex-direction: row; padding-left: 2rem;'}>
                  <div
                    class="team-info"
                    style={index !== 0 ? 'text-align: right;' : 'text-align: left;'}>
                    <h2>{team.school}</h2>
                    <h1>{team.mascot}</h1>
                  </div>
                  <div class="team-score">
                    <h1>{team.score}</h1>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        {/each}
      </Carousel>
    </section>
  {/if}

  {#if bugUp}
    <section
    style="left: {$bugSpring}vmin;"
      class="bug-container">
      <img src="images/ChunkyNelms_logo.png" alt="Chunky Nelms Logo" />
    </section>
  {/if}
</main>


<style>
  .lower-third-container {
    position: absolute;
    bottom: 5vmin;
    left: 4vmin;
    right: 4vmin;
    margin: 0 3rem 0 2rem;
    height: 15vmin;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
  .bug-container {
    position: relative;
    top: 5vmin;
    /* left: 5vmin; */
    width: 20vmin;
    height: 20vmin;
  }
  .bug-container img {
    max-width: 20vmin;
    max-height: 20vmin;
    filter: drop-shadow(-1px 0 0px rgba(255, 255, 255, 0.9))
      drop-shadow(0px -1px 0px rgba(255, 255, 255, 0.9))
      drop-shadow(0px 1px 0px rgba(255, 255, 255, 0.9))
      drop-shadow(1px 0px 0px rgba(255, 255, 255, 0.9));
  }
  .carousel-container {
    position: absolute;
    left: 4vmin;
    right: 4vmin;
    bottom: 5vmin;
    height: 15vmin;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slide-content {
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    margin: 0 2rem;
    text-shadow: 5px 5px 7px rgba(0, 0, 0, 0.6);
    border-radius: 1rem;
    border: 2px solid var(--white);
  }
  .gradient {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 5%,
      rgba(70, 70, 75, 0.7) 30%,
      rgba(126, 126, 126, 0.7) 60%,
      rgba(234, 234, 234, 0.7) 95%,
      rgba(250, 250, 250, 0.7) 100%
    );
    background-color: #fff;
  }
  .flat {
    background-color: var(--gray-900);
  }
  .team-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    gap: 1rem;
    margin: 0;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 1rem;
  }
  .team-logo {
    width: 15vmin;
    height: 15vmin;
    background-color: var(--dark-gray);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .team-logo img {
    /* height: auto; */
    max-width: 15vmin;
    max-height: 15vmin;
    padding: 1rem;
    filter: drop-shadow(-2px 0px 0px rgba(255, 255, 255, 0.9))
      drop-shadow(0px -2px 0px rgba(255, 255, 255, 0.9))
      drop-shadow(2px 0px 0px rgba(255, 255, 255, 0.9))
      drop-shadow(0px 2px 0px rgba(255, 255, 255, 0.9));
  }
  .team-data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
  }
  .team-info {
    margin: 0;
    padding: 0;
  }
  .team-score {
    padding: 0;
    margin: 0;
  }
  h1,
  h2 {
    padding: 0;
    margin: 0;
  }
  h1 {
    font-size: 3.75rem;
  }
  h2 {
    font-size: 3rem;
    font-weight: 400;
  }
  .team-score h1 {
    font-size: 7rem;
  }
</style>