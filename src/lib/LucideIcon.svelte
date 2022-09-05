<script>
  import { Info, Play, ChevronsDown, X, Clipboard, List} from "lucide-svelte";
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
{/if}
