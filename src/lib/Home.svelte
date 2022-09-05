<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  const components = [
    { name: "Copy to Clipboard", href: "/#/copyclipboard", icon: "play" },
    { name: "Table of Contents", href: "/#/toc", icon: "list" },
  ];
</script>

<nav>
  <a href="/">Home</a>
  <a href="/#/copyclipboard">Copy to Clipboard</a>
  <a href="/#/toc">Table of Contents</a>
</nav>

<!-- <div class="component_grid">
  {#each components as component, i}
    <a href={component.href}>
      <div
        class="outer_card"
        in:fly={{ x: 100, duration: 500, delay: i * 100, easing: quintOut }}
      >
        <div class="card">
            <h3>{component.name}</h3>
        </div>
      </div>
    </a>
  {/each}
</div> -->

<div class="card">
  <div class="contact">new</div>
  <div class="overview">
    <div class="left">
      <h2>Personal <strong>Social Card</strong></h2>
      <p>
        Click one of the social icons below to switch between.
      </p>
    </div>
    <div class="right">
        <div class="circle"></div>
    </div>
  </div>
</div>

<style>
  .component_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    width: 100%;
  }
  .card {
    cursor: pointer;
    margin: auto;
    background: #fefefe;
    border-radius: 5px;
    overflow: hidden;
    width: 278px;
    height: 85px;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 1rem;
    padding-left:1.2rem;
    transition: all 0.1s ease;
    overflow-y: hidden;
  }

  .card:hover{
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 2px 3px 12px rgba(0, 0, 0, 0.2);
  }

  .contact {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    color: rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 0.5rem;
    font-weight: 700;
    padding: 0.2rem 0.5rem;
    border-radius: 1rem;
    background: rgba(0, 0, 0, 0.1);
    line-height: 1;
    text-shadow: 0 1px 0px rgba(255, 255, 255, 0.1);
  }

  .overview{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position:absolute;
    top:1.8rem;
  }
  .overview .left h2{
    margin: 0;
    font-size: 1.2rem;
  }
  .overview .left p{
    font-size: 0.8rem;
    margin: 0;
  }

  .circle{
    width:3rem;
    height: 3rem;
    border-radius: 100%;
    background-color: var(--gray);
    margin-right: 1.5rem;
  }
</style>
