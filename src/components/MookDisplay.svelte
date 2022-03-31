<script>
  export let currentMook;
</script>

<!-- 
Figure out how to push this to github
Try to do a script to reorder the skills by level
I need to display the damage dice for the weapons
I need to adjust skills and stats depending on armorBody
Need to make a dropdown menu for all the mooks to display underneath 

Stylize the boxes

-->

<main>
  <div class="mookDetails">
    <div class="wrapper">
      <div class="box a">
        <div class="mookDisplayTitle">{currentMook.name}</div>
        <div class="mainStats">
        <div>HP {currentMook.trackedStats.hitPoints}</div>
        <div>SP HEAD {currentMook.trackedStats.armorHead}</div>
        <div>SP BODY {currentMook.trackedStats.armorBody}</div>
        <p></p>
        <div>DIFFICULTY {currentMook.difficulty}</div>
      </div>

      </div>

      <div class="box b ">
        <div class= mookDisplayTitle>COMBAT SUMMARY</div>
        <div class="summaryBox">
          {#each Object.entries(currentMook.weapons) as [statname, mookWeapon]}
            <li>{mookWeapon}</li>
          {/each}
          <li>Evasion {currentMook.skills.Evasion}</li>
          <li>Brawling {currentMook.skills.Brawling}</li>
          {#if currentMook.skills.Melee}
            <li>Melee : {currentMook.skills.Melee}</li>
          {/if}
          {#if currentMook.skills.Handgun}
          <li>Handgun :  {currentMook.skills.Handgun}</li>
        {/if}
        {#if currentMook.skills.ShoulderArms}
          <li>Shoulder Arms : {currentMook.skills.ShoulderArms}</li>
        {/if}
        {#if currentMook.skills.HeavyWeapons}
          <li>Heavy Weapons : {currentMook.skills.HeavyWeapons}</li>
        {/if}
        {#if currentMook.skills.MartialArts}
          <li>Martial Arts :  {currentMook.skills.MartialArts}</li>
        {/if}
        {#if currentMook.skills.Autofire}
          <li>Autofire :  {currentMook.skills.Autofire}</li>
        {/if}
        </div>
      </div>
      <div class="box c ">
        <div class= mookDisplayTitle>CYBERWEAR</div>
        <div class="cyberwearBox"> Sample Cyberwear</div>
      </div>
      <div class="box d ">
        <div class= mookDisplayTitle>STATS</div>
        <div class="statBox">
          {#each Object.entries(currentMook.stats) as [statname, statvalue]}
            <div>{statname}</div>
            <div>{statvalue}</div>
          {/each}
        </div>
      </div>
      <div class="box e ">
        <div class= mookDisplayTitle> SKILLS </div>
        <div class="skillBox">
          
          {#each Object.entries(currentMook.skills) as [skillname, skillvalue]}
         
            <div>{skillname}</div>
            <div>{skillvalue}</div>
          {/each}
        </div>
      </div>
      <div class="box f ">
        <div class= mookDisplayTitle>GEAR</div>
        <div class="gearBox" />
        <div>{currentMook.gear}</div>
      </div>
    </div>
  </div>
</main>

<style>
  .mookDetails {
    border: 2px solid black;
    min-width: 600px;
    width: 80vw;
  }
  .wrapper {
    display: grid;
    grid-template-columns: minmax(120px, 2fr) minmax(220px, 3fr) minmax(
        200px,
        2fr
      );
    gap: 2px;
    margin: 2px;
  }
  .box {
    background-color: firebrick;
    color: #fff;
    border-radius: 5px;
    padding: 1em;
    
  }

  .statBox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-weight: bold;
    text-transform: uppercase;
    padding-left: 1em;
    padding-top:1em;
    font-size: 1.3em;
    gap: 0 1em;
  }
  .skillBox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0 1em;
  }

  .mainStats {
    font-weight: bold;
    font-size: 1.3em;
    padding-left: 2em;
    padding-top:1em;

  }
  .mookDisplayTitle {
    background-color:rgb(88, 13, 13);
    padding-left: 0.5em;
    font-size: 1.3em;
    font-weight: bold;
    padding-bottom: 5px;
  }
  .skillBox, .gearBox, .cyberwearBox, .summaryBox {
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
</style>
