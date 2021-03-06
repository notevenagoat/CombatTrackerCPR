import { add_flush_callback, subscribe } from "svelte/internal";
import { writable, readable } from "svelte/store";

export const trackedMooks = writable([]);
export const selectedMook = writable(0);


export const hardenedMook_text = [
  "Mook is firing incendiary ammunition (CP:R page 346), but only has 10 rounds.",
  "Add 2 additional Mooks to the encounter at the start of the 2nd Round.",
  "2 Mooks are currently experiencing the primary effect of Black Lace (CP:R page 227).",
  "One Mook has an Armor Piercing Grenade (CP:R page 345) and a Athletics Skill Base of 12.",
  "One Mook is wearing Heavy Armorjack (SP13) Body Armor. Increase their REF, DEX, and MOVE by 2 (before calculating the Armor Penalty).",
  "The Mooks are unusually organized. One Mook has a Tactics Skill Base of 13, and a Smoke Grenade (CP:R page 347).",
  "Add an additional Mook of a different type to the encounter.",
  "Add 2 Mooks to the encounter. Give each a Critical Injury to the head.",
  "Add 1 additional Mook to the encounter at the start of Rounds 2, 3, and 4.",
  "1 Mook has an SMG, no sense of self preservation, an Autofire Skill Base of 16, and no head armor.",
];

export const hardenedLieu_text = [
  "Lieutenant and their allies ambush the party (CP:R page 399).",
  "Lieutenant is grappling a human shield (CP:R page 184).",
  "Lieutenant orders their allies to focus on a particular player.",
  "Lieutenant orders their allies to charge wildly at the party.",
  "Lieutenant is in a highly defensible position, making use of cover.",
  "Lieutenant has First Aid and Paramedic Skill Bases of 14 each.",
  "Lieutenant has rigged an Armor-Piercing Grenade (CP:R page 345) as a trap before the combat, somewhere on the field. Noticing it requires a DV15 Perception Skill Check. Disarming it requires a DV9 Demolitions Skill Check. The grenade goes off if any Character moves into the square in which it is hidden.",
  "Lieutenant has done extensive research into the combat capabilities of the party.",
  "Lieutenant has a COOL of 6, a Reputation of 2, and attempts a Facedown. (CP:R page 194) either before combat begins or right at the beginning.",
  "Lieutenant has a Tactics Skill Base of 16 and is in command.",
];

