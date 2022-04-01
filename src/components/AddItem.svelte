<script>
     import { itemsInCart, cartContents } from '../stores.js'

    export let item;

    const addItem = () => {
  cartContents.update(contents => [...contents, item]);
}

  </script>
  <button on:click={addItem}>
    Add Items
  </button>