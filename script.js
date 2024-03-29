const board = document.getElementById("board");
const startScreen = document.getElementById("start-screen");
const counter = document.getElementById("counter");
var attemptCounterElement = document.getElementById("attempt-counter");
var soundOn = true;
var flipped1;
var flipped2;
var flippedbool;
var matchCounter = 0;
var attemptCount = 0;
var audioDict = {
    "Abra": new Audio('aud/abra.mp3'),
    "Aerodactyl": new Audio('aud/aerodactyl.mp3'),
    "Alakazam": new Audio('aud/alakazam.mp3'),
    "Arbok": new Audio('aud/arbok.mp3'),
    "Arcanine": new Audio('aud/arcanine.mp3'),
    "Articuno": new Audio('aud/articuno.mp3'),
    "Beedrill": new Audio('aud/beedrill.mp3'),
    "Bellsprout": new Audio('aud/bellsprout.mp3'),
    "Blastoise": new Audio('aud/blastoise.mp3'),
    "Bulbasaur": new Audio('aud/bulbasaur.mp3'),
    "Butterfree": new Audio('aud/butterfree.mp3'),
    "Caterpie": new Audio('aud/caterpie.mp3'),
    "Chansey": new Audio('aud/chansey.mp3'),
    "Charizard": new Audio('aud/charizard.mp3'),
    "Charmander": new Audio('aud/charmander.mp3'),
    "Charmeleon": new Audio('aud/charmeleon.mp3'),
    "Clefable": new Audio('aud/clefable.mp3'),
    "Clefairy": new Audio('aud/clefairy.mp3'),
    "Cloyster": new Audio('aud/cloyster.mp3'),
    "Cubone": new Audio('aud/cubone.mp3'),
    "Dewgong": new Audio('aud/dewgong.mp3'),
    "Diglett": new Audio('aud/diglett.mp3'),
    "Ditto": new Audio('aud/ditto.mp3'),
    "Dodrio": new Audio('aud/dodrio.mp3'),
    "Doduo": new Audio('aud/doduo.mp3'),
    "Dragonair": new Audio('aud/dragonair.mp3'),
    "Dragonite": new Audio('aud/dragonite.mp3'),
    "Dratini": new Audio('aud/dratini.mp3'),
    "Drowzee": new Audio('aud/drowzee.mp3'),
    "Dugtrio": new Audio('aud/dugtrio.mp3'),
    "Eevee": new Audio('aud/eevee.mp3'),
    "Ekans": new Audio('aud/ekans.mp3'),
    "Electabuzz": new Audio('aud/electabuzz.mp3'),
    "Electrode": new Audio('aud/electrode.mp3'),
    "Exeggcute": new Audio('aud/exeggcute.mp3'),
    "Exeggutor": new Audio('aud/exeggutor.mp3'),
    "Farfetchd": new Audio('aud/farfetchd.mp3'),
    "Fearow": new Audio('aud/fearow.mp3'),
    "Flareon": new Audio('aud/flareon.mp3'),
    "Gastly": new Audio('aud/gastly.mp3'),
    "Gengar": new Audio('aud/gengar.mp3'),
    "Geodude": new Audio('aud/geodude.mp3'),
    "Gloom": new Audio('aud/gloom.mp3'),
    "Golbat": new Audio('aud/golbat.mp3'),
    "Goldeen": new Audio('aud/goldeen.mp3'),
    "Golduck": new Audio('aud/golduck.mp3'),
    "Golem": new Audio('aud/golem.mp3'),
    "Graveler": new Audio('aud/graveler.mp3'),
    "Grimer": new Audio('aud/grimer.mp3'),
    "Growlithe": new Audio('aud/growlithe.mp3'),
    "Gyarados": new Audio('aud/gyarados.mp3'),
    "Haunter": new Audio('aud/haunter.mp3'),
    "Hitmonchan": new Audio('aud/hitmonchan.mp3'),
    "Hitmonlee": new Audio('aud/hitmonlee.mp3'),
    "Horsea": new Audio('aud/horsea.mp3'),
    "Hypno": new Audio('aud/hypno.mp3'),
    "Ivysaur": new Audio('aud/ivysaur.mp3'),
    "Jigglypuff": new Audio('aud/jigglypuff.mp3'),
    "Jolteon": new Audio('aud/jolteon.mp3'),
    "Jynx": new Audio('aud/jynx.mp3'),
    "Kabuto": new Audio('aud/kabuto.mp3'),
    "Kabutops": new Audio('aud/kabutops.mp3'),
    "Kadabra": new Audio('aud/kadabra.mp3'),
    "Kakuna": new Audio('aud/kakuna.mp3'),
    "Kangaskhan": new Audio('aud/kangaskhan.mp3'),
    "Kingler": new Audio('aud/kingler.mp3'),
    "Koffing": new Audio('aud/koffing.mp3'),
    "Krabby": new Audio('aud/krabby.mp3'),
    "Lapras": new Audio('aud/lapras.mp3'),
    "Lickitung": new Audio('aud/lickitung.mp3'),
    "Machamp": new Audio('aud/machamp.mp3'),
    "Machoke": new Audio('aud/machoke.mp3'),
    "Machop": new Audio('aud/machop.mp3'),
    "Magikarp": new Audio('aud/magikarp.mp3'),
    "Magmar": new Audio('aud/magmar.mp3'),
    "Magnemite": new Audio('aud/magnemite.mp3'),
    "Magneton": new Audio('aud/magneton.mp3'),
    "Mankey": new Audio('aud/mankey.mp3'),
    "Marowak": new Audio('aud/marowak.mp3'),
    "Meowth": new Audio('aud/meowth.mp3'),
    "Metapod": new Audio('aud/metapod.mp3'),
    "Mew": new Audio('aud/mew.mp3'),
    "Mewtwo": new Audio('aud/mewtwo.mp3'),
    "Moltres": new Audio('aud/moltres.mp3'),
    "Mr. Mime": new Audio('aud/mrmime.mp3'),
    "Muk": new Audio('aud/muk.mp3'),
    "Nidoking": new Audio('aud/nidoking.mp3'),
    "Nidoqueen": new Audio('aud/nidoqueen.mp3'),
    "Nidoranf": new Audio('aud/nidoranf.mp3'),
    "Nidoranm": new Audio('aud/nidoranm.mp3'),
    "Nidorina": new Audio('aud/nidorina.mp3'),
    "Nidorino": new Audio('aud/nidorino.mp3'),
    "Ninetales": new Audio('aud/ninetales.mp3'),
    "Oddish": new Audio('aud/oddish.mp3'),
    "Omanyte": new Audio('aud/omanyte.mp3'),
    "Omastar": new Audio('aud/omastar.mp3'),
    "Onix": new Audio('aud/onix.mp3'),
    "Paras": new Audio('aud/paras.mp3'),
    "Parasect": new Audio('aud/parasect.mp3'),
    "Persian": new Audio('aud/persian.mp3'),
    "Pidgeot": new Audio('aud/pidgeot.mp3'),
    "Pidgeotto": new Audio('aud/pidgeotto.mp3'),
    "Pidgey": new Audio('aud/pidgey.mp3'),
    "Pikachu": new Audio('aud/pikachu.mp3'),
    "Pinsir": new Audio('aud/pinsir.mp3'),
    "Poliwag": new Audio('aud/poliwag.mp3'),
    "Poliwhirl": new Audio('aud/poliwhirl.mp3'),
    "Poliwrath": new Audio('aud/poliwrath.mp3'),
    "Ponyta": new Audio('aud/ponyta.mp3'),
    "Porygon": new Audio('aud/porygon.mp3'),
    "Primeape": new Audio('aud/primeape.mp3'),
    "Psyduck": new Audio('aud/psyduck.mp3'),
    "Raichu": new Audio('aud/raichu.mp3'),
    "Rapidash": new Audio('aud/rapidash.mp3'),
    "Raticate": new Audio('aud/raticate.mp3'),
    "Rattata": new Audio('aud/rattata.mp3'),
    "Rhydon": new Audio('aud/rhydon.mp3'),
    "Rhyhorn": new Audio('aud/rhyhorn.mp3'),
    "Sandshrew": new Audio('aud/sandshrew.mp3'),
    "Sandslash": new Audio('aud/sandslash.mp3'),
    "Scyther": new Audio('aud/scyther.mp3'),
    "Seadra": new Audio('aud/seadra.mp3'),
    "Seaking": new Audio('aud/seaking.mp3'),
    "Seel": new Audio('aud/seel.mp3'),
    "Shellder": new Audio('aud/shellder.mp3'),
    "Slowbro": new Audio('aud/slowbro.mp3'),
    "Slowpoke": new Audio('aud/slowpoke.mp3'),
    "Snorlax": new Audio('aud/snorlax.mp3'),
    "Spearow": new Audio('aud/spearow.mp3'),
    "Squirtle": new Audio('aud/squirtle.mp3'),
    "Starmie": new Audio('aud/starmie.mp3'),
    "Staryu": new Audio('aud/staryu.mp3'),
    "Tangela": new Audio('aud/tangela.mp3'),
    "Tauros": new Audio('aud/tauros.mp3'),
    "Tentacool": new Audio('aud/tentacool.mp3'),
    "Tentacruel": new Audio('aud/tentacruel.mp3'),
    "Vaporeon": new Audio('aud/vaporeon.mp3'),
    "Venomoth": new Audio('aud/venomoth.mp3'),
    "Venonat": new Audio('aud/venonat.mp3'),
    "Venusaur": new Audio('aud/venusaur.mp3'),
    "Victreebel": new Audio('aud/victreebel.mp3'),
    "Vileplume": new Audio('aud/vileplume.mp3'),
    "Voltorb": new Audio('aud/voltorb.mp3'),
    "Vulpix": new Audio('aud/vulpix.mp3'),
    "Wartortle": new Audio('aud/wartortle.mp3'),
    "Weedle": new Audio('aud/weedle.mp3'),
    "Weepinbell": new Audio('aud/weepinbell.mp3'),
    "Weezing": new Audio('aud/weezing.mp3'),
    "Wigglytuff": new Audio('aud/wigglytuff.mp3'),
    "Zapdos": new Audio('aud/zapdos.mp3'),
    "Zubat": new Audio('aud/zubat.mp3')        
}

