/ Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//
//   NIKKEI NH3216SMART - HD smart TV
//   €159,-
//   32 inch (81 cm)
//   ```
//
//     * **Opdracht 4a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
// enkel tv-object (zoals `inventory[0]` of `inventory[6]`) verwacht en de naam op de volgende manier
// samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`. Test
// of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.
//
// * **Opdracht 4b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
// parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`. Test of jouw functie ook werkt
// wanneer er een andere tv-prijs wordt meegegeven.
//
// * **Opdracht 4c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in
// zowel _inches_ als _cm_. Doe dit door een functie te schrijven die één screen-sizes array verwacht (
//     zoals `inventory[0].availableSizes`) en de groottes op de volgende manier
// samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
// etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
// schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
//     Test of jouw functie werkt in alle mogelijke gevallen.
//
// * **Opdracht 4d:** Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
//
// * **Opdracht 4e:** Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je
// natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
// Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De
// overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan
// te roepen!

//* **Opdracht 4a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
// enkel tv-object (zoals `inventory[0]` of `inventory[6]`) verwacht en de naam op de volgende manier
// samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`. Test
// of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.
// const oneTv = document.getElementById('kindoftv');
//
// inventory.map((kindTv) => {
//     oneTv.textContent = kindTv.brand + kindTv.type + ' - ' + kindTv.name;
//     return oneTv;
// });

function getTv(tvInventory) {
    const oneTv = document.getElementById('kindoftv');
    oneTv.textContent = tvInventory.brand + tvInventory.type + ' - ' + tvInventory.name;

}
getTv(inventory[0]);

// * **Opdracht 4b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
// parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`. Test of jouw functie ook werkt
// wanneer er een andere tv-prijs wordt meegegeven.
//

function getCost(inventoryPrice) {
    const tvPrice = document.getElementById('pricetv');
    tvPrice.textContent = '€' + inventoryPrice.price + ',- ';
}
getCost(inventory[0]);

// * **Opdracht 4c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in
// zowel _inches_ als _cm_. Doe dit door een functie te schrijven die één screen-sizes array verwacht (
//     zoals `inventory[0].availableSizes`) en de groottes op de volgende manier
// samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
// etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
// schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
//     Test of jouw functie werkt in alle mogelijke gevallen.

// maak een functie genaamd tvSizes
// zorg dat deze functie itereert over alle schermgroottes in de array
// zorg dat de inches van de schermgrootte worden omgerekend naar cm
// zorg er voor dat de functie de schermgrootte teruggeeft
//
const tvSizePerTv = inventory.map((difSize) => {
    return difSize.availableSizes + ' inch ' + ' (' + difSize.availableSizes * 2.54 + ' cm)';
})
console.log(tvSizePerTv);
