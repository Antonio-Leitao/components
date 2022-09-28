<script>
  import { Scroll } from "lucide-svelte";
  import { inView } from "./scripts/inview.js";
  import ScrollComponent from "./ScrollComponent.svelte";
  let n_sections = 10;
</script>

{#each { length: n_sections } as _, j}
  <ScrollComponent>
    <section>
      <h1>
        Section {j}
      </h1>
    </section>
  </ScrollComponent>


  <!-- <section
    use:inView={{ threshold: 0.5 }}
    on:enter={({detail}) => console.log(detail)}
  >
    
  </section> -->
{/each}

<style>
  section {
    display: grid;
    place-items: center;
    height: 100vh;
  }
</style>
