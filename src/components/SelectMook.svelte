<script>
import { mooks, selectedMook } from "../stores.js";

import MookDisplay from "./MookDisplay.svelte";

let selected = 0;
let answered;

function handleSelection() {
    $selectedMook=selected;
    answered='yes';
}
  
</script>

<main>
	<select bind:value={selected} on:change="{handleSelection}">
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
  
{#if answered === 'yes'}
<MookDisplay currentMook={$mooks[selected]}/>
{/if}

</main>

<style>

</style>