<script>
  import { trackedMooks, selectedMook, mooks } from "../stores.js";

  const addMook = () => {
    trackedMooks.update((contents) => [...contents, $mooks[$selectedMook]]);
  };
</script>

<main>
  <button on:click={addMook}> Add Mook to Tracker </button>


  
  {#each $trackedMooks as tracked}
    <div>{tracked.name} added to list</div>
  {/each}
</main>
