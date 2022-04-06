<script>
let isOpen = false
  function open() {
    isOpen = true
  }
  function close() {
    isOpen = false
  }

</script>
{#if isOpen}
<div class="modal">
    <div class="backdrop" on:click={close} />

    <div class="content-wrapper">
  
      <div class="content">
        <slot name="content" />
      </div>
     
    </div>
  </div>
{/if}


<style>
    div.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  div.content-wrapper {
    z-index: 10;
    max-width: 70vw;
    border-radius: 0.3rem;
    background-color: white;
    overflow: hidden;
  }
  div.content {
    max-height: 50vh;
    overflow: auto;
  }
</style>
