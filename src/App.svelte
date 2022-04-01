<script>
  import TrackerDisplay from "./components/TrackerDisplay.svelte";
import SelectMook from "./components/SelectMook.svelte";
  import { mooks } from "./stores.js";

</script>

<main>
  <h1>Cyberpunk Red Combat Tracker</h1>

<div class="selection">
  <SelectMook />
</div>
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
</style>
