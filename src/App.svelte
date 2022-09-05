<script>
  import routes from "./routes";
  import Router, { location } from "svelte-spa-router";
  import LucideIcon from "./lib/LucideIcon.svelte";
</script>

{#if $location !== undefined && $location !== "/"}
  <a href="/#/">
    <div class="back">
      <LucideIcon name="arrow-left" size=36/>
    </div>
  </a>
{/if}
<div class="container">
  <Router {routes} />
</div>

<style>
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .back {
    top: 2rem;
    left: 2rem;
    cursor: pointer;
    margin: auto;
    background: #fefefe;
    border-radius: 5px;
    overflow: hidden;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    transition: all 0.1s ease;
  }

  .back:hover {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 2px 3px 12px rgba(0, 0, 0, 0.2);
    color: var(--highlight);
  }

  a{
    color:inherit;
    font: inherit;
  }
</style>
