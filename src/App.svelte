<script>
  import routes from "./routes";
  import Router, { location, link } from "svelte-spa-router";
  import LucideIcon from "./lib/LucideIcon.svelte";
  import ModeToggle from "./lib/UI_componets/ModeToggle.svelte";

</script>
<div class="mode-toggle">
  <ModeToggle />
</div>
<!-- <button on:click={toggleDarkMode}>Toggle Me</button> -->
{#if $location !== undefined && $location !== "/"}
  <a href="/" use:link>
    <div class="back">
      <LucideIcon name="arrow-left" size=36/>
    </div>
  </a>
{/if}
<div class="container">
  <Router {routes} />
</div>

<style>


  .container{
    margin-top:10rem;
    display:grid;
    place-items:center;
    margin-bottom:5rem;
  }

  .back {
    top: 2rem;
    left: 2rem;
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
  }

  .back:hover {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 2px 3px 12px rgba(0, 0, 0, 0.2);
    color: var(--highlight);
  }

  .mode-toggle{
    position:absolute;
    left: 90%;
    top:2rem;
  }

  a{
    color:inherit;
    font: inherit;
  }
</style>