board.addEventListener("click", e => {
    let card1 = e.target.parentNode;
    if(card1.className === "flip-card-inner" && card1 !== flipped1 && !card1.classList.contains("flipped")){
        card1.style = " transform: rotateY(180deg)";
        if(flippedbool){
                flippedbool = false;
                let card2 = flipped1;
                flipped1 = "";
                attemptCount++;
                document.getElementById("counter").innerText = "Attempts: " + attemptCount;
                if(card1.parentNode.classList[1] === card2.parentNode.classList[1]) {
                    matchCounter += 1;
                    if (soundOn) {
                        audioDict[card1.parentNode.classList[1]].play();
                    }

                    card1.classList.add("flipped");
                    card2.classList.add("flipped");
                    card1.style = " transform: rotateY(180deg)";
                    card2.style = " transform: rotateY(180deg)";

                }else{
                    setTimeout(()=>{
                        card2.style = " transform: rotateY(0deg)"
                        card1.style = " transform: rotateY(0deg)"
                    }, 1200);
                }
        }else{
            flipped1 = e.target.parentNode;
            flippedbool = true;
        }
    }
});


var cardDict = {
    1: "Abra",
    2: "Aerodactyl",
    3: "Alakazam",
    4: "Arbok",
    5: "Arcanine",
    6: "Articuno",
    7: "Beedrill",
    8: "Bellsprout",
    9: "Blastoise",
    10: "Bulbasaur",
    11: "Butterfree",
    12: "Caterpie",
    13: "Chansey",
    14: "Charizard",
    15: "Charmander",
    16: "Charmeleon",
    17: "Clefable",
    18: "Clefairy",
    19: "Cloyster",
    20: "Cubone",
    21: "Dewgong",
    22: "Diglett",
    23: "Ditto",
    24: "Dodrio",
    25: "Doduo",
    26: "Dragonair",
    27: "Dragonite",
    28: "Dratini",
    29: "Drowzee",
    30: "Dugtrio",
    31: "Eevee",
    32: "Ekans",
    33: "Electabuzz",
    34: "Electrode",
    35: "Exeggcute",
    36: "Exeggutor",
    37: "Farfetchd",
    38: "Fearow",
    39: "Flareon",
    40: "Gastly",
    41: "Gengar",
    42: "Geodude",
    43: "Gloom",
    44: "Golbat",
    45: "Goldeen",
    46: "Golduck",
    47: "Golem",
    48: "Graveler",
    49: "Grimer",
    50: "Growlithe",
    51: "Gyarados",
    52: "Haunter",
    53: "Hitmonchan",
    54: "Hitmonlee",
    55: "Horsea",
    56: "Hypno",
    57: "Ivysaur",
    58: "Jigglypuff",
    59: "Jolteon",
    60: "Jynx",
    61: "Kabuto",
    62: "Kabutops",
    63: "Kadabra",
    64: "Kakuna",
    65: "Kangaskhan",
    66: "Kingler",
    67: "Koffing",
    68: "Krabby",
    69: "Lapras",
    70: "Lickitung",
    71: "Machamp",
    72: "Machoke",
    73: "Machop",
    74: "Magikarp",
    75: "Magmar",
    76: "Magnemite",
    77: "Magneton",
    78: "Mankey",
    79: "Marowak",
    80: "Meowth",
    81: "Metapod",
    82: "Mew",
    83: "Mewtwo",
    84: "Moltres",
    85: "MrMime",
    86: "Muk",
    87: "Nidoking",
    88: "Nidoqueen",
    89: "Nidoranf",
    90: "Nidoranm",
    91: "Nidorina",
    92: "Nidorino",
    93: "Ninetales",
    94: "Oddish",
    95: "Omanyte",
    96: "Omastar",
    97: "Onix",
    98: "Paras",
    99: "Parasect",
    100: "Persian",
    101: "Pidgeot",
    102: "Pidgeotto",
    103: "Pidgey",
    104: "Pikachu",
    105: "Pinsir",
    106: "Poliwag",
    107: "Poliwhirl",
    108: "Poliwrath",
    109: "Ponyta",
    110: "Porygon",
    111: "Primeape",
    112: "Psyduck",
    113: "Raichu",
    114: "Rapidash",
    115: "Raticate",
    116: "Rattata",
    117: "Rhydon",
    118: "Rhyhorn",
    119: "Sandshrew",
    120: "Sandslash",
    121: "Scyther",
    122: "Seadra",
    123: "Seaking",
    124: "Seel",
    125: "Shellder",
    126: "Slowbro",
    127: "Slowpoke",
    128: "Snorlax",
    129: "Spearow",
    130: "Squirtle",
    131: "Starmie",
    132: "Staryu",
    133: "Tangela",
    134: "Tauros",
    135: "Tentacool",
    136: "Tentacruel",
    137: "Vaporeon",
    138: "Venomoth",
    139: "Venonat",
    140: "Venusaur",
    141: "Victreebel",
    142: "Vileplume",
    143: "Voltorb",
    144: "Vulpix",
    145: "Wartortle",
    146: "Weedle",
    147: "Weepinbell",
    148: "Weezing",
    149: "Wigglytuff",
    150: "Zapdos",
    151: "Zubat"
}


