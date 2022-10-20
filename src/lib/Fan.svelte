<script>
  let n_cards = 7;
  let angle = 60;
  function randomFloat(start, end) {
    return Math.random() * (end - start) + start;
  }
</script>

<div class="centering" style="--angle:{angle}deg;">
  {#each { length: n_cards } as _, i}
    <div
      class="card"
      style="--position: {i}; --random:{randomFloat(-0.5, 0.5)}"
    >
      cover
    </div>
  {/each}
</div>

<style>
  .centering {
    position: relative;
    top: 10rem;
    display: grid;
    place-items: center;
  }
  .card {
    /* Temp props*/
    display: grid;
    place-items: center;
    font-size: 2rem;

    /* Asthetic props*/
    background: white;
    height: 200px;
    width: 150px;
    border-radius: 5px;
    position: absolute;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

    /* Functional props*/
    position: absolute;
    --rotation: calc(
      calc(var(--angle) / -4) + calc(calc(var(--angle) / 25)) * var(--position)
    );
    transform: rotate(calc(var(--random) * 10deg))
      translate(calc(var(--random) * 10px), calc(var(--random) * 10px));
    transform-origin: center 120%;
    transition: all 0.5s cubic-bezier(0.05, 0.43, 0.25, 0.95);
  }

  .centering:hover > .card {
    transform: rotate(
      calc(
        calc(var(--angle) / -2) + calc(calc(var(--angle) / 6)) * var(--position)
      )
    );
    transform-origin: center 120%;
    box-shadow: -15px 2px 15px rgba(0, 0, 0, 0.07),
      0px 0px 8px rgba(0, 0, 0, 0.07);
  }
</style>
