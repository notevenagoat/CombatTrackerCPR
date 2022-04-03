<script>
  import { trackedMooks, selectedMook, mooks } from "../stores.js";

  // Sample data
    trackedMooks.update((contents) => [...contents, $mooks[5]]);
    trackedMooks.update((contents) => [...contents, $mooks[24]]);
// end of sample 

  const addMook = () => {
    trackedMooks.update((contents) => [...contents, $mooks[$selectedMook]]);
    selectedMook.set(666)
  };

// let selectionValidate
//   selectedMook.subscribe(value => {
// 		selectionValidate = value;
// 	});

 </script>

<main>
  <button disabled={$selectedMook  === 666} on:click={addMook}>
    Add Mook to Tracker
  </button>

<div class="trackerGrid">
  <div class="trackingHeader">
    <div> Difficulty </div>
    <div> Name </div>
    <div> INI </div>
    <div> HP </div>
    <div> HeadSP </div>
    <div> BodySP </div>
    <div> Weapons </div>
    <div> Ammo </div>
    <div> Conditions </div>
    <div> Crits </div>
    <div> Notes </div>
   </div>
  {#each $trackedMooks as tracked,id}

  <div class="trackingContainer">
    <div> NPC </div>
    <div> {tracked.name} </div>
    <div> <input type=number bind:value={tracked.initiative} min=0 max=100> </div>
    <div>  <input type=number bind:value={tracked.trackedStats.hitPoints} min=0 max=100> </div>
    <div> <input type=number bind:value={tracked.trackedStats.armorHead} min=0 max=100> </div>
    <div> <input type=number bind:value={tracked.trackedStats.armorBody} min=0 max=100> </div>
    <div> {Object.values(tracked.weapons)}</div>
    <div> Ammo </div>
    <div> <select bind:value={tracked.trackedStats.conditions}> <option> Test </option></select>  </div>
    <div> <select bind:value={tracked.trackedStats.conditions}> <option> Broken Arm </option></select>  </div>
    <div> <textarea bind:value={tracked.notes}></textarea> </div>
  </div>
  
  {/each}
</div>
</main>

<style>

 .trackingContainer, .trackingHeader {
   
   display:grid;
   place-items: stretch;
   grid-template-columns: 5em 8em 4em 4em 4em 4em 10em 4em 10em 10em 10em;
   
   
    
 }

  .trackingHeader{
    
    background-color: brown;
    color: white;
    font-weight: bold;
  }

  .trackingContainer div{
    border: 2px black solid;
  }
  .trackingHeader div{
    border: 2px black solid;
  }
</style>  