<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { each } from "svelte/internal";
  import LucideIcon from "./LucideIcon.svelte";
  const components = [
    {
      name: "Copy to Clipboard",
      description: "Click to copy text to clipboard",
      href: "/#/copyclipboard",
      icon: "clipboard",
      new: true,
    },
    {
      name: "Table of Contents",
      description: "Automatic TOC from json file",
      href: "/#/toc",
      icon: "list",
      new: true,
    },
  ];
</script>

<div class="outer">
  <h1>Home</h1>
  <div class="component_grid">
    {#each components as component}
      <div on:click={() => (location.href = component.href)} class="card">
        {#if component.new}
          <div class="contact">new</div>
        {/if}
        <div class="overview">
          <div class="left">
            <h2>{component.name}</h2>
            <p>{component.description}</p>
          </div>
          <div class="right">
            <div class="circle">
              <LucideIcon name={component.icon} size=36/>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45vw;
  }
  .component_grid {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
    padding-left: 1.2rem;
    transition: all 0.1s ease;
    overflow-y: hidden;
  }

  .card:hover {
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

  .overview {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 1.8rem;
  }
  .overview .left h2 {
    margin: 0;
    font-size: 1.2rem;
  }
  .overview .left p {
    font-size: 0.8rem;
    margin: 0;
  }

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    margin-left: 3rem;
  }

  .card:hover .circle{
    transform: scale(1.4);
  }
</style>
