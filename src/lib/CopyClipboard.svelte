<script>
  let toggled =false;
  const text = "pip install -U scribe";

  function handleClick(){
    toggled=true;
    // creating textarea of html
    var input = document.createElement("textarea");
    //adding p tag text to textarea 
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    // removing textarea after copy
    input.remove();
    setTimeout(() => toggled=false, 1300);
  };

</script>

<div class="text-button">
  <p class="copy-text">{text}</p>
  <div class="clicker-target" class:active="{toggled}" on:click="{handleClick}">
    <button>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-clipboard"
        ><path
          d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
        /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg
      >
    </button>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono");

  .text-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--dark);
    padding: 0.1rem;
    padding-left:0.5rem;
    padding-right:0.5rem;
    border-radius: 0.5rem;
  }

  .copy-text {
    margin-right: 0.3rem;
    font-family: "JetBrains Mono", monospace;
    color: var(--offwhite);
    font-weight: 100;
  }

  button {
    margin-left: 0.3rem;
    border-radius: 100%;
    width: 3rem;
    height: 3rem;
    border: 2px solid transparent;
    font-size: 1em;
    font-family: inherit;
    background-color: var(--offdark);
    cursor: pointer;
    transition: border-color 0.25s ease;
  }

  button:hover {
    border-color: var(--highlight);
  }

  button:hover > .feather {
    border-color: var(--highlight);
    stroke: var(--highlight);
  }

  .feather {
    fill: var(--offdark);
    stroke: var(--offwhite);
    stroke-width: 2;
    transition: border-color 0.25s ease;
  }


  .clicker-target button::after,
  .clicker-target button::before{
    position: absolute;
    top: 0rem;
    background: var(--highlight);
    padding: 0.3rem;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    background: var(--highlight);
    color: var(--offwhite);
  }
  .clicker-target button::before {
    content: "copied";
    right: 0.2rem;
    border-radius: 0.2rem;
    font-weight: 100;
  }

  .clicker-target button::after {
    content: "";
    right: 1.5rem;
    transform: rotate(45deg);
  }

  .clicker-target.active button::after {
    top: -1.2rem;
    opacity: 1;
  }
  .clicker-target.active button::before{
    top: -2.5rem;
    opacity: 1;
  }
</style>
