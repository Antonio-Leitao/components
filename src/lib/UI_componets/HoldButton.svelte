<script>
  import { longPress } from "../scripts/long_press";

  let duration = 3;
  import LucideIcon from "../LucideIcon.svelte";
  let animate = true;
</script>

<button
  style="--duration:{duration}s"
  class:animate
  use:longPress={duration * 1000}
  on:longpress={() => (animate = false)}
  on:mouseenter={() => (animate = true)}
>
  {#if animate}
    <LucideIcon name="hourglass" />
  {:else}
    <LucideIcon name="check" />
  {/if}
  <div class="label">Press & Hold</div>
</button>

<style>
  button {
    --background: #2b3044;
    --background-hover: #1e2235;
    --text: #fff;
    --shadow: rgba(0, 9, 61, 0.2);
    --paper: #5c86ff;
    position: relative;
    outline: none;
    border: none;
    background: none;
    padding: 10px 18px;
    border-radius: 7px;
    min-width: 142px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    display: flex;
    color: var(--text);
    background: var(--background);
    box-shadow: 0 4px 8px var(--shadow);
    transform: scale(var(--scale, 1));
    transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
    font-weight: 700;
  }

  button:hover {
    background-color: var(--background-hover);
  }

  .label {
    margin-left: 0.5rem;
  }
  button:active {
    transform: scale(0.94);
  }

  button.animate:active::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid var(--paper);
    border-radius: 7px;
    animation: clippath var(--duration) forwards linear;
  }

  @keyframes clippath {
    0% {
      clip-path: polygon(8% 0, 9% 0, 9% 9%, 43% 32%, 37% 71%, 10% 85%);
    }
    35% {
      clip-path: polygon(8% 0, 100% 0, 100% 5%, 86% 5%, 37% 71%, 10% 85%);
    }
    50% {
      clip-path: polygon(8% 0, 100% 0, 100% 100%, 95% 100%, 95% 89%, 10% 85%);
    }
    85% {
      clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 95%, 8% 95%);
    }
    100% {
      clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 0, 8% 0);
    }
  }
</style>
