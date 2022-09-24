<script>
  import Window from "./Window.svelte";
  let indexes = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
  };

  function reOrder(id) {
    let count = 0;
    for (const property in indexes) {
      if (property === id) {
        continue;
      }
      if (indexes[property] >= indexes[id]) {
        indexes[property] -= 1;
        count += 1;
      }
    }
    indexes[id] += count;
  }

  import Control from "./UI_componets/Control.svelte";
</script>

<div class="control">
  <Control />
</div>
<div class="desktop">
  {#each Object.entries(indexes) as window, i}
    <div on:mousedown={() => reOrder(window[0])}>
      <Window
        top={200 + 10 * i}
        left={500 + 10 * i}
        bind:zindex={indexes[window[0]]}
      >
        {window[0]}
      </Window>
    </div>
  {/each}
</div>

<style>
  .control {
    position: absolute;
    top: 7rem;
    left: 2rem;
  }
</style>