export const hardenedMiniBoss = [
  "Increase one of their Skill Bases that is above 10 to 17.",
  "Increase their HP by 10.",
  "Give them Teamwork 3 (see CP:R page 153), and give them a Team Member of your choice.",
  "Give them Medium Armorjack that???s been Tech upgraded, removing the Armor Penalty.",
  "Give them an additional 600eb of Cyberware.",
  "Give them a Reputation of 5.",
  "Give them an EMP Grenade (see CP:R page 345) and an Athletics Skill Base of 16.",
  "Give them either a dose of Black Lace (see CP:R page 357) or Synthcoke (see CP:R page 358) before combat starts.",
  "Increase their MOVE to 8 or increase their Evasion Skill Base to 18.",
  "Give them Gills (see CP:R page 363) and a round of Exotic Bodysculpting (see CP:R page 226). Shark? Arowana? You decide",
];
export const mooks = readable([
  {
    id: 0,
    name: "Player",
    stats: {
      int: 2,
      ref: 2,
      dex: 2,
      tech: 2,
      cool: 2,
      will: 2,
      move: 2,
      body: 2,
      emp: 2,
    },
    weapons: {
      weapon1: "",
      weapon2: "",
    },
    trackedStats: {
      hitPoints: 30,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "",
    skills: {
     Player: '??'
    },
    difficulty: 0,
  },
  {
    id: 1,
    name: "Bodyguard",
    stats: {
      int: 3,
      ref: 6,
      dex: 5,
      tech: 2,
      cool: 4,
      will: 4,
      move: 4,
      body: 6,
      emp: 3,
    },
    weapons: {
      weapon1: "Poor Quality shotgun",
      weapon2: "Very Heavy Pistol",
    },
    trackedStats: {
      hitPoints: 35,
      armorHead: 7,
      armorBody: 7,
    },
    gear: "Slug Ammo x25, Very Heavy Pistol Ammo x25, Radio Communicator",
    skills: {
      Brawling: 11,
      DriveLand: 10,
      Handgun: 10,
      ShoulderArms: 10,
      Athletics: 9,
      Endurance: 9,
      Perception: 9,
      ResistTD: 8,
      Evasion: 7,
      Stealth: 7,
      Concentration: 6,
      Interrogation: 6,
      Persuasion: 6,
      Conversation: 5,
      Education: 5,
      HumanPerception: 5,
      Language: 5,
      Streetslang: 5,
      LocalExpert: 5,
      FirstAid: 4,
    },
    difficulty: 1,
  },
  {
    id: 2,
    name: "Boosterganger",
    stats: {
      int: 2,
      ref: 6,
      dex: 5,
      tech: 2,
      cool: 4,
      will: 2,
      move: 4,
      body: 4,
      emp: 3,
    },
    weapons: {
      weapon1: "Poor Quality VH Pistol",
      weapon2: "Rippers",
    },
    trackedStats: {
      hitPoints: 35,
      armorHead: 4,
      armorBody: 4,
    },
    gear: "VH Pistol Ammo x30, Disposable Cellphone, Rippers, Techhair",
    skills: {
      Handgun: 12,
      Melee: 11,
      Driveland: 10,
      Athletics: 9,
      Brawling: 9,
      Evasion: 7,
      Stealth: 7,
      Endurance: 6,
      Interrogation: 6,
      Perception: 6,
      Persuasion: 6,
      Conversation: 5,
      HumanPerception: 5,
      ConcealReveal: 4,
      Concentration: 4,
      Education: 4,
      FirstAid: 4,
      LanguageNative: 4,
      Streetslang: 4,
      LocalExpert: 4,
      ResistTD: 4,
    },
    difficulty: 1,
  },
  {
    id: 3,
    name: "Road Ganger",
    stats: {
      int: 4,
      ref: 6,
      dex: 4,
      tech: 4,
      cool: 3,
      will: 3,
      move: 3,
      body: 3,
      emp: 3,
    },
    weapons: {
      weapon1: "Very Heavy Pistol",
      weapon2: "Crossbow",
      weapon3: "Light Melee Weapon",
    },
    trackedStats: {
      hitPoints: 25,
      armorHead: 4,
      armorBody: 4,
    },
    gear: "VH Pistol Ammo x20, Arrow Ammo x20, Rope, Flashlight, Neural Link (Interface Plugs)",
    skills: {
      Archery: 10,
      Athletics: 10,
      Driveland: 10,
      Handgun: 10,
      LandVehicleTech: 10,
      Melee: 8,
      Stealth: 8,
      Tracking: 8,
      WildernessSurvival: 8,
      Brawling: 6,
      Conversation: 6,
      Education: 6,
      Evasion: 6,
      FirstAid: 6,
      LanguageNative: 6,
      Streetslang: 6,
      LocalExpert: 6,
      Perception: 6,
      Concentration: 5,
      Endurance: 5,
      HumanPerception: 5,
      Persuasion: 5,
    },
    difficulty: 1,
  },
  {
    id: 4,
    name: "Security Operative",
    stats: {
      int: 3,
      ref: 7,
      dex: 4,
      tech: 2,
      cool: 2,
      will: 3,
      move: 3,
      body: 5,
      emp: 3,
    },
    weapons: {
      weapon1: "Poor Quality Assault Rifle",
      weapon2: "Very Heavy Pistol",
    },
    trackedStats: {
      hitPoints: 30,
      armorHead: 7,
      armorBody: 7,
    },
    gear: "Rifle x40, VH Pistol Ammo x20, Radio Communicator",
    skills: {
      Autofire: 10,
      Handgun: 10,
      ShoulderArms: 10,
      Athletics: 8,
      Concentration: 7,
      Brawling: 6,
      Evasion: 6,
      Interrogation: 6,
      Melee: 6,
      Stealth: 6,
      Conversation: 5,
      Education: 5,
      HumanPerception: 5,
      LanguageNative: 5,
      Streetslang: 5,
      LocalExpert: 5,
      Perception: 5,
      ResistTD: 5,
      FirstAid: 4,
      Persuasion: 4,
    },
    difficulty: 1,
  },
  {
    id: 5,
    name: "Netrunner",
    stats: {
      int: 7,
      ref: 5,
      dex: 4,
      tech: 7,
      cool: 4,
      will: 5,
      move: 5,
      body: 3,
      emp: 4,
    },
    weapons: {
      weapon1: "Very Heavy Pistol",
    },
    trackedStats: {
      hitPoints: 30,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "VH Pistol Ammo x50, Flashlight, Virtuality Goggles, Neural Link (Interface Plugs)",
    cyberdeck: "Banhammer, DeckKRASH, Eraser, Hellbolt, Shield, Sword, Worm",
    skills: {
      BasicTech: 13,
      Forgery: 13,
      LocalExpert: 13,
      ConcealReveal: 11,
      Cryptography: 11,
      Deduction: 11,
      Education: 11,
      ElectronicsSec: 11,
      Perception: 11,
      PickLock: 11,
      Handgun: 10,
      Athletics: 9,
      Concentration: 9,
      FirstAid: 9,
      LanguageNative: 9,
      Streetslang: 9,
      LibrarySearch: 9,
      Stealth: 8,
      ResistTD: 7,
      Brawling: 6,
      Conversation: 6,
      Evasion: 6,
      HumanPerception: 6,
      Pesuasion: 6,
      Interface: 4,
    },
    difficulty: 2,
  },
  {
    id: 6,
    name: "Reclaimer Chief",
    stats: {
      int: 3,
      ref: 6,
      dex: 6,
      tech: 5,
      cool: 4,
      will: 5,
      move: 4,
      body: 6,
      emp: 4,
    },
    weapons: {
      weapon1: "Shotgun",
      weapon2: "Heavy Pistol",
      weapon3: "Light Melee Weapon",
      weapon4: "Heavy Melee Weapon",
    },
    trackedStats: {
      hitPoints: 40,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Slug Ammo x25, H Pistol Ammo x25, Agent, Grapple Gun, Radio Communicator, Tent Camping Equipment, Nasal Filters, Neural Link (Chipware Socket, Tactile Boost",
    skills: {
      Athletics: 12,
      Endurance: 11,
      DriveLand: 10,
      Handgun: 10,
      Melee: 10,
      ResistTD: 10,
      ShoulderArms: 10,
      Stealth: 10,
      BasicTech: 9,
      ElectronicsSec: 9,
      Weaponstech: 9,
      Brawling: 8,
      Evasion: 8,
      Perception: 8,
      Concentration: 7,
      Deduction: 7,
      FirstAid: 7,
      LandVehicleTech: 7,
      Paramedic: 7,
      PickLock: 7,
      WildernessSurvival: 7,
      Conversation: 6,
      HumanPerception: 6,
      Persuasion: 6,
      Education: 5,
      LanguageNative: 5,
      Streetslang: 5,
      LocalExpert: 5,
    },
    difficulty: 2,
  },
  {
    id: 7,
    name: "Security Officer",
    stats: {
      int: 4,
      ref: 8,
      dex: 6,
      tech: 4,
      cool: 5,
      will: 5,
      move: 6,
      body: 7,
      emp: 4,
    },
    weapons: {
      weapon1: "Assault Rifle",
      weapon2: "Very Heavy Pistol",
      weapon3: "Medium Melee Weapon",
    },
    trackedStats: {
      hitPoints: 40,
      armorHead: 13,
      armorBody: 13,
    },
    gear: "Slug Ammo x25, H Pistol Ammo x25, Agent, Grapple Gun, Radio Communicator, Tent Camping Equipment, Nasal Filters, Neural Link (Chipware Socket, Tactile Boost",
    skills: {
      Autofire: "12(10)",
      Driveland: "12(10)",
      Athletics: "10(8)",
      Handgun: "10(8)",
      Evasion: "10(8)",
      Brawling: "10(8)",
      ShoulderArms: "10(8)",
      Melee: "10(8)",
      Stealth: "8(6)",
      ResistTD: 10,
      Persuasion: 8,
      Concentration: 7,
      Conversation: 6,
      Deduction: 6,
      Education: 6,
      FirstAid: 6,
      Interrogation: 8,
      HumanPerception: 6,
      Perception: 6,
      LanguageNative: 6,
      Streetslang: 6,
      LocalExpert: 6,
      Tactics: 6,
    },
    difficulty: 2,
  },
  {
    id: 8,
    name: "Outrider",
    stats: {
      int: 6,
      ref: 8,
      dex: 8,
      tech: 3,
      cool: 5,
      will: 6,
      move: 6,
      body: 6,
      emp: 6,
    },
    weapons: {
      weapon1: "Assault Rifle",
      weapon2: "Very Heavy Pistol",
      weapon3: "Light Melee Weapon",
    },
    trackedStats: {
      hitPoints: 40,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Rifle Ammo x60, VH Pistol Ammo x40, Handcuffs x2, Homing Tracers, Radio Communicator, Cyberaudio Suite (Amplified Hearing), Cybereye (Targeting Scope, TeleOptics), Neural Link (Interface Plugs)",
    skills: {
      Athletics: 14,
      Brawling: 14,
      Driveland: 14,
      Evasion: 14,
      Handgun: 14,
      Perception: 14,
      ShoulderArms: 14,
      Autofire: 12,
      Melee: 12,
      ResistTD: 12,
      Stealth: 12,
      Concentration: 10,
      Criminology: 10,
      Endurance: 10,
      Tracking: 10,
      Streetwise: 9,
      AnimalHandling: 8,
      Education: 8,
      HumanPerception: 8,
      LanguageNative: 8,
      Streetslang: 8,
      LocalExpert: 8,
      LandVehicleTech: 7,
      Persuasion: 7,
      Conversation: 6,
      BasicTech: 5,
      FirstAid: 5,
    },
    Role: "Moto 4",
    difficulty: 3,
  },
  {
    id: 9,
    name: "Pyro",
    stats: {
      int: 5,
      ref: 8,
      dex: 8,
      tech: 7,
      cool: 4,
      will: 4,
      move: 6,
      body: 5,
      emp: 3,
    },
    weapons: {
      weapon1: "Flamethrower",
      weapon2: "Heavy Pistol",
      weapon3: "Heavy Melee Weapon",
    },
    trackedStats: {
      hitPoints: 35,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Flamethrower Ammo (Incendiary Shotgun Shells) x8, VH Pistol Ammo x50, Incendiary Grenade x1, Flashbang Grenade x1, Cyberaudio Suite (Level Dampners), Cybereye x2 (Anti-Dazzle x2), Nasal Filters",
    skills: {
      Handgun: 14,
      HeavyWeapons: 14,
      ResistTD: 14,
      Demolition: 13,
      Evasion: 13,
      Melee: 13,
      BasicTeh: 12,
      Perception: 12,
      Athletics: 11,
      Brawling: 10,
      Driveland: 10,
      Interrogation: 10,
      ScienceChemistry: 10,
      Stealth: 10,
      FirstAid: 9,
      Concentration: 8,
      Streetwise: 8,
      Tactics: 8,
      Education: 7,
      LanguageNative: 7,
      Streetslang: 7,
      LocalExpert: 7,
      Pesuasion: 6,
      Conversation: 5,
      HumanPerception: 5,
    },
    Role: "Solo 4",
    difficulty: 3,
  },
  {
    id: 10,
    name: "Cyberpsycho",
    stats: {
      int: 5,
      ref: 8,
      dex: 8,
      tech: 5,
      cool: 4,
      will: 7,
      move: 8,
      body: 10,
      emp: 0,
    },
    weapons: {
      weapon1: "Popup Grenade Launcher",
      weapon2: "Popup Heavy SMG",
      weapon3: "Cybersnake",
      weapon4: "Wolvers",
    },
    trackedStats: {
      hitPoints: 55,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Armor Piercing Grenade x2, Heavy Pistol Ammo x100, Cyberarm x2 (Popup Grenade Launcher x2, Popup Heavy SMG, Wolvers), Cyberleg x2 (Jump Boosters x2), Cybersnake, Grafted Muscle & Bone Lace, Neural Link (Chipware Socket, Pain Editor), Subdermal Armor",
    skills: {
      Melee: 17,
      Athletics: 16,
      Brawling: 15,
      ResistTD: 15,
      Autofire: 14,
      HeavyWeapons: 14,
      Evasion: 13,
      Interrogation: 13,
      Handgun: 12,
      BasicTech: 11,
      Driveland: 10,
      Endurance: 10,
      Stealth: 10,
      Tracking: 10,
      Perception: 9,
      Education: 7,
      LanguageNative: 7,
      Streetslang: 7,
      LocalExpert: 7,
      Concentration: 6,
      FirstAid: 6,
      Persuasion: 6,
      Conversation: 2,
      HumanPerception: 2,
    },
    difficulty: 4,
  },
  {
    id: 11,
    name: "Hardened Bodyguard",
    stats: {
      int: 4,
      ref: 6,
      dex: 6,
      tech: 2,
      cool: 4,
      will: 4,
      move: 5,
      body: 7,
      emp: 3,
    },
    weapons: {
      weapon1: "Popup Quality Shotgun",
      weapon2: "Brawling",
    },
    trackedStats: {
      hitPoints: 40,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Slug Ammo x25, Radio Communicator",
    skills: {
      Athletics: 9,
      Brawling: 13,
      Concentration: 6,
      Conversation: 5,
      DriveLand: 10,
      Education: 6,
      Endurance: 9,
      Evasion: 8,
      FirstAid: 4,
      HumanPerception: 5,
      Interrogation: 6,
      Language: 8,
      Streetslang: 6,
      LocalExpert: 6,
      Perception: 10,
      Persuasion: 6,
      ResistTD: 8,
      ShoulderArms: 10,
      Stealth: 8,
    },
    difficulty: 2,
  },
  {
    id: 12,
    name: "Hardened Boosterganger",
    stats: {
      int: 4,
      ref: 6,
      dex: 5,
      tech: 2,
      cool: 4,
      will: 4,
      move: 6,
      body: 4,
      emp: 3,
    },
    weapons: {
      weapon1: "Popup Quality VH Pistol",
      weapon2: "Wolvers",
    },
    trackedStats: {
      hitPoints: 30,
      armorHead: 4,
      armorBody: 4,
    },
    gear: "VH Pistol Ammo x30, Disposable Cellphone, Black Lace x1, Wolvers, Techhair",
    skills: {
      Athletics: 9,
      Brawling: 9,
      ConcealReveal: 6,
      Concentration: 8,
      Conversation: 5,
      DriveLand: 10,
      Education: 6,
      Endurance: 6,
      Evasion: 7,
      FirstAid: 4,
      Handgun: 12,
      HumanPerception: 5,
      Interrogation: 6,
      Language: 8,
      Streetslang: 6,
      LocalExpert: 6,
      Melee: 12,
      Perception: 8,
      Persuasion: 6,
      ResistTD: 8,
      Stealth: 7,
    },
    difficulty: 2,
  },
  {
    id: 13,
    name: "Hardened Road Ganger",
    stats: {
      int: 6,
      ref: 6,
      dex: 6,
      tech: 4,
      cool: 3,
      will: 3,
      move: 5,
      body: 3,
      emp: 3,
    },
    weapons: {
      weapon1: "Poor Quality VH Pistol",
      weapon2: "Poor Quality VH Meelee Weapon",
    },
    trackedStats: {
      hitPoints: 25,
      armorHead: 7,
      armorBody: 7,
    },
    gear: "VH Pistol Ammo x20, Rope, Flashlight, Neural Link (Interface Plugs)",
    skills: {
      Athletics: 8,
      Brawling: 8,
      Concentration: 5,
      Conversation: 6,
      DriveLand: 12,
      Education: 8,
      Endurance: 5,
      Evasion: 11,
      FirstAid: 6,
      Handgun: 10,
      HumanPerception: 5,
      LandVehicleTech: 10,
      Language: 10,
      Streetslang: 8,
      LocalExpert: 8,
      Melee: 12,
      Perception: 10,
      Persuasion: 5,
      Stealth: 8,
      Tracking: 10,
      WildernessSurvival: 8,
    },
    difficulty: 2,
  },
  {
    id: 14,
    name: "Hardened Security Operative",
    stats: {
      int: 5,
      ref: 7,
      dex: 4,
      tech: 2,
      cool: 2,
      will: 3,
      move: 4,
      body: 5,
      emp: 3,
    },
    weapons: {
      weapon1: "Poor Quality Assault Rifle",
      weapon2: "Poor Quality VH Pistol",
    },
    trackedStats: {
      hitPoints: 30,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Rifle Ammo x40, VH Pistol Ammo x20, Radio Communicator",
    skills: {
      Athletics: 8,
      Autofire: 14,
      Brawling: 8,
      Concentration: 7,
      Conversation: 5,
      Education: 7,
      Evasion: 6,
      FirstAid: 4,
      Handgun: 12,
      HumanPerception: 5,
      Interrogation: 6,
      Language: 9,
      Streetslang: 7,
      LocalExpert: 7,
      Melee: 6,
      Perception: 8,
      Persuasion: 4,
      ResistTD: 8,
      ShoulderArms: 12,
      Stealth: 6,
    },
    difficulty: 2,
  },
  {
    id: 15,
    name: "Hardened Netrunner (Anti-Personnel)",
    stats: {
      int: 7,
      ref: 5,
      dex: 4,
      tech: 7,
      cool: 4,
      will: 7,
      move: 5,
      body: 4,
      emp: 4,
    },
    weapons: {
      weapon1: "Very Heavy Pistol",
    },
    trackedStats: {
      hitPoints: 40,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Pistol Ammo x50, Flashlight, Virtuality Goggles, Neural Link, Interface Plugs, Cyberdeck???Programs: Armor x2, Banhammer, DeckKrash, Hellbolt x2, Shield",
    skills: {
      Athletics: 9,
      BasicTech: 13,
      Brawling: 6,
      ConcealReveal: 11,
      Concentration: 11,
      Conversation: 6,
      Cryptography: 11,
      Deduction: 11,
      Education: 12,
      ElectronicsSec: 11,
      Evasion: 10,
      FirstAid: 9,
      Forgery: 13,
      Handgun: 12,
      HumanPerception: 6,
      Language: 11,
      Streetslang: 9,
      LibrarySearch: 13,
      LocalExpert: 13,
      LocalExpert2: 9,
      Perception: 11,
      Persuasion: 6,
      PickLock: 11,
      ResistTD: 9,
      Stealth: 12,
      Tactics: 12,
    },
    difficulty: 3,
  },
  {
    id: 16,
    name: "Hardened Netrunner (Anti-Program)",
    stats: {
      int: 7,
      ref: 5,
      dex: 4,
      tech: 7,
      cool: 4,
      will: 7,
      move: 5,
      body: 4,
      emp: 4,
    },
    weapons: {
      weapon1: "Very Heavy Pistol",
    },
    trackedStats: {
      hitPoints: 40,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Pistol Ammo x50, Flashlight, Virtuality Goggles, Neural Link, Interface Plugs, Cyberdeck???Programs: Armor, Killer, Speedy Gonzalvez x2, Sword x2",
    skills: {
      Athletics: 9,
      BasicTech: 13,
      Brawling: 6,
      ConcealReveal: 11,
      Concentration: 11,
      Conversation: 6,
      Cryptography: 11,
      Deduction: 11,
      Education: 12,
      ElectronicsSec: 11,
      Evasion: 10,
      FirstAid: 9,
      Forgery: 13,
      Handgun: 12,
      HumanPerception: 6,
      Language: 11,
      Streetslang: 9,
      LibrarySearch: 13,
      LocalExpert: 13,
      LocalExpert2: 9,
      Perception: 11,
      Persuasion: 6,
      PickLock: 11,
      ResistTD: 9,
      Stealth: 12,
      Tactics: 12,
    },
    difficulty: 3,
  },
  {
    id: 17,
    name: "Hardened Reclaimer Chief (Lightning)",
    stats: {
      int: 3,
      ref: 8,
      dex: 6,
      tech: 5,
      cool: 4,
      will: 5,
      move: 6,
      body: 6,
      emp: 4,
    },
    weapons: {
      weapon1: "Heavy Melee Weapon",
      weapon2: "Shotgun",
    },
    trackedStats: {
      hitPoints: 40,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Slug Ammo x25, Agent, Radio Communicator, Tent and Camping Equipment, NeuralLink, Kerenzikov",
    skills: {
      Athletics: 12,
      BasicTech: 9,
      Brawling: 8,
      ConcealReveal: 5,
      Concentration: 7,
      Conversation: 6,
      Deduction: 7,
      Demolitions: 7,
      DriveLand: 12,
      Education: 5,
      ElectronicSec: 9,
      Endurance: 11,
      Evasion: 12,
      FirstAid: 7,
      HumanPerception: 6,
      LandVehicleTech: 7,
      Language: 7,
      Streetslang: 5,
      LocalExpert: 5,
      Melee: 14,
      Paramedic: 7,
      Perception: 8,
      Persuasion: 6,
      PickLock: 7,
      ResistTD: 10,
      ShoulderArms: 14,
      Stealth: 10,
      Tactics: 10,
      Weaponstech: 9,
      WildernessSurvival: 7,
    },
    difficulty: 3,
  },
  {
    id: 18,
    name: "Hardened Reclaimer Chief (Thunder)",
    stats: {
      int: 3,
      ref: 6,
      dex: 6,
      tech: 5,
      cool: 4,
      will: 5,
      move: 4,
      body: 6,
      emp: 4,
    },
    weapons: {
      weapon1: "Heavy Melee Weapon",
      weapon2: "Very Heavy Pistol",
      weapon3: "Pupup Grenade Launcher",
    },
    trackedStats: {
      hitPoints: 40,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Very Heavy Pistol Ammo x25, Agent, Radio Communicator, Tent and Camping Equipment, Cyberarm, Popup Grenade Launcher (AP Grenade x1, Smoke Grenade x1)",
    skills: {
      Athletics: 12,
      BasicTech: 9,
      Brawling: 8,
      ConcealReveal: 5,
      Concentration: 7,
      Conversation: 6,
      Deduction: 7,
      Demolitions: 12,
      DriveLand: 10,
      Education: 5,
      ElectronicSec: 9,
      Endurance: 11,
      Evasion: 12,
      FirstAid: 7,
      Handgun: 14,
      HeavyWeapons: 12,
      HumanPerception: 6,
      LandVehicleTech: 7,
      Language: 7,
      Streetslang: 5,
      LocalExpert: 5,
      Melee: 14,
      Paramedic: 7,
      Perception: 8,
      Persuasion: 6,
      PickLock: 7,
      ResistTD: 10,
      Stealth: 10,
      Tactics: 10,
      Weaponstech: 9,
      WildernessSurvival: 7,
    },
    difficulty: 3,
  },
  {
    id: 19,
    name: "Hardened Security Officer (Raid)",
    stats: {
      int: 5,
      ref: 8,
      dex: 6,
      tech: 4,
      cool: 6,
      will: 5,
      move: 4,
      body: 7,
      emp: 5,
    },
    weapons: {
      weapon1: "Assault Rifle",
      weapon2: "Underbarrel Shotgun",
    },
    trackedStats: {
      hitPoints: 40,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Rifle Ammo x50, Expansive Slug Ammo x2, Flashbang Grenade x1, Agent,Flashlight, Grapple Gun, Radio Communicator, Cyberleg x2",
    skills: {
      Athletics: 12,
      Autofire: 12,
      Brawling: 12,
      Concentration: 7,
      Conversation: 6,
      Deduction: 7,
      DriveLand: 12,
      Education: 7,
      Evasion: 10,
      FirstAid: 6,
      Handgun: 12,
      HumanPerception: 6,
      Interrogation: 8,
      Language: 9,
      Streetwise: 7,
      LocalExpert: 7,
      Perception: 7,
      Persuasion: 8,
      ResistTD: 10,
      ShoulderArms: 12,
      Stealth: 8,
      Tactics: 12,
    },
    difficulty: 3,
  },
  {
    id: 20,
    name: "Hardened Security Officer (Seige)",
    stats: {
      int: 5,
      ref: 8,
      dex: 6,
      tech: 4,
      cool: 6,
      will: 5,
      move: 4,
      body: 7,
      emp: 4,
    },
    weapons: {
      weapon1: "Heavy SMG",
    },
    trackedStats: {
      hitPoints: 40,
      armorHead: 13,
      armorBody: 13,
    },
    gear: "Rifle Ammo x50, Expansive Slug Ammo x2, Flashbang Grenade x1, Agent,Flashlight, Grapple Gun, Radio Communicator, Cyberleg x2",
    skills: {
      Athletics: "12(10)",
      Autofire: "14(12)",
      Brawling: "12(10)",
      Concentration: 7,
      Conversation: 6,
      Deduction: 7,
      DriveLand: "12(10)",
      Education: 7,
      Evasion: "10(8)",
      FirstAid: 6,
      Handgun: "12(10)",
      HumanPerception: 6,
      Interrogation: 8,
      Language: 9,
      Streetwise: 7,
      LocalExpert: 7,
      Perception: 7,
      Persuasion: 8,
      ResistTD: 10,
      Stealth: "8(6)",
      Tactics: 12,
    },
    difficulty: 3,
  },
  {
    id: 21,
    name: "Hardened Arasaka Assassin (Solo)",
    stats: {
      int: 6,
      ref: 8,
      dex: 8,
      tech: 6,
      cool: 5,
      will: 8,
      move: 8,
      body: 8,
      emp: 5,
    },
    weapons: {
      weapon1: "EQ Heavy Meele Weapon",
      weapon2: "Martial Art Strike",
    },
    trackedStats: {
      hitPoints: 60,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Agent, Radio Communicator, Cybereye w/ MicroVideo,Grafted Muscle and Bone Lace, Implanted Linear Frame ?? (Sigma)",
    skills: {
      Athletics: 10,
      Brawling: 16,
      Concentration: 12,
      Conversation: 10,
      Education: 9,
      ElectronicsSec: 16,
      Evasion: 14,
      FirstAid: 10,
      HumanPerception: 10,
      Language: 11,
      Streetslang: 9,
      LocalExpert: 9,
      MartialArts: "16(Judo)",
      Paramedic: 16,
      Perception: 9,
      PersonalGrooming: 14,
      Persuasion: 9,
      Stealth: 10,
    },
    difficulty: 4,
  },
  {
    id: 22,
    name: "Hardened Executive Protection (Solo)",
    stats: {
      int: 7,
      ref: 8,
      dex: 8,
      tech: 8,
      cool: 7,
      will: 8,
      move: 5,
      body: 12,
      emp: 4,
    },
    weapons: {
      weapon1: "Martial Art Strike",
    },
    trackedStats: {
      hitPoints: 50,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Smoke Grenade x1, Neural Link, Sandevistan, Cybereye x2 w/ Lowlight/Infrared/UV",
    skills: {
      Athletics: 10,
      Brawling: 16,
      Concentration: 10,
      Conversation: 7,
      Education: 8,
      Evasion: 16,
      FirstAid: 8,
      HumanPerception: 7,
      Interrogation: 13,
      Language: 10,
      Streetslang: 8,
      LocalExpert: 8,
      MartialArts: "16(Karate)",
      Melee: 16,
      Perception: 8,
      Persuasion: 7,
      ResistTD: 16,
      Stealth: 16,
      Tactics: 14,
    },
    difficulty: 4,
  },
  {
    id: 23,
    name: "Hardened Militech Veteran (Solo)",
    stats: {
      int: 6,
      ref: 8,
      dex: 8,
      tech: 6,
      cool: 5,
      will: 8,
      move: 7,
      body: 10,
      emp: 4,
    },
    weapons: {
      weapon1: "Assault Rifle / Shotgun Underbarrel",
      weapon1: "Heavy Pistol",
    },
    trackedStats: {
      hitPoints: 55,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Armor Piercing Pistol Ammo x10, Armor Piercing Rifle Ammo x10, Armor Piercing Shotgun Slug x10, Black Lace x4, Radio Communicator, Grafted Muscle and Bone Lace",
    skills: {
      Athletics: 16,
      Brawling: 16,
      Concentration: 10,
      Conversation: 6,
      Education: 8,
      Evasion: 16,
      FirstAid: 8,
      Handgun: 16,
      HumanPerception: 6,
      Interrogation: 13,
      Language: 10,
      Streetslang: 8,
      LocalExpert: 8,
      Paramedic: 10,
      Perception: 8,
      Persuasion: 7,
      ResistTD: 16,
      ShoulderArms: 16,
      Stealth: 10,
      Tactics: 14,
    },
    difficulty: 4,
  },
  {
    id: 24,
    name: "Hardened Outrider (Nomad)",
    stats: {
      int: 6,
      ref: 8,
      dex: 8,
      tech: 5,
      cool: 7,
      will: 8,
      move: 6,
      body: 8,
      emp: 6,
    },
    weapons: {
      weapon1: "EQ Heavy Meele Weapon",
      weapon1: "Assault Rifle w/Drum Magazine",
    },
    trackedStats: {
      hitPoints: 50,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Basic Rifle Ammo x100, Homing Tracers, Radio Communicator, Neural Link, Interface Plugs, Cyberaudio Suite w/ Amplified Hearing, Cybereye w/ Targeting Scope & Teleoptics",
    vehicles:
      "Roadbike w/ Armored Chassis, Bulletproof Glass & NOS???Jet Ski w/ Bulletproof Glass (stored w/ family)",
    skills: {
      AirVehicleTech: 11,
      Athletics: 10,
      Autofire: 16,
      Brawling: 16,
      Concentration: 10,
      Conversation: 8,
      DriveLand: 20,
      Education: 8,
      Evasion: 16,
      FirstAid: 7,
      HumanPerception: 8,
      LandVehicleTech: 11,
      Language: 10,
      Streetslang: 8,
      LocalExpert: 14,
      LocalExpert: 8,
      Melee: 16,
      Perception: 8,
      Persuasion: 9,
      PilotAirVehicle: 14,
      PilotSeaVehicle: 20,
      ResistTD: 16,
      SeaVehicleTech: 11,
      ShoulderArms: 16,
      Stealth: 14,
      WildernessSurvival: 14,
    },
    difficulty: 4,
  },
  {
    id: 25,
    name: "Hardened Pyro (Solo/Tech)",
    stats: {
      int: 8,
      ref: 8,
      dex: 8,
      tech: 8,
      cool: 5,
      will: 8,
      move: 6,
      body: 8,
      emp: 2,
    },
    weapons: {
      weapon1: "EQ Flamethrower",
      weapon2: "PQ Rocket Launcher",
    },
    trackedStats: {
      hitPoints: 50,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Flamethrower Ammo x16, Incendiary Rocket x1 (incendiary ammunition for a Rocket Launcher), Flashbang Grenade x1, Synthcoke x4, Cyberaudio Suite w/ Level Dampners, Cybereye x2 w/ Anti-Dazzle, Artificial Shoulder Mount, Cyberarm x2",
    skills: {
      Athletics: 10,
      Brawling: 16,
      Concentration: 10,
      Conversation: 4,
      Demolitions: 16,
      Education: 12,
      Evasion: 16,
      FirstAid: 10,
      HeavyWeapons: 16,
      HumanPerception: 4,
      Language: 12,
      Streetslang: 10,
      LocalExpert: 10,
      Perception: 10,
      Persuasion: 7,
      ResistTD: 16,
      Science: "16(Chemistry)",
      Stealth: 10,
      Weaponstech: 16,
    },
    difficulty: 4,
  },
  {
    id: 26,
    name: "Hardened Sniper (Solo)",
    stats: {
      int: 7,
      ref: 8,
      dex: 8,
      tech: 4,
      cool: 7,
      will: 8,
      move: 6,
      body: 6,
      emp: 4,
    },
    weapons: {
      weapon1: "EQ Sniper Rifle w/ Sniping Scope",
    },
    trackedStats: {
      hitPoints: 45,
      armorHead: 11,
      armorBody: 11,
    },
    gear: "Armor Piercing Ammo x16, Disposable Cellphone,Cybereye x2 w/ Lowlight/Infrared Vision/UV & Targeting Scope",
    skills: {
      Acting: 15,
      Athletics: 10,
      Brawling: 10,
      Bribery: 15,
      ConcealReveal: 15,
      Concentration: 10,
      Conversation: 6,
      Education: 9,
      Endurance: 16,
      Evasion: 16,
      FirstAid: 6,
      HumanPerception: 6,
      Language: 11,
      Streetslang: 9,
      LocalExpert: 9,
      Perception: 15,
      Persuasion: 9,
      ShoulderArms: 16,
      Stealth: 16,
      WildernessSurvival: 15,
    },
    difficulty: 4,
  },
]);
