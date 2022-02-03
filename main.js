// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];
// maak een variabele waar je de waarde van van elk naam-object in kan opslaan
// Ga over de gehele array van inventory
// geef alleen de waarde van naam uit elk object terug
// log de waardes van het element naam uit elk object

const tvNames = inventory.map((name) => {
  return name.name;
})
console.log(tvNames);

// filter alle uitverkochte tv's
// zoek in de array alle elementen op met de naam sold en de original stock op
// een tv is uitverkocht als originalStock- sold = 0
// log alleen de waar


const soldOut = inventory.filter((sold) => {
  return sold.originalStock === sold.sold;
})

console.log(soldOut);

//*Opdracht 1c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight
//   beschikken. Log de uitkomst in de console.
// Loop door de array
// elk object willen we weten of een tv ambilight heeft
// log het resultaat in de console

const ambilights = inventory.filter((ambilight) => {
  return ambilight.options.ambiLight = true;
})

console.log(ambilights);
// Opdracht 1d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de
// console.
// loop door de array
// voor iedere iteratie willen we kijken of de eerdere iteratie een hogere  prijs heeft en die zetten we dan voor aan

function sortArray(hightolow) {
  return hightolow.sort((a, b) => {
    if (a.price - b.price > 0) {
      return 1;
    }
    else if (a.price - b.price < 0) {
      return -1;
    }
    else {
      return 0;
    }
  })
}
//function sortArrayshort(tvs) {
//  return tvs.sort((a,b) => a.price - b.price)
//}
//console.log(sortArrayshort(inventory));

console.log(sortArray(inventory));
