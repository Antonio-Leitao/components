<div class="darkcontainer">
    <div class="circle"/>
  <div class="card frost-white">
    <div class="content">
        <p >CETI Project</p>
        <p class="black">CETI Project</p>
    </div>
  </div>
  <div class="card apple-white">
    <div class="content">
        <p >CETI Project</p>
        <p class="black">CETI Project</p>
    </div>
  </div>
</div>

<style>

  .darkcontainer{
    display: flex;
    background:linear-gradient(to left,var(--dark),var(--offdark));
  }

  .card {
    height: 254px;
    width: 190px;
    border-radius: 12px;
    padding: 1rem;
    margin: 2rem;
  }
  .frost-white {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
  }
  .apple-white {
    background-color: #ffffff7d;
    margin: 2rem;
    box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
    color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(33px);
    background-blend-mode: overlay;
  }

  .content {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    font-family: Inter, sans-serif;
    font-weight: 100;
    letter-spacing: 0.01rem;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  p.black{
    color:rgba(0, 0, 0, 0.8);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
</style>
