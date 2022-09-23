<script>
  import Control from "./Control.svelte";
  const cards = [
    { title: "Never Forget" },
    {
      title: "Use something cool etc",
    },
    {
      title: "Topological Data analysis and other things",
    },
    {
      title: "Topological Expressiveness of Neural networkcs",
    },
    {
      title: "Graph Neural networks and other isoteric architectures",
    },
    {
      title: "Some smaller title",
    },
    {
      title: "Each one of these could be a component in itself",
    },
  ];
</script>

<div class="control">
  <Control>
    Number of cards:
 </Control>
</div>


<section class="card-list">
  {#each cards as card}
    <article class="card">
      <div class="card-title">
        {card.title}
      </div>
    </article>
  {/each}
</section>


<style>
  .card-list {
    display: flex;
    padding: 3rem;
  }
  .card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 190px;
    height: 228px;
    padding: 1.3rem;
    background: rgb(255, 255, 255);
    border-radius: 0.4rem;
    box-shadow: -0.3em 0.3em 0.7em #00000015;
    transition: all 0.2s ease;
  }

  .card-title {
    font-family: Arbutus Slab, serif;
    margin-top: 0.2rem;
    font-size: 1.4rem;
    font-weight: 400;
    color: #000;
    line-height: 1.25;
    transition: color 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: translateY(-1rem);
  }

  .card:hover ~ .card {
    transform: translateX(100px);
  }

  .card:not(:first-child) {
    margin-left: -100px;
  }

  .control{
    position:absolute;
    top: 7rem;
    left: 2rem;
  }
</style>
