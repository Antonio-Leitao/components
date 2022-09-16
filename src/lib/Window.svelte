<script>
  export let left = 100;
  export let top = 100;
  export let zindex = 1;

  let moving = false;

  function onMouseDown() {
    moving = true;
  }

  function onMouseMove(e) {
    if (moving) {
      left += e.movementX;
      top += e.movementY;
    }
  }

  function onMouseUp() {
    moving = false;
  }

  // 	$: console.log(moving);
</script>

<section
  on:mousedown={onMouseDown}
  style="left: {left}px; top: {top}px; z-index:{zindex};"
  class="draggable"
>
<div class="letter">
	<slot />
</div>
  
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
  .draggable {
    position: absolute;
    display: grid;
    place-items: center;
    width: 190px;
    box-shadow: 0.3em 0.3em 0.7em #00000015;
    height: 228px;
    backface-visibility: hidden;
    border-radius: 0.4rem;
    background-color: var(--white);
    color: var(--highlight);
  }

  .letter {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
  }
</style>
