<script>
  export const title = "Primer on Algebraic topology";
  export let count = 4;

  import Control from "./UI_componets/Control.svelte";
</script>

<div class="control">
  <Control>
    <p>
      Number of Cards
    </p>
    <span>
    <button on:click={()=>count=Math.max(count-1,1)}>
      -
      </button>
      {count}
      <button on:click={()=>count=Math.min(count+1,10)}>
        +
      </button>
    </span>
 </Control>
</div>

<div class="stack">
  <div class="paper" style:--max-order="{count}">
    <h2>{title}</h2>
    <p>{count} articles</p>
  </div>
  {#each { length: count } as _, i}
    <div class="paper last" style:--order="{-i}" style:--max-order="{count-i-1}"/>
  {/each}
</div>





<style>
  h2 {
    font-family: Arbutus Slab, serif;
    font-weight: normal;
    color: #000;
    line-height: 1.25;
  }

  p {
    font-size: 14px;
  }

  .stack {
    position:relative;
    cursor: pointer;
    width: 170px;
    height: 228px;
    --offsetx: 0.15rem;
    --offsety:0.21rem;
    --max-order:10;
  }

  .paper {
    width:100%;
    height:100%;
    position: absolute;
    --order:1;
    z-index:var(--order);
    
    top: calc(-1*var(--order)*var(--offsety));
    left: calc(-1*var(--order)*var(--offsetx));
    transition: all 0.2s ease-out;

    /* These are not necessary for animation */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    border-radius: 0.4rem;
    padding: 1rem;
    box-shadow: 0.3em 0.3em 0.7em #00000015;
  }

  .stack:hover >:not(:last-child) {
    transform: translateX(calc(-1*var(--max-order)*var(--offsetx))) translateY(calc(-1*var(--max-order)*var(--offsety)));
  }

  .control{
    position:absolute;
    top: 7rem;
    left: 2rem;
  }

</style>