function fillboard(){
    flippedbool = false;
    startScreen.style = "Display: none;"
    attemptCounterElement.innerHTML = '<button class="start-button" onclick="fillboard()">New Game</button><span id="counter">Attempts: 0</span> <img src="images/speaker.svg" id="audio-icon" height="40px" width="40px">';
    board.innerHTML = "";
    attemptCount = 0;

    for(let i = 0; i < 12; i++){
        let random = Math.floor(Math.random() * 151 + 1);
        let random1 = Math.floor(Math.random() * 20 + 1);
        let random2 = Math.floor(Math.random() * 20 + 1);
        board.innerHTML += '<div class="flip-card ' + cardDict[random] + '" style="order: ' + random1 +'"> <div class="flip-card-inner"> <div class="flip-card-front"> </div> <div class="flip-card-back"> <img src="images/' + cardDict[random] + '.png" width="150px" height="150px"> </div> </div></div>'
        board.innerHTML += '<div class="flip-card ' + cardDict[random] + '" style="order: ' + random2 +'"> <div class="flip-card-inner"> <div class="flip-card-front"> </div> <div class="flip-card-back"> <img src="images/' + cardDict[random] + '.png" width="150px" height="150px"> </div> </div></div>'
    }

    var audioIcon = document.getElementById("audio-icon");
    audioIcon.addEventListener("click", e => {
        soundOn = !soundOn;
        audioIcon.src = soundOn ? "images/speaker.svg" : "images/mute.svg";
    })

}