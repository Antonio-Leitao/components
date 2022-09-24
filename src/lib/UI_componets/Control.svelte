<script>
  import { clickOutside } from "../scripts/click_outside.js";
  import LucideIcon from "../LucideIcon.svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let visible = false;
  let anchor = undefined;

  export let offsetx = 1.5;
  export let offsety = -1.5;

  let bottom;
  let left;

  const initPosition = () =>
    ({ bottom, left } = anchor?.getBoundingClientRect() ?? {
      bottom: 0,
      left: 0,
    });

  $: anchor, initPosition();
</script>

<svelte:window on:resize={initPosition} />

<div on:click={() => (visible = !visible)} bind:this={anchor} class="palette">
  <LucideIcon name="palette" size="36" />
</div>
<!-- <button on:click={() => (visible = !visible)} bind:this={anchor}>Open</button> -->
{#if visible}
  <div
    use:clickOutside
    style="top: {`${bottom}px`}; left: {`${left}px`}; transform:{`translate(${offsetx}rem,${offsety}rem)`};"
    on:outclick={() => (visible = false)}
    transition:fly={{ y: -20, duration: 300, easing: quintOut }}
    class="wrapper"
  >
    <div class="content">
      <slot />
    </div>
  </div>
{/if}

<style>
  .wrapper {
    position: fixed;
    padding: 1rem 1rem 1rem 1rem;
    min-width: 10rem;


    min-height: 100px;
    width: fit-content;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 5px;


    color: #fff;
    background: var(--offdark);
    box-shadow: 0.3em 0.3em 0.7em #00000015;
  }

  .content{
    width:100%
  }
  .palette {
    cursor: pointer;
    margin: auto;
    background: #fefefe;
    border-radius: 5px;
    overflow: hidden;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    transition: all 0.1s ease;
    color: var(--dark);
    z-index: 100;
  }
  .palette:hover {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 2px 3px 12px rgba(0, 0, 0, 0.2);
    color: var(--highlight);
  }
</style>
