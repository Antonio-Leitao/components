<script>
   import Header from "./Header.svelte";

  </script>
  
  <Header>
      <div class="header">Example Header</div></Header
  >
  {#each { length: 100 } as _, i}
    <p>Line {i}</p>
  {/each}
  
  <style>
    .header {
      background-color: var(--offdark);
      height: 56px;
      line-height: 56px;
      color: var(--offwhite);
      padding-left: 16px;
      box-shadow: 0px 2px 8px #00000088;
    }
  </style>
  