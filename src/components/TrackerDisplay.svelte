<script>
  import { trackedMooks, selectedMook, mooks } from "../stores.js";

  const addMook = () => {
    trackedMooks.update((contents) => [...contents, $mooks[$selectedMook]]);
    selectedMook.set(666)
  };

let selectionValidate
  selectedMook.subscribe(value => {
		selectionValidate = value;
	});

  function validation(selected) {
    if (selected === 666) {
      return true;
    } else {
      return false;
    }
  }
</script>

<main>
  <button disabled={validation($selectedMook)} on:click={addMook}>
    Add Mook to Tracker
  </button>

  {#each $trackedMooks as tracked}
    <div>{tracked.name} added to list</div>
  {/each}
</main>
