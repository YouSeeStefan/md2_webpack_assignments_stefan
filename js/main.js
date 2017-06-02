import './les_6';

/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */


/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
 */

 var product1 = "Webshop";
 var product2 = "Blog";
 var product3 = "Chatroom";
 var product4 = "Canvas";
 var product5 = "Calc";

 var number1 = "1";
 var number2 = "2";
 var number3 = "3";
 var number4 = "4";
 var number5 = "5";

 var boolean1 = "true";
 var boolean2 = "false";
 var boolean3 = "true";
 var boolean4 = "false";
 var boolean5 = "true";

/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
 */

 var students = ["Stefan", "Frank", "Mauro"];
 var Landen = ["Nederland", "Italie", "Spanje"];
 var Leeftijd = ["18", "19", "20"];

 console.log(students, Landen, Leeftijd);

/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */

 var fruit = new Array();
 fruit["1"] = "Appel";
 console.log(fruit);

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */

 var namen = ['henk', 'klaas', 'piet', 'kees', 'bert'];
 namen.splice(0, 1);
 namen.splice(1, 1);
 console.log(namen);

/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */

 var vrucht = {soort:"Apple", color:"red", steel:"yes"};
 var consoles = {merk:"Nintendo", soort:"Switch", color:"black"};
 var car = {type:"Fiat", model:"500", color:"white"};
 var dier = {soort:"Kip", geslacht:"vrouw", color:"white"};
 var bloem = {soort:"tulp", color:"red", height:"20cm"};
 var youtuber = {name:"Casey Neistat", subs:"6.630.277", lid:"15 feb. 2010"};
 var pc = {merk:"Asus", color:"black", audio:"ICEpower"};
 var laptop = {merk:"hp", color:"black", audio:"beatsaudio"};
 var facebook = {name:"Facebook", color:"blue", leuk:"yes"};
 var school = {name:"MA", color:"Red/Black", leuk:"yes"};
 console.log(vrucht,consoles,car,dier,bloem,youtuber,pc,laptop,facebook,school);

/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */

 function multiply(p1, p2){
 	return p1 * p2;
 }
 console.log(multiply(4, 3));

  function divide(p1, p2){
 	return p1 / p2;
 }
 console.log(divide(4, 3));

  function substract(p1, p2){
 	return p1 - p2;
 }
 console.log(substract(4, 3));

  function add(p1, p2){
 	return p1 + p2;
 }
 console.log(add(4, 3));

// debugger;
/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */

function person(firstName,lastName) {
    var newPerson = {firstName:firstName, lastName:lastName};

    console.log(newPerson);
    return newPerson;
}

person("Stefan", "Stekelenburg");


/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

/**
 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */

 var students = ['Stefan', 'Mauro', 'Nanko', 'Frank', 'Jelle' , 'Bas' , 'Jay', 'Martijn', 'Kaas'];

 var i = 0;

 for (i = 0; i < students.length; i++) { 
    console.log(students[i]) + "<br>";
}

/**
 * Opdracht 10: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */

var firstnameA = "Stefan ";
var lastnameA = "Stekelenburg";

var fullnameA = firstnameA + lastnameA;
console.log(fullnameA);


/**
 * Opdracht 11: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */

 console.log(Math.floor(Math.random() * 6));
 console.log(Math.floor(Math.random() * 10) + 1);
 console.log(Math.floor(Math.random() * 10) + 30);
 console.log(Math.floor(Math.random() * 200) + -100);


/**
 * Opdracht 12: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
  
console.log('De naam van een gebruiker sla ik op in een:',
            { array : true, object : false, primitive : false });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
            { array : false, object : true, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
            { array : false, object : true, primitive : false });

console.log('Een factuur sla ik op in een:',
            { array : false, object : false, primitive : true });

console.log(
    'Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
    { array : true, object : false, primitive : false });

/**
 * Opdracht 13: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */

 let kaas1 = "1";
 let kaas2 = "2";
 let kaas3 = "3";
 let kaas4 = "4";

 const pizza1 = "1";
 const pizza2 = "2";
 const pizza3 = "3";
 const pizza4 = "4";

/**
 * Opdracht 14: Keywords
 * Geef antwoord op de volgende vragen:
 */

console.log('Wanneer gebruik je de let keyword?', 'Wanneer je de variabelen later wil reasignen');
console.log('Wanneer gebruik je de const keyword', 'Als de identificator niet kan worden toegewezen');

/**
 * Opdracht 15: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen
 * uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */

 var me = { naam: 'Stefan Stekelenburg', leeftijd: '19', lengte: '183', familie: ['Mark', 'Dora']
};

/**
 * Hieronder heb ik code geschreven die je nodig hebt voor vraag 16 en 17
 * Aan deze code hoef je niets te veranderen
 */

Array.prototype.random = function() {
    let randomIndex = Math.floor(Math.random() * this.length);
    return this[ randomIndex ];
};

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};

/**
 * Opdracht 16: Custom prototype method gebruiken
 * Maak een array met meerdere namen
 * Probeer vervolgens de random() functie (die hierboven staat) te gebruiken
 * Tip: je roept deze functie op dezelfde manier aan als bijvoorbeeld push() en
 * splice().
 * console.log() de naam die deze functie returned
 */

	var namen = ["Stefan","Frank", "Mauro", "Nanko"];
	console.log(namen.random);
	
/**
 * Opdracht 17: Custom prototype method gebruiken
 * Maak een variabele waarin je een lange tekst opslaat
 * Probeer vervolgens de replaceAll() functie te gebruiken om een bepaald woord
 * op alle plekken te vervangen voor een ander woord
 * console.log() deze gewijzigde tekst
 */

var langetext = ("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ea, dignissimos quaerat et tempora culpa dolorem eaque quis reprehenderit praesentium!")
console.log(langetext.replaceAll("Lorem", "Kaas"));

/**
 * Opdracht 18: Prototype based language
 * Geef antwoord op onderstaande vraag
 */
console.log('Waarom heet JavaScript een prototype based language?',
            'jouw antwoord');


/**
 * Opdracht 19: Zelf een custom prototype method maken
 * Soms wil je een array leeg kunnen gooien. Het zou dus wel handig zijn als
 * je bij elke array een empty() functie kunt aanroepen.
 * Zorg ervoor dat deze functie er is en laat met 3 arrays zien dat hij werkt
 */

 var kleuren = ['bruin', 'zwart', 'geel',  'wit'];

Array.prototype.empty = function() {
 

 }

  kleuren.splice(0,kleuren.length);

/**
 * Opdracht 20: Monkey patching (?)
 * Je begint nu in te zien hoe JS werkt. Probeer nu de splice() en push()
 * functies van Arrays te overschrijven met een eigen functie.
 * Maak 2 arrays aan en laat zien dat je code werkt
 */