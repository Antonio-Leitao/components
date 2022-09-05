<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";
  export let expanded = false;
  export let name;
  export let children;

  
  function toggle() {
    expanded = !expanded;
  }
</script>

<span class:expanded on:click={toggle}
  >{name}
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-chevron-down"
    ><polyline points="6 9 12 15 18 9" /></svg
  >
</span>

{#if expanded}
  <ul>
    {#each children as child, i}
      <li>
        {#if child.children}
          <div
            in:fly={{ y: -20, duration: 300, delay: i * 50, easing: quintOut }}
          >
            <svelte:self {...child} />
          </div>
        {:else}
          <p
            in:fly={{ y: -20, duration: 300, delay: i * 50, easing: quintOut }}
          >
            {child.name}
          </p>
        {/if}
      </li>
    {/each}
  </ul>
{/if}

<style>
  * {
    font-family: Inter, system-ui, sans-serif;
    font-weight: 400;
  }
  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5em;
    font-weight: bold;
    cursor: pointer;
  }

  span:hover,
  p:hover {
    color: var(--highlight);
  }

  p {
    cursor: pointer;
    padding: 0.5em;
    margin: 0;
  }

  ul {
    padding: 0em 0 0 0.5em;
    margin: 0 0 0 0.5em;
    list-style: none;
    border-left: 1px solid #eee;
  }

  .feather {
    fill: var(--offwhite);
    stroke: var(--dark);
    stroke-width: 0.1rem;
  }
</style>
