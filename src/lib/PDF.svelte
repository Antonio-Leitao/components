<script>
  import PdfComponent from "./PDFComponent.svelte";
  import Control from "./UI_componets/Control.svelte";
  import Input from "./UI_componets/Input.svelte";

  let url = "https://arxiv.org/pdf/2007.14900.pdf";
</script>

<div class="control">
  <Control>
    <Input bind:value={url} label={"PDF url"} />
  </Control>
</div>

<div class="wrapper">
  {#key url}
    <PdfComponent {url} />
  {/key}
</div>

<style>
  .wrapper {
    /* This sould stay with this ratio as it is the a4 ratio*/
    width: 210px;
    height: 297px;
  }
  .control {
    position: absolute;
    top: 7rem;
    left: 2rem;
  }
</style>
