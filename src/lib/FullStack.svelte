<script>
  export let n_cards = 7;
  export let card_size = 150;
  export let intersection = 0.7;
  export let max_size = 400;
  let margin = 20;
  let colapsed = true;
  let outer = card_size * (1 - intersection);

  let delta = (n_cards - 1) * outer;
  //console.log(delta);

  delta = Math.max(1, delta / (max_size - 2 * card_size));
  //console.log(delta)//add inner here if necessary

  function getLeftValue(i) {
    return (i * outer) / delta;
  }
  let shadow = card_size;
</script>

<div class="wrapper" style="width:{max_size + margin}px;">
  <!-- this wrapper class is just to constrain the list iwch will alwyas be 100%; -->
  <div class="crop" bind:clientWidth={max_size}>
    <div class="list" style="--card-size:{card_size}px;">
      <div
        class:colapsed
        on:click={() => (colapsed = !colapsed)}
        class="cover"
        style="--position:{n_cards}; --left-value:{getLeftValue(n_cards - 1) +
          card_size}"
      >
        cover
      </div>
      {#each { length: n_cards } as _, i}
        <div
          class:colapsed
          class="card"
          style="--position:{i}; --left-value:{getLeftValue(
            i
          )}; --shadow:{shadow}"
        >
          {i}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .crop {
    position: relative;
    overflow-x: hidden;
  }
  .list {
    width: 100%;
    position: inherit;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: calc(1.5 * var(--card-size));
    margin: 30px;
  }

  .card,
  .cover {
    font-family: Arbutus Slab, serif;
    width: var(--card-size);
    height: calc(1.33 * var(--card-size));
    background-color: #fff;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    font-size: 2rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
      0px -4px 8px rgba(0, 0, 0, 0.001);

    /* functional properties*/
    z-index: var(--position);
    position: absolute;
    left: calc(var(--left-value) * 1px);
  }

  .card:not(.colapsed):hover ~ .card:not(.colapsed) {
    transform: translateX(calc(var(--shadow) * 0.7px));
  }
  .card:not(.colapsed):hover {
    transform: translateY(-1rem);
  }

  .cover {
    cursor: pointer;
  }

  .colapsed {
    left: 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transform: translate(
      calc(var(--position) * -1.5px),
      calc(var(--position) * -1.5px)
    );
  }
  .cover.colapsed {
    box-shadow: 0px calc(var(--position) * 1px) calc(var(--position) * 2px)
      rgba(0, 0, 0, 0.2);
  }

  .cover.colapsed:hover,
  .cover.colapsed:hover ~ .card.colapsed {
    transform: translate(
      calc(var(--position) * -2.5px),
      calc(var(--position) * -2.5px)
    );
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
</style>
