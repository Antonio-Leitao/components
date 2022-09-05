<script>
  import routes from "./routes";
  import Router from "svelte-spa-router";
</script>

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
</style>
