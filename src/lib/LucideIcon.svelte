<script>
  import {
    Info,
    Play,
    ChevronsDown,
    X,
    Clipboard,
    List,
    ArrowLeft,
    Copy,
    FileUp,
    FlipHorizontal,
    Library,
    XOctagon,
    Layers,
    Layout,
  } from "lucide-svelte";
  export let name;
</script>

{#if name === "info"}
  <svelte:component this={Info} {...$$props} />
{:else if name === "play"}
  <svelte:component this={Play} {...$$props} />
{:else if name === "chevrons-down"}
  <svelte:component this={ChevronsDown} {...$$props} />
{:else if name === "X"}
  <svelte:component this={ChevronsDown} {...$$props} />
{:else if name === "clipboard"}
  <svelte:component this={Clipboard} {...$$props} />
{:else if name === "list"}
  <svelte:component this={List} {...$$props} />
{:else if name === "arrow-left"}
  <svelte:component this={ArrowLeft} {...$$props} />
{:else if name === "file-up"}
  <svelte:component this={FileUp} {...$$props} />
{:else if name === "copy"}
  <svelte:component this={Copy} {...$$props} />
{:else if name === "flip-horizontal"}
  <svelte:component this={FlipHorizontal} {...$$props} />
{:else if name === "library"}
  <svelte:component this={Library} {...$$props} />
{:else if name === "layers"}
  <svelte:component this={Layers} {...$$props} />
{:else if name === "layout"}
  <svelte:component this={Layout} {...$$props} />
{:else}
  <svelte:component this={XOctagon} {...$$props} />
{/if}
