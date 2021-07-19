var app6 = new Vue({
    el: '#app-6',
    data: function () {
        return {
            search: '',
            selectedItem: '',
            reforged: false,
            shops: [
                {
                    title: 'Weapons Merchant',
                    items: [
                        {
                            name: 'Rocket Cannon',
                            img: 'HumanArtilleryUpOne',
                            lvl: 1,
                            doubled: '',

                        },{
                            name: 'Arrow Cannon',
                            img: 'SteelRanged',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Basic Cannon',
                            img: 'DwarvenLongRifle',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Flame Cannon',
                            img: 'FireForTheCannon',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Cruiser Cannon',
                            img: 'GoblinBlaster',
                            lvl: 1,
                            doubled: '',
                            isJpg: true,
                        },{
                            name: 'Multi-Rocket Cannon',
                            img: 'ClusterRockets',
                            lvl: 1,
                            doubled: '',
                            isJpg: true,
                        },{
                            name: 'Bowmen Crew',
                            img: 'ImprovedBows',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Cold-Arrows Cannon',
                            img: 'ColdArrows',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Machinegun Cannon',
                            img: 'FlakCannons',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Bombard Cannon',
                            img: 'FragmentationBombs',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Boulder Cannon',
                            img: 'GolemStormBolt',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                            isJpg: true,
                        }
                    ]
                },
                {
                    title: 'Weapon Inventory',
                    items: [
                        {
                            name: 'Yellow Laser',
                            img: 'YellowLightning',
                            lvl: 1,
                            doubled: '',
                            isJpg: true,
                        },{
                            name: 'Green Laser',
                            img: 'Green_Laser',
                            lvl: 1,
                            doubled: '',
                            isJpg: true,

                        },{
                            name: 'Blue Laser',
                            img: 'Spell_Nature_Lightning',
                            lvl: 1,
                            doubled: '',
                            isJpg: true,
                        },{
                            name: 'Red Laser',
                            img: 'Pyramid',
                            lvl: 1,
                            doubled: '',
                            isJpg: true,

                        },{
                            name: 'Roentgen Radiator',
                            img: 'ReplenishHealth',
                            lvl: 1,
                            doubled: '',

                        },{
                            name: 'Waterthrower',
                            img: 'PlasmaLaserGun',
                            lvl: 1,
                            doubled: '',
                            isJpg: true,

                        },{
                            name: 'Flamethrower',
                            img: 'Fire',
                            lvl: 1,
                            doubled: '',

                        },{
                            name: 'Pirates Torpedo',
                            img: 'SoulGem',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Rocket Pack',
                            img: 'DispelMagic',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Taser',
                            img: 'Lightning',
                            lvl: 1,
                            doubled: '',
                            isJpg: true,

                        },{
                            name: 'Capitalistic Gun',
                            img: 'ChestOfGold',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                            isJpg: true,
                        },
                    ]
                },
                {
                    title: 'Heavy Weapons Merchant',
                    items: [
                        {
                            name: 'Catapult Cannon',
                            img: 'FireRocks',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Fire-Arrow Cannon',
                            img: 'SearingArrows',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Guard Tower Cannon',
                            img: 'ImprovedStrengthOfTheMoon',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Hammer Cannon',
                            img: 'Hammer',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Knuckle Cannon',
                            img: 'FanOfKnives',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Glaive Thrower',
                            img: 'UpgradeMoonGlaive',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Chaos Cannon',
                            img: 'Banish',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Cocktail Cannon',
                            img: 'LiquidFire',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Thor\'s Hammer',
                            img: 'StormHammer',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Laser Cannon',
                            img: 'StasisTrap',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Frag-Fire Cannon',
                            img: 'WallOfFire',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        },
                    ]
                },
                {
                    title: 'Magazin',
                    items: [
                        {
                            name: 'Beer Thrower',
                            img: 'INV_Flask_03',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Guitar Thrower',
                            img: 'Guitar',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Blood Cannon',
                            img: 'Spell_Shadow_BloodBoil',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Alpha Cannon',
                            img: 'BigBadVoodooSpell',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Rum Cannon',
                            img: 'Rum',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Wine Cannon',
                            img: 'INV_Wine_01',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Tomahawk Thrower',
                            img: 'INV_Axe_19',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Pickaxe Thrower',
                            img: 'GatherGold',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Musket Crew',
                            img: 'RiflemanElite1',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Grapeshot Carronade',
                            img: 'Carronade',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Light Rocket',
                            img: 'SharkMissile',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        },
                    ]
                },
                {
                    title: 'Arsenal',
                    items: [
                        {
                            name: 'Wtite$print a Flyer',
                            img: 'TomeBrown',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Hire some Sailors',
                            img: 'Rifleman',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Antifa Squatter',
                            img: 'Antifa',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Newswire',
                            img: 'Newswire',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Kamikaze Owl launchpad',
                            img: 'Scout',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Kamikaze Eagle launchpad',
                            img: 'WarEagle',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Microwave Cannon',
                            img: 'Microwave',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Elektro Magnetic Pulse Cannon(EMP)',
                            img: 'EMP-Bombe',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Gnoll Arrow',
                            img: 'GnollArrow',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Mud-Thrower',
                            img: 'Mudthrower',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Sandstorm',
                            img: 'Sandstorm',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        }
                    ]
                },
                {
                    title: 'Building of Elements',
                    items: [
                        {
                            name: 'Low Range Own Construction Weapon',
                            img: '3M1',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Medium Range Own Construction Weapon',
                            img: 'INV_Weapon_Bow_05',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Long Range Own Construction Weapon',
                            img: 'ScatterRockets',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'CryptFiendUnBurrow',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Half Cooldown',
                            img: 'CryptFiendBurrow',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Double damage',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        },
                    ]
                },
                {
                    title: 'Wind of Change',
                    items: [
                        {
                            name: 'Dialectical Elementarism',
                            img: 'Periapt1',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Dialectical Materialism',
                            img: 'KarlMarx',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Subcomandante Marcos',
                            img: 'Marcos',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'EZLN',
                            img: 'EZLN',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Sniper',
                            img: 'Wisp',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Flaming Bow',
                            img: 'FlamingBow',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Guardian Bow',
                            img: 'BowAndArrow',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Multi-Bow',
                            img: 'TripleShot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Chainsaw',
                            img: 'Chainsaw',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Sandblaster',
                            img: 'Sand',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Dualistic Axe',
                            img: 'ScytheBackstab',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        },
                    ]
                },
                {
                    title: 'Weapon Hut',
                    items: [
                        {
                            name: 'Flaming-Arrow Cannon',
                            img: 'Ability_Hunter_RunningShot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Molotov-Arrow Cannon',
                            img: 'MarkOfFire',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Gubbelgun Cannon',
                            img: 'Cripple',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Chaos Hammer',
                            img: 'VenomCannon',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Minigun',
                            img: 'Sentrygun',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Gattling',
                            img: 'Gatling',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Glaiveboulder',
                            img: 'Star',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Ice Thrower',
                            img: 'IceDagger',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Frag-Laser',
                            img: 'PowerAttack',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Soul Stealer',
                            img: 'SkeletalOrc',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Cannoneer Crew',
                            img: 'GunFire1',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        },
                    ]
                },
                {
                    title: 'Hut of the Craftsman',
                    items: [
                        {
                            name: 'Anarchistic Crew',
                            img: 'Anarcho',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Found the Sailors Union',
                            img: 'Arthas',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Anarco-Syndicalistic Crew',
                            img: '_CNT_FAI',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Communistic Crew',
                            img: 'GhostMage',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Spirit of the Revolution',
                            img: 'RedFlag',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Guevars Guerillero Gun',
                            img: 'Che',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Feuerbachs Ballista',
                            img: 'GlaiveThrower',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Gnollish Wind',
                            img: 'DragonHawk',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Gnoll Roentgen',
                            img: 'SacrificialSkull',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Chaos Gnoll',
                            img: 'RodOfNecromancy',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'UMTS Weaver Cannon',
                            img: 'ArcaneBlast',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        },
                    ]
                },
                {
                    title: 'Trollcombiner',
                    items: [
                        {
                            name: 'Pirates Cannon',
                            img: 'WitchDoctorAdept',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Lenins Hammers',
                            img: 'INV_Hammer_17',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Admirals Torpedo',
                            img: 'PhotonTorpedo',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Birds of Terror',
                            img: 'Murloc',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Rockbombard',
                            img: 'Meteor3',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Rocket Battery',
                            img: 'DeathMissiles',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Marxsman Crew',
                            img: 'WindsBow',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Crossbowmen',
                            img: 'INV_Weapon_Crossbow_03',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Yellow-Green Laser',
                            img: 'Anomaly',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Red-Blue Laser',
                            img: 'ImprovedFeedBack',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Rainbow Laser',
                            img: 'Rainbow_Laser',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        },
                    ]
                },
                {
                    title: 'Hut of the Pirate',
                    items: [
                        {
                            name: 'Drunken Singing Pirate',
                            img: 'DrunkenPirate',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Pirate with Parrot',
                            img: 'PirateWithParrot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Homing Pidgeon',
                            img: 'HomingPidgeon',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Sheeplauncher',
                            img: 'Sheep',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Buring Owl',
                            img: 'BurningOwl',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Advanced Glaive',
                            img: 'advglaive',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Snowowl',
                            img: 'SnowOwl2',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Cute Gamma Cannon',
                            img: 'GnollArrowCannon',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Fountain Hill Rum Bomb',
                            img: 'Morgan',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Blood Wine Cannon',
                            img: 'Blood_Wine',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'TUX',
                            img: 'TUX',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        },
                    ]
                },
                {
                    title: 'Bob\'s Guns',
                    items: [
                        {
                            name: 'Net',
                            img: 'Ensnare',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Goblin Scope Crew',
                            img: 'Reveal',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Mini Dodo Cannon',
                            img: 'Egg',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Rocket Dodo',
                            img: 'Dodo',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Sneaking Death',
                            img: 'ANA_WaterBubble',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Arcane Explosion',
                            img: 'ArcaneBurst',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Subwave',
                            img: 'ANAOrbOfLightning',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Higgs Torpedo',
                            img: 'DeathCoil',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Penguin key for your ship',
                            img: 'Penguin',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        },
                    ]
                },
                {
                    title: 'Fishing Hut',
                    items: [
                        {
                            name: 'Net',
                            img: 'Ensnare',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Fishing Rod',
                            img: 'Fishing1',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Harpoon',
                            img: 'EnvenomedSpear',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Animal Transmitter',
                            img: 'PASElunesBlessing',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Burning Fish Thrower',
                            img: 'FlameUP',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Fouled Burning Fish Cannon',
                            img: 'MurgulBloodGill',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Fouled Burning Fish Thrower',
                            img: 'Glyph',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Fishing Boat',
                            img: 'FishingShip',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Whale Hunter',
                            img: 'OrcWarlockRed',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        },
                    ]
                },
                {
                    title: 'Equipment Merchant',
                    items: [
                        {
                            name: 'Weak Repair Wood',
                            img: 'HumanLumberUpgrade1',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Normal Repair Wood',
                            img: 'HumanLumberUpgrade2',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Repair Crew',
                            img: 'Repair',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Mechanics Crew',
                            img: 'EngineeringUpgrade',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Light Sail',
                            img: 'LightSail',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Great Sail',
                            img: 'BronzeSail',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Goblin Sail',
                            img: 'GoblinSail',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Smoke Machine',
                            img: 'HealingSpray',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Stone Hull',
                            img: 'StoneArchitecture',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Bronze Hull',
                            img: 'ArcaniteArchitecture',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Gold Hull',
                            img: 'ImbuedMasonry',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        },
                    ]
                },
                {
                    title: 'Equipment Combiner',
                    items: [
                        {
                            name: 'Upgraded Stone Hull',
                            img: 'GolemThunderClap',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Upgraded Bronze Hull',
                            img: 'Invulnerable',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Upgraded Gold Hull',
                            img: 'Transmute',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Upgraded Diamond Hull',
                            img: 'WindWalkOn',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Upgraded Repair Crew',
                            img: 'UnholyArmor',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Upgraded Mechanics Crew',
                            img: 'ImprovedUnholyArmor',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Swedish Repair Kit',
                            img: 'VillagerMan1',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Goblin Repair Tool',
                            img: 'GoblinSapper',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        },
                    ]
                },
                {
                    title: 'Weapontrader',
                    items: [
                        {
                            name: 'Grenade Launcher',
                            img: 's_Firebomb1',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Bombarding Sailors',
                            img: 'DemonicArtifact',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Explosive Barrel Catapult',
                            img: 'OtherBarrel',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'The Dodo Extinction',
                            img: 'bonecrusherGS',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Medium Rocket',
                            img: 'RocketFlare1',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Heavy Rocket',
                            img: 'DrunkenRocket',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Microwave Roentgen',
                            img: 'OrbOfVenom',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Depleted Uranium',
                            img: 'Nuke1',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Basic Shotgun Crew',
                            img: 'Shotgun1',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: 'Superperforator',
                            img: 'Superperforator1',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: 'emptyslot',
                            lvl: 1,
                            doubled: '',
                        },{
                            name: '',
                            img: '12slot',
                            lvl: 1,
                            doubled: '',
                        },
                    ]
                },
                // {
                //     name: 'Equipment Merchant',
                //     items: [
                //         {
                //             name: '',
                //             img: '',
                //             lvl: 1,
                //             doubled: '',
                //         },{
                //             name: '',
                //             img: '',
                //             lvl: 1,
                //             doubled: '',
                //         },{
                //             name: '',
                //             img: '',
                //             lvl: 1,
                //             doubled: '',
                //         },{
                //             name: '',
                //             img: '',
                //             lvl: 1,
                //             doubled: '',
                //         },{
                //             name: '',
                //             img: '',
                //             lvl: 1,
                //             doubled: '',
                //         },{
                //             name: '',
                //             img: '',
                //             lvl: 1,
                //             doubled: '',
                //         },{
                //             name: '',
                //             img: '',
                //             lvl: 1,
                //             doubled: '',
                //         },{
                //             name: '',
                //             img: '',
                //             lvl: 1,
                //             doubled: '',
                //         },{
                //             name: '',
                //             img: '',
                //             lvl: 1,
                //             doubled: '',
                //         },{
                //             name: '',
                //             img: '',
                //             lvl: 1,
                //             doubled: '',
                //         },{
                //             name: '',
                //             img: '',
                //             lvl: 1,
                //             doubled: '',
                //         },{
                //             name: '',
                //             img: '',
                //             lvl: 1,
                //             doubled: '',
                //         },
                //     ]
                // }
            ]
        };
    },
    watch: {
        search: function (value) {
            let list = document.getElementsByTagName('img');
            for (let item of list) {
                item.parentElement.classList.remove('scaled');
                item.parentElement.classList.remove('grayed');
                item.parentElement.classList.remove('yellow-bordered');
            }
            for (let item of list) {
                let alt = item.getAttribute('alt');
                if (!alt || !value) {
                    continue;
                }
                alt = alt.toLowerCase();
                value = value.toLowerCase()
                if (alt.includes(value)) {
                    item.parentElement.classList.add('scaled');
                    if (item.parentElement.classList.contains('green-bordered')) {
                        item.parentElement.classList.remove('green-bordered');
                        item.parentElement.classList.add('rainbow-bordered');
                    }
                    item.parentElement.classList.add('yellow-bordered');
                } else {
                    item.parentElement.classList.add('grayed');
                }
            }
        }
    },
    methods: {
        select: function (event) {
            let selectedImg = event.target;
            selectedImg.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('fat');
            this.selectedItem = selectedImg.alt;
            let selectedImageContainer = selectedImg.parentElement;
            let containerClassList = selectedImageContainer.classList;

            let list = document.getElementsByTagName('img');
            for (let item of list) {
                let bruteForceImageContainer = item.parentElement;
                if (
                    bruteForceImageContainer.classList.contains('green-bordered')
                    && bruteForceImageContainer !== selectedImageContainer
                ) {
                    bruteForceImageContainer.classList.remove('green-bordered');
                } else if (
                    bruteForceImageContainer.classList.contains('rainbow-bordered')
                    && bruteForceImageContainer !== selectedImageContainer
                ) {
                    bruteForceImageContainer.classList.remove('rainbow-bordered');
                    bruteForceImageContainer.classList.add('yellow-bordered');
                }
            }


            if (containerClassList.contains('green-bordered')) {
                event.target.parentElement.classList.remove('green-bordered');
            } else if (containerClassList.contains('yellow-bordered')) {
                event.target.parentElement.classList.remove('yellow-bordered')
                event.target.parentElement.classList.add('rainbow-bordered');
            } else if (containerClassList.contains('rainbow-bordered')) {
                event.target.parentElement.classList.remove('rainbow-bordered')
                event.target.parentElement.classList.add('yellow-bordered')
            } else {
                event.target.parentElement.classList.add('green-bordered');
            }
        }
    },
    created: function () {
        let fromCenter = 3;
        let border = 2;
        let margin = 3;
        let startY = 0;
        let startX = startY;
        let finishY = 0;
        let finishX = 0;
        let width = 72;
        let height = width;
        console.log(`
        from, to {
            clip: rect(${startY}px, ${startX + (width / 2) + margin - fromCenter}px, ${startY + border}px, ${startX}px);
        }
        12.5% {
            clip: rect(${startY}px, ${startX + border}px, ${startX + (height / 2) + margin - fromCenter}px, ${startX}px);
        }
        25% {
            clip: rect(${startY + margin + (height / 2) + fromCenter}px, ${startX + border}px, ${startY + (margin * 2) + height}px, ${startX}px);
        }
        37.5% {
            clip: rect(${startY + margin + height + margin - border}px, ${startX + margin + (width / 2) - fromCenter}px, ${startY + (margin * 2) + height}px, ${startX}px);
        }
        50% {
            clip: rect(${startY + margin + height + (margin - border)}px, ${startX + width + (margin * 2)}px, ${startY + (margin * 2) + height}px, ${startX + margin + (width / 2) + fromCenter}px);
        }
        62.5% {
            clip: rect(${startY + margin + (height / 2) + fromCenter}px, ${startX + (margin * 2) + width}px, ${startY + (margin * 2) + height}px, ${startX + margin + width + margin - border}px);
        }
        75% {
            clip: rect(${startY}px, ${startX + (margin * 2) + width}px, ${startY + margin + (height / 2) - fromCenter}px, ${startX + (2 * margin) + width - border}px);
        }
        87.5% {
            clip: rect(${startY}px, ${startX + (margin * 2) + width}px, ${startY + border}px, ${startX + margin + (width / 2) - fromCenter}px);
        }
        `);
    }
})
