<script>
  import TocHelper from "./Toc_helper.svelte";
  import LucideIcon from "./LucideIcon.svelte";
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
    featured: [
      { name: "Getting Started", icon: "play" },
      { name: "Tutorials", icon: "info" },
      { name: "FAQ", icon: "list" },
    ],
    content: content,
  };
</script>

<div class="tocspace">
  <nav class="featured">
    <ul>
      {#each docs.featured as feature}
        <li class="featured-item">
          <LucideIcon name="{feature.icon}" size=20/>
          <p>{feature.name}</p>
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
    padding-left: 0.4rem;
  }
  .featured-item:hover {
    color: var(--highlight);
    background-color: rgba(109, 67, 90, 0.25); /* TEMPORARY SOLUTION*/
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
  li {
    display: flex;
    align-items: center;
  }
</style>
