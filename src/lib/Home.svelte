<script>
  import { link } from "svelte-spa-router";
  import LucideIcon from "./LucideIcon.svelte";
  const components = [
    {
      name: "Loop",
      description:
        "Creates an infinite loop (wraped) of a finite number of elements.",
      href: "/loop",
      icon: "repeat",
      new: true,
    },
    {
      name: "File Fan",
      description: "Shows files (images/pdfs etc) in a fan-like composition",
      href: "/fan",
      icon: "files",
      new: true,
    },
    {
      name: "PDF Viewer",
      description: "Shows pdf first page from url",
      href: "/pdfviewer",
      icon: "file text",
      new: true,
    },
    {
      name: "Full Stack",
      description: "Interactive, constrained card stack with cover",
      href: "/fullstack",
      icon: "layers",
      new: true,
    },
    {
      name: "Hold Button",
      description: "Button that requires holding for a set period of time",
      href: "/holdbutton",
      icon: "hourglass",
      new: true,
    },
    {
      name: "Scroll Event",
      description: "Scroll animations with svelte",
      href: "/scroll",
      icon: "mouse",
      new: true,
    },
    {
      name: "UI Elements",
      description: "Set of UI elements",
      href: "/control",
      icon: "palette",
      new: false,
    },
    {
      name: "Mosaic",
      description: "An image mosaic",
      href: "/mosaic",
      icon: "layout-grid",
      new: false,
    },
    {
      name: "Desktop",
      description: "A Desktop-like with window management",
      href: "/desktop",
      icon: "copy",
      new: false,
    },
    {
      name: "Glass",
      description: "A set of glassmorphism styles",
      href: "/glass",
      icon: "glasses",
      new: false,
    },
    {
      name: "Layout",
      description: "A scroll dynamic header and footer component",
      href: "/layout",
      icon: "layout",
      new: false,
    },
    {
      name: "Stack",
      description: "A closed stack of elements",
      href: "/stack",
      icon: "layers",
      new: false,
    },
    {
      name: "Open Stack",
      description: "Open stack of elements",
      href: "/openstack",
      icon: "library",
      new: false,
    },
    {
      name: "Flip Card",
      description: "Card with flip animation on click",
      href: "/flipcard",
      icon: "flip-horizontal",
      new: false,
    },
    {
      name: "Card with Modal",
      description: "Content card with modal on click",
      href: "/modalcard",
      icon: "file-up",
      new: false,
    },
    {
      name: "Copy to Clipboard",
      description: "Click to copy text to clipboard",
      href: "/copyclipboard",
      icon: "clipboard",
      new: false,
    },
    {
      name: "Table of Contents",
      description: "Automatic TOC from json file",
      href: "/toc",
      icon: "list",
      new: false,
    },
  ];
</script>

<div class="outer">
  <h1>Components</h1>
  <div class="component_grid">
    {#each components as component}
      <a href={component.href} use:link>
        <div class="card">
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
                <LucideIcon name={component.icon} size="36" />
              </div>
            </div>
          </div>
        </div>
      </a>
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
    justify-content: left;
    width: 100%;
    flex-wrap: wrap;
  }
  .card {
    cursor: pointer;
    margin: 0.5rem;
    background: var(--bg-secondary);
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
    box-shadow: var(--hover-shadow);
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
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 1.8rem;
    width: 88%;
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

  .card:hover .circle {
    transform: scale(1.4);
  }
  a {
    color: inherit;
    font: inherit;
  }
</style>
