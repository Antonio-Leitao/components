<script>
  import { inView } from "./scripts/inview.js";

  let visible;
</script>

<div
  class:hidden={!visible}
  use:inView={{ threshold: 0.5 }}
  on:enter={() => (visible = true)}
  on:leave={() => (visible = false)}
>
  <slot />
</div>

<style>
  div {
    transition: all 1s ease-out;
  }
  .hidden {
    opacity: 0;
    transform: translateX(-100%);
  }
</style>
