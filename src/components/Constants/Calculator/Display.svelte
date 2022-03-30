<script>
    export let total;
    export let totalArr;
    export let buttons;
    </script>
    
    <style>
      .calculator {
        display: grid;
        grid-template-columns: 24% 24% 24% 24%;
        grid-gap: 3px;
        color: #444;
        border: solid 1px black;
        width: 215px;
        padding: 5px;
        background-color: #bbb;
        cursor: pointer;
        user-select: none;
      }
    
      #display {
        grid-column: 1 / span 4;
        height: 60px;
        border: solid 1px black;
        background-color: #ddd;
        border-radius: 2px;
        cursor: initial;
        padding: 0 5px;
        background: linear-gradient(
          135deg,
          #fefefe 0%,
          #d1d1d1 37%,
          #dbdbdb 58%,
          #e2e2e2 100%
        );
      }
    
      #display > div {
        text-align: right;
        box-sizing: border-box;
        height: 50%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        text-align: right;
        overflow: hidden;
        white-space: nowrap;
      }
    
      #display > div > div {
        float: right;
      }
    
      .top {
        font-size: 0.8em;
        line-height: 200%;
      }
    
      .bottom {
        font-size: 1.2em;
        line-height: 100%;
      }
    
      button {
        height: 40px;
        font-weight: 700;
        font-size: 1.2em;
        cursor: pointer;
        border-radius: 8px;
      }
    
      #ac {
        grid-column: 1 / span 2;
      }
    
      #clear {
        grid-column: 3 / span 2;
      }
    
      #add {
        height: initial;
        grid-column: 4;
        grid-row: 4 / span 2;
      }
      #equal {
        height: initial;
        grid-column: 4;
        grid-row: 6 / span 2;
      }
      #zero {
        grid-column: 1 / span 2;
      }
    </style>
    
    <div class="calculator">  
        <div id="display"> 
        {#if (total!=='err')}   
        <div>
          <div class="top">{totalArr.join(' ')}</div>
        </div>
        <div>   
          <div class="bottom">{total}</div>
        </div> 
        {:else}
        <div>{total}</div>
        {/if}
      </div>
      {#each buttons as button}
        <button id={button.id} on:click={button.func}>{button.value}</button>
      {/each}
    </div>