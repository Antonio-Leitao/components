<script>
  export let n_items = 10;
  let y = 0;
  let size = 250;
  let col_width = 200;
  let items = [];
  for (let i = 0; i < n_items; i++) {
    items.push(i);
  }

  let max_y = size * items.length;
  let offset = 400;
  let focus = false;

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function handleWheel(e) {
    if (focus) {
      e.preventDefault();
      y -= e.deltaY;
    }
  }
</script>

<svelte:window on:wheel|nonpassive={handleWheel} />

<div
  on:mouseenter={() => {
    focus = true;
  }}
  on:mouseleave={() => {
    focus = false;
  }}
  class="col"
  style="width:{col_width}px"
>
  {#each items as item, i}
    <div
      class="pub"
      style="--size:{size}px; top:{mod(y + i * size, max_y) - offset}px"
    >
      {item}
    </div>
  {/each}
</div>

<style>
  .col {
    position: relative;
    overflow-y: hidden;
    height: 90vh;
    display: grid;
    place-items: center;
  }
  .pub {
    position: absolute;
    width: calc(var(--size) / 1.33);
    height: var(--size);
    border-radius: 0.5rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    margin: 1rem;
    background-color: var(--white);

    /*aesthetic props*/
    display: grid;
    place-items: center;
    font-size: 4rem;
  }
</style>
