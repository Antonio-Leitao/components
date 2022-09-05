<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<nav>
  <a href="/">Home</a>
  <a href="/#/copyclipboard">Copy to Clipboard</a>
  <a href="/#/toc">Table of Contents</a>
</nav>


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
  a {
    color: var(--offdark);
    text-decoration: inherit;
  }
  a:hover {
    color: var(--highlight);
  }
</style>
