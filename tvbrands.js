// * **Opdracht 3a:** Gebruik een array-methode om alle tv merken (zoals `Philips`, `NIKKEI`, etc.) in een lijst op de
// pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er
// dubbele namen in zitten, is niet erg.
// * **Opdracht 3b:** Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om
// onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. _Tip_: vergeet deze functie
// -declaratie niet aan te roepen!

// 3a

// maak een variabele aan om de array in op te slaan
// loop over de array om alle tv merken te verzamelen
// creeer een nieuw element op de pagina
// zorg dat de nieuwe array op de pagina wordt gezet

// const brandTvs = document.getElementById('tvbrand');
//
// inventory.map((tvbrand) => {
//     const newList = document.createElement('li');
//     newList.textContent = tvbrand.brand;
//
//     return brandTvs.appendChild(newList);
// })



// * **Opdracht 3b:** Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om
// onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. _Tip_: vergeet deze functie
// -declaratie niet aan te roepen!

// maak een functie aan genaamd getKindOfTv
// Schrijf de logica van 3a in de functie
// roep de functie aan buiten de scope

function getKindOfTV(arrayOfBrands) {
    const brandTvs = document.getElementById('tvbrand');

    const titleOfList = document.createElement('h3')
    titleOfList.textContent = "Dit is een lijst met merken ";
    brandTvs.appendChild(titleOfList);

    arrayOfBrands.map((tvbrand) => {
        const newList = document.createElement('li');
        newList.textContent = tvbrand.brand;

        return brandTvs.appendChild(newList);
    })
}
getKindOfTV(inventory);
