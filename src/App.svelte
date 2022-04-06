<script>
  import TrackerDisplay from "./components/TrackerDisplay.svelte";
  import SelectMook from "./components/SelectMook.svelte";
  import MookDisplay from "./components/MookDisplay.svelte";
  import { mooks, selectedMook } from "./stores.js";
  import Modal from "./components/ModalShow.svelte";

  let selectionValidate;
  selectedMook.subscribe((value) => {
    selectionValidate = value;
  });
</script>

<main>
  <h1>Cyberpunk Red Combat Tracker</h1>

  <div class="selection">
    <SelectMook />
  </div>

  <!-- <Modal>
  <div slot="content">
    <h1>mi mi mi asdasdasdasdas</h1> 
  </div>
</Modal> -->

  <MookDisplay currentMook={$mooks[selectionValidate]} />

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
    main {
      font-size: 1em;
    }
  }

  @media (min-width: 551px) {
    main {
      font-size: 1.25rem;
    }
  }
</style>
