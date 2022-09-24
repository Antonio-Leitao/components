<script>
  import { inView } from "./scripts/inview.js";
  let n_sections = 10;
</script>

{#each { length: n_sections } as _, j}
  <section
    use:inView={{ threshold: 0.5 }}
    on:enter={({detail}) => console.log(detail)}
  >
    <h1>
      Section {j}
    </h1>
  </section>
{/each}

<style>
  section {
    display: grid;
    place-items: center;
    height: 100vh;
  }
</style>
