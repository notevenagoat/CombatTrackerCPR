<script>
import { mooks, selectedMook } from "../stores.js";

let dropdownSelection = 0;

function handleSelection() {
    $selectedMook=dropdownSelection;

}
  
</script>

<main>
	<select bind:value={dropdownSelection} on:click="{handleSelection}">
        <option value=0> Add Player</option>
        
		<optgroup label="Disposable Mooks">
        {#each $mooks as thisMook}
        {#if thisMook.difficulty === 1}	
        <option value={thisMook.id -1}>
				{thisMook.name} 
			</option>
            {/if}
       		{/each}
        </optgroup>
        <optgroup label="Hardened Mooks">
            {#each $mooks as thisMook}
            {#if thisMook.difficulty === 2}	
            <option value={thisMook.id -1}>
                    {thisMook.name} 
                </option>
                {/if}
                   {/each}
            </optgroup>
            <optgroup label="Hardened Lieutenants">
                {#each $mooks as thisMook}
                {#if thisMook.difficulty === 3}	
                <option value={thisMook.id -1}>
                        {thisMook.name} 
                    </option>
                    {/if}
                       {/each}
                </optgroup>
                <optgroup label="Hardened MiniBosses">
                    {#each $mooks as thisMook}
                    {#if thisMook.difficulty === 4}	
                    <option value={thisMook.id -1}>
                            {thisMook.name} 
                        </option>
                        {/if}
                           {/each}
                    </optgroup>
	</select>

</main>

<style>

</style>