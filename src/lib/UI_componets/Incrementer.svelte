<script>
  export let min = 0;
  export let max = 10;
  let value = 0;
  let label = "Number of Articles";
</script>

<div class="input-group">
  <button
    on:click={() => (value = Math.max(value - 1, min))}
    class="ripple checkblock minus">-</button
  >
  <button
    on:click={() => (value = Math.min(value + 1, max))}
    class="ripple checkblock">+</button
  >

  <div class="input">{value}</div>

  <label for={undefined} class="user-label">{label}</label>
</div>

<style>
  .input-group {
    position: relative;
    margin-top: 1rem;
    --base-color: var(--gray);
    --main-color: var(--highlight2);
  }
  .checkblock {
    cursor: pointer;
    position: absolute;
    color: var(--offwhite);
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
    font-size: 2rem;
    border: none;
  }

  .minus {
    right: 3.1rem;
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

  .ripple {
    background-position: center;
    transition: background 0.35s;
  }
  .ripple:hover {
    background: var(--highlight2)
      radial-gradient(circle, transparent 1%, var(--highlight2) 1%)
      center/15000%;
  }
  .ripple:hover ~ label {
    color: var(--highlight2);
  }
  .ripple:hover ~ .input {
    outline: none;
    border: 1.5px solid var(--highlight2);
  }
  .ripple:active {
    background-color: var(--highlight);
    background-size: 100%;
    transition: background 0s;
  }
</style>
