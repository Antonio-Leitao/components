<script>
  export let count = 8;
  import { randomUser } from "./scripts/fake_data.js";


  let researchers = [];
  Array.from({ length: count }).forEach(() => {
    researchers.push(randomUser());
  });
 


  let n_blocks = Math.floor((researchers.length - 2) / 10);
  if ((researchers.length - 2) % 10 !== 0) {
    n_blocks += 1;
  }


  import Control from "./UI_componets/Control.svelte";
  import Incrementer from "./UI_componets/Incrementer.svelte";
</script>

<div class="control">
  <Control>
    <Incrementer label={"Number of items"} bind:value={count}/>
 </Control>
</div>

<div class="mosaic-grid">
  <div class="line one">
    {#each researchers.slice(0, 2) as researcher}
      <div
        style="background-image: url({`${researcher.avatar}`})"
        class="mosaic-item"
      >
        <div class="mosaic-text">
          <div class="project-title">{researcher.name} {researcher.surname}</div>
          <p>{researcher.jobtitle}</p>
        </div>
      </div>
    {/each}
  </div>
  
  {#each { length: n_blocks } as block_n, n}
    <div class="line even">
      {#each researchers
        .slice(2 + 10 * n, 2 + 10 * (n + 1))
        .slice(0, 5) as researcher}
        <div
          style="background-image: url({`${researcher.avatar}`})"
          class="mosaic-item"
        >
          <div class="mosaic-text">
            <div class="project-title">{researcher.name} {researcher.surname}</div>
            <p>{researcher.jobtitle}</p>
          </div>
        </div>
      {/each}
    </div>
    <div class="line odd">
      {#each researchers
        .slice(2 + 10 * n, 2 + 10 * (n + 1))
        .slice(5) as researcher}
        <div
          style="background-image: url({`${researcher.avatar}`})"
          class="mosaic-item"
        >
          <div class="mosaic-text">
            <div class="project-title">{researcher.name} {researcher.surname}</div>
            <p>{researcher.jobtitle}</p>
          </div>
        </div>
      {/each}
    </div>
  {/each}
 
</div>

<style>


@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700;900&display=swap');

  * {
    --block-size: 180px;
  }
  .mosaic-grid{
    width: calc(6 * var(--block-size));
  }

  .line{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-family: 'Raleway', sans-serif;
    margin: 0px;
    min-height: var(--block-size);
    min-width: var(--block-size);
    -moz-osx-font-smoothing: grayscale;
  }

  .one {
    justify-content: center;
  }
  .even {
    justify-content: right;
  }
  .odd {
    justify-content: left;

  }

  .mosaic-item {
    cursor: pointer;
    width: clamp(var(--block-size), var(--block-size), 250px);
    height: clamp(var(--block-size), var(--block-size), 250px);
    background-position: center;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: 220px;
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
    transition-delay: 0s;
  }

  .mosaic-text {
    margin-left:1rem;
    width: 80%;
    margin-top:60%;
    transition: all 0.2s ease-out;
    transition-delay: 0s;
  }

  .project-title {
    font-size: 1rem;
    font-weight: 900;
    color: #fff;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.9);
  }
  p{
    margin:0;
    margin-top:0.3rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--white);
  }

  .mosaic-item:hover {
    padding: 20px;
    margin: -20px;
    box-shadow: 0 1px 25px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }

  .control{
    position:absolute;
    top: 7rem;
    left: 2rem;
  }

</style>
