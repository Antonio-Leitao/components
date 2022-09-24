<script>
  export let label = "Ribbon Color";
  export let value = "#DAAFE9";
  import { clickOutside } from "../scripts/click_outside.js";
  export let top = false;
  export let color = false;
  export let checkbox = false;
  let dropped = false;
  let disabled = false;

  import LucideIcon from "../LucideIcon.svelte";

  // Our color set
  let values = [
    [
      "#DAAFE9",
      "#C7DBF5",
      "#AAD5FB",
      "#ADE5DA",
      "#B0EDC3",
      "#FDF0A4",
      "#F8D6A2",
    ],
    [
      "#C47ADA",
      "#90BAEE",
      "#75BAFA",
      "#72D5BF",
      "#73DE8C",
      "#FBE66E",
      "#F5B969",
    ],
  ];

  function changeValue(innerValue) {
    value = innerValue;
    dropped = false;
  }
</script>

<div
  class="input-group"
  style="--base-color:{color ? value : 'var(--gray)'}; --main-color:{color
    ? value
    : 'var(--highlight2)'}"
>
  <input class="input" bind:value {disabled} />
  {#if color}
    <button on:click={() => (dropped = true)} class="ripple checkblock">
      <LucideIcon name="paintbrush" />
    </button>
    {#if dropped}
      <div
        class:top
        class="values-dropdown"
        use:clickOutside
        on:outclick={() => (dropped = false)}
      >
        <div class="values-dropdown-grid">
          {#each values as val, index}
            {#each val as innerValue, innerIndex}
              <button
                id="{index}-{innerIndex}"
                class:active={innerValue == value}
                style="background: {innerValue};"
                on:click={() => {
                  changeValue(innerValue);
                }}
                class="color-block"
              />
            {/each}
          {/each}
        </div>
      </div>
    {/if}
  {/if}

  {#if checkbox}
    <button on:click={() => (disabled = !disabled)} class="ripple checkblock">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><rect x="1" y="5" width="22" height="14" rx="7" ry="7" /><circle
          cx="8"
          cy="12"
          r="3"
          class:disabled
        /></svg
      >
    </button>
  {/if}

  <label for={undefined} class="user-label">{label}</label>
</div>

<style>
  .input-group {
    position: relative;
    margin-top: 1rem;
  }
  .checkblock {
    cursor: pointer;
    position: absolute;
    background-color: var(--base-color);
    width: 3.5rem;
    height: 100%;
    transform: scale(0.8);
    right: 0;
    top: 0;
    border-radius: 0.8rem;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    display: grid;
    place-items: center;
    border: none;
    color: var(--offwhite);
  }
  .input {
    border: solid 1.5px var(--base-color);
    border-radius: 1rem;
    background-color: var(--offdark);
    padding: 1rem;
    font-size: 1rem;
    color: #f5f5f5;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .user-label {
    padding: 0 0.2rem 0 0.2rem;
    position: absolute;
    font-size: 0.75rem;
    left: 1rem;
    top: -0.4rem;
    background-color: var(--offdark);
    color: var(--base-color);
    pointer-events: none;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .input:focus {
    outline: none;
    border: 1.5px solid var(--main-color);
  }

  .input:focus ~ label {
    color: var(--main-color);
  }

  .input:focus ~ .checkblock {
    background-color: var(--main-color);
  }

  .color-block {
    border-radius: 100%;
    width: 24px;
    height: 24px;
    line-height: 0;
    font-size: 0;
  }

  .values-dropdown {
    padding: 1rem;
    position: absolute;
    z-index: 1;
    top: 40px;
    background: var(--offwhite);
    border: 1px solid #ccc;
    border-radius: 0.3rem;
  }

  .values-dropdown-grid {
    grid-template-columns: repeat(7, 24px);
    grid-template-rows: 24px 24px;
    grid-gap: 10px;
    display: grid;
  }

  .values-dropdown.top {
    top: auto;
    bottom: 40px;
  }

  .values-dropdown button {
    border: none;
  }

  input:disabled {
    text-decoration: line-through;
    color: var(--gray);
    opacity: 0.5;
  }
  input:disabled ~ .checkblock {
    background-color: var(--highlight);
  }

  circle {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .disabled {
    transform: translateX(30%);
  }

  .ripple {
    background-position: center;
    transition: background 0.35s;
  }
  .ripple:hover {
    background: var(--base-color)
      radial-gradient(circle, transparent 1%, var(--base-color) 1%)
      center/15000%;
  }
  .ripple:active {
    background-color: var(--hightligh2);
    background-size: 100%;
    transition: background 0s;
  }
</style>
