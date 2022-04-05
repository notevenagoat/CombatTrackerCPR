<!-- Adds mooks to the tracked one and displays the tracker
perhaps i can move the add button as a separate component or chuck in in app.svelte? -->

<!-- Need to createan unique idea when adding the mooks to the tracked mooks  -->
<script>
  import { selectedMook, mooks } from "../stores.js";
  import { v4 as uuidv4 } from "uuid";

  let trackedMooks = [];


  const addMook = (object) => {
        let clone=JSON.parse(JSON.stringify(object))
      clone.maxHP = clone.trackedStats.hitPoints;
		trackedMooks = [...trackedMooks, clone];
    // adds the Mook into tracked Mooks
     // assigns maxhp
      
      // $trackedMooks[$trackedMooks.length-1].id = uuidv4();
    selectedMook.set(666);
   };

  //  sample data 
   addMook($mooks[2])
   addMook($mooks[2])
   addMook($mooks[20])

  
  
  const handleHP = (e, idList) => {
  
    if (
      trackedMooks[idList].trackedStats.hitPoints  <
      trackedMooks[idList].maxHP /2
    ) {
      e.target.style.background='#ff6666'
    } else {
      e.target.style.background='#ffffff'
    }
  };
  
</script>

<main>
  <button disabled={$selectedMook === 666} on:click={addMook($mooks[$selectedMook])}>
    Add Mook to Tracker
  </button>

  <button> Start Combat </button>
  <button> Clear All </button>
  <p />
  <button> NEXT TURN </button>
  <div class="trackerGrid">
    <div class="trackingHeader">
      <div>Difficulty</div>
      <div>Name</div>
      <div>INI</div>
      <div>HP</div>
      <div>HeadSP</div>
      <div>BodySP</div>
      <div>Weapons</div>
      <div>Ammo</div>
      <div>Conditions</div>
      <div>Crits</div>
      <div>Notes</div>
    </div>
   
    {#each trackedMooks as tracked, number}
      <div class="trackingContainer">
        <div>list #{number}</div>
        <div>{ trackedMooks[number].name}</div>
        <div>
          <input
            type="number"
            bind:value={ trackedMooks[number].initiative}
            min="0"
            max="100"
          />
        </div>
        <div>
          <input
            type="number"
            on:change={(e) => handleHP(e, number)}
            bind:value={ trackedMooks[number].trackedStats.hitPoints}
            min="0"
            max="100"
          />
        </div>
        <div>
          <input
            type="number"
            bind:value={ trackedMooks[number].trackedStats.armorHead}
            min="0"
            max="20"
          />
        </div>
        <div>
          <input
            type="number"
            bind:value={ trackedMooks[number].trackedStats.armorBody}
            min="0"
            max="20"
          />
        </div>
        <div>{Object.values( trackedMooks[number].weapons)}</div>
        <div>Ammo</div>
        <div>
          <select bind:value={ trackedMooks[number].trackedStats.conditions}>
            <option> Test </option></select
          >
        </div>
        <div>
          <select bind:value={ trackedMooks[number].trackedStats.conditions}>
            <option> Broken Arm </option></select
          >
        </div>
        <div><textarea bind:value={ trackedMooks[number].notes} /></div>
      </div>
    {/each}
  </div>
</main>

<style>
  .trackingContainer,
  .trackingHeader {
    display: grid;
    place-items: stretch;
    grid-template-columns: 5em 8em 4em 4em 4em 4em 10em 4em 10em 10em 10em;
  }

  .trackingHeader {
    background-color: brown;
    color: white;
    font-weight: bold;
  }

  .trackingContainer div {
    border: 2px black solid;
  }
  .trackingHeader div {
    border: 2px black solid;
  }
</style>
