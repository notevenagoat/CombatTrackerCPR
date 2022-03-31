<script>
  import MookDisplay from "./components/MookDisplay.svelte"
import SelectMook from "./components/SelectMook.svelte";
  import { mooks } from "./stores.js";

</script>

<main>
  <h1>Cyberpunk Red Combat Tracker</h1>

  <SelectMook />

    <!-- {#each Object.entries($mooks) as [id,contents], i}
  <MookDisplay currentMook={contents}/>
    {/each} -->


</main>

<style>


</style>
