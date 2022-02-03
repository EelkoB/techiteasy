// Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// * **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.
// * **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
// console.
// * **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.
// * **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.

// maak een variabele waar de output kunnen opslaan
// Loop over de array
// haal alle waardes van de object sold
// log de uitslag in de console

//const tvsSold = inventory.map((tvSold) =>{
//   return tvSold.sold;
//})

let sumOfTvsSold = 0;

for (let i = 0; i < inventory.length; i++) {
    sumOfTvsSold += inventory[i].sold;
}

console.log(sumOfTvsSold);

// 1. maak een element in je html als container
// haal element naar javascript met get ElementbyId
// maak in javaScript file nieuwe elementen om de waarde in op te slaan
// koppel deze aan de container die we hebben gemaakt en binnengehaald in de file
// geef dit styling

const soldTvs = document.getElementById('soldtvs');
soldTvs.textContent = "Het aantal verkochte tv's is " + sumOfTvsSold;

// **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
// console.
// maak een nieuw element om de waarde in op te slaan
// loop over de array
// tel alle waardes van het object originalStock bij elkaar op
// log de uitslag in de console

let purchasedTvs = 0;

for (let i = 0; i < inventory.length; i++) {
    purchasedTvs = purchasedTvs + inventory[i].originalStock;
}
console.log(purchasedTvs);

// 1. maak een element in je html als container
// haal element naar javascript met get ElementbyId
// maak in javaScript file nieuwe elementen om de waarde in op te slaan
// koppel deze aan de container die we hebben gemaakt en binnengehaald in de file
// geef dit styling

const tvsPurchased = document.getElementById("purchasedtvs");
tvsPurchased.textContent = "Het aantal ingekochte tv's is " + purchasedTvs;

// * **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.
// maak een nieuwe variabele
// zorg in de variabele dat de uitkomst van purchasedtvs - soldtvs komt
// zorg dat deze uitkomst op je pagina komt
// maak de uitkomst rood

const toBeSold = purchasedTvs - sumOfTvsSold;

const needTobeSold = document.getElementById('needtobesold');
needTobeSold.textContent = "Het aantal tv's wat nog verkocht moet worden is " + toBeSold;
