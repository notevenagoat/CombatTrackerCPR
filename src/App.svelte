<script>
  import TrackerDisplay from "./components/TrackerDisplay.svelte";
  import SelectMook from "./components/SelectMook.svelte";
  import MookDisplay from "./components/MookDisplay.svelte";
import { mooks, selectedMook } from "./stores.js";

let selectionValidate
  selectedMook.subscribe(value => {
		selectionValidate = value;
	});
</script>

<main>
  <h1>Cyberpunk Red Combat Tracker</h1>

<div class="selection">
  <SelectMook />
</div>
{#if $selectedMook  != 666}
<MookDisplay currentMook={$mooks[selectionValidate]}/>
{/if}
<div class="tracker">
  <TrackerDisplay />
</div>


</main>

<style>


.selection {
     min-width: 600px;
    width: 90%;
  }
  .tracker {
    display: inline;
  }

  @media (max-width: 550px) {
	main { font-size: 1em; }
  }
  
  @media (min-width: 551px) {
	main { font-size: 1.25rem; }
  }
</style>
