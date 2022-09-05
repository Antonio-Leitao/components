<script>
  import TocHelper from "./Toc_helper.svelte";
  const content = [
    {
      name: "API",
      children: [
        {
          name: "Folder1",
          children: [
            { name: "Module1.1" },
            { name: "Module1.2" },
            { name: "Module1.3" },
            {
              name: "Folder1.4",
              children: [
                { name: "Module1.4.1" },
                { name: "Module1.4.2" },
                { name: "Module1.4.3" },
              ],
            },
          ],
        },
        {
          name: "Folder2",
          children: [
            { name: "Module2.1" },
            { name: "Module2.2" },
            { name: "Module2.3" },
            { name: "this module has a hugely long name problematic" },
          ],
        },
      ],
    },
    {
      name: "Testing",
      children: [
        { name: "Module1.1" },
        { name: "Module1.2" },
        {
          name: "Folder1",
          children: [
            { name: "Module1.1" },
            { name: "Module1.2" },
            { name: "Module1.3" },
          ],
        },
      ],
    },
  ];

  const docs = {
    featured: ["Getting Started", "Tutorials", "FAQ"],
    content: content,
  };
</script>

<div class="tocspace">
  <nav class="featured">
    <ul>
      {#each docs.featured as feature}
        <li class="featured-item">
            <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-info"
            ><circle cx="12" cy="12" r="10" /><line
              x1="12"
              y1="16"
              x2="12"
              y2="12"
            /><line x1="12" y1="8" x2="12.01" y2="8" /></svg
          >
          <p>{feature}</p>
        </li>
        
      {/each}
    </ul>
  </nav>
  <nav class="main">
    {#each content as dir}
      <div class="chapter">{dir.name}</div>
      {#each dir.children as child}
        {#if Object.hasOwn(child, "children")}
          <TocHelper
            name={child.name}
            children={child.children}
            expanded={false}
          />
        {:else}
          <p>{child.name}</p>
        {/if}
      {/each}
    {/each}
  </nav>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono");

  .tocspace {
    width: 18rem;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .featured-item {
    cursor: pointer;
    border-radius: 0.45rem;
  }
  .featured-item:hover {
    color: var(--highlight);
    background-color: rgba(109, 67, 90, 0.25); /* TEMPORARY SOLUTION*/
  }
  .featured-item:hover > .feather{
    stroke: var(--highlight);
    fill: rgba(109, 67, 90, 0); /* TEMPORARY SOLUTION*/
  }

  .chapter {
    font-family: Helvetica, sans-serif;
    font-family: Inter, system-ui, sans-serif;
    color: var(--gray);
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 13px;
    font-weight: 400;
  }

  p {
    cursor: pointer;
    padding: 0.5em;
    margin: 0;
  }

  p:hover {
    color: var(--highlight);
  }
  .feather {
    transform: scale(0.9);
    fill: var(--offwhite);
    stroke: var(--dark);
    stroke-width: 0.1rem;
  }
li {
    display:flex;
    align-items: center;
}
</style>
