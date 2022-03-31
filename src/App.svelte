<script>
  import MookDisplay from "./components/MookDisplay.svelte"
  import { mooks } from "./stores.js";

  let name = "Black Goats";
</script>

<main>
  <h1>Hello {name}!</h1>


    {#each Object.entries($mooks) as [id,contents], i}
    <p>Mook: {i}</p>
  <MookDisplay currentMook={contents}/>
    {/each}


</main>

<style>


</style>
