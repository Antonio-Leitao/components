<script>
    let flipped = false;
    </script>
    
      <main class:flipped on:click="{() => flipped = !flipped}">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="letter">A</div>
            </div>
            <div class="flip-card-back">
                <div class="letter">B</div>
            </div>
          </div>
        </div>
      </main>
    
    <style>
      /* Flip card toggle */
      .flip-card {
        background-color: transparent;
        width: 190px;
        height: 228px;
        perspective: 1000px;
        cursor: pointer;
        user-select: none;
      }
    
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s ease-in-out;
        transform-style: preserve-3d;
        box-shadow: 0.3em 0.3em 0.7em #00000015;
      }
    
      .flipped .flip-card .flip-card-inner {
        transform: rotateY(180deg);
      }
    
      .flip-card-front,
      .flip-card-back {
        display:grid;
        place-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 0.4rem;
      }
    
      .flip-card-front {
        background-color: var(--offdark);
        color: var(--white);
      }
    
      .flip-card-back {
        background-color: var(--white);
        transform: rotateY(180deg);
        color: var(--highlight);
      }

      .letter{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 5rem;
      }
    </style>