//1. Skapa en konstant variabel och sätt värdet till elementet
//   med id't "plantCards" för att kunna fylla HTML-elementet
//   med fler plantor
const plantsWrapper = document.getElementById('plantCards');

//2. Här är en array med alla plant-objekt.
//   Lägg gärna till fler plantor om du vill!
const plants = [
  {
    name: "Monstera",
    latinName: "Monstera deliciosa",
    light: "sunny",
    water: "when dry",
    imageURL: "/assets/monstera.jpg"
  },
  {
    name: "Moses stentavlor",
    latinName: "Maranta leuconeura",
    light: "light shadow",
    water: "regularily",
    imageURL: "./assets/maranta.jpg"
  },
  {
    name: "Coleus",
    latinName: "Solenostemon scutellarioides",
    light: "sunny",
    water: "often",
    imageURL: "./assets/coleus.jpg"
  },
  {
    name: "Ficus",
    latinName: "Ficus lyrata",
    light: "half sunny",
    water: "when dry",
    imageURL: "./assets/ficus.jpg"
  },
  {
    name: "Pilea",
    latinName: "Pilea peperomioides",
    light: "half sunny",
    water: "when dry",
    imageURL: "./assets/pilea.jpg"
  }
]

//Din uppgift är att använda arrayen ovan för att fylla HTML-elementet
//med id't "plantCards" med flera plantor.

//3. Börja med att loopa över arrayen och för varje planta loggar du
//   t.ex. plantans namn i consollen.
for (let plant in plants) {
  let plantCard = document.createElement("div");
  plantCard.classList.add('plant-card');

  let plantTitle = document.createElement('h2');
  plantTitle.classList.add('plant-title');
  plantTitle.textContent = plants[plant].name;

  let latinName = document.createElement('p');
  latinName.classList.add('grey-text');
  latinName.textContent = plants[plant].latinName;

  let image = document.createElement('img');
  image.setAttribute('src', plants[plant].imageURL);
  image.setAttribute('alt', plants[plant].name);
  image.classList.add('plant-image');

  let light = document.createElement('p');
  light.classList.add('info-text');
  light.textContent = '☀️' + plants[plant].light;

  let water = document.createElement('p');
  water.classList.add('info-text');
  water.textContent = '💧' + plants[plant].water;

  plantCard.appendChild(plantTitle);
  plantCard.appendChild(latinName);
  plantCard.appendChild(image);
  plantCard.appendChild(light);
  plantCard.appendChild(water);

  plantsWrapper.appendChild(plantCard);

}

//4. Fick du alla namnen utskrivna i consollen? Härligt! Nu kan vi börja
//   modifiera DOM-en. Använd varaibeln som du skapade i början av denna
//   fil och ändra dess HTML så att varje planta får ett eget kort.

//Hint! För att inte skriva över varje kort med det nya kortet kan du
//skriva += för att lägga till saker till den HTML som redan finns.

//Hint 2! För att få samma styling på dessa kort som på korten som redan
//finns - se efter vilka klassnamn elementen i HTML-filen är tilldelade.

//PS. Ändra gärna stylingen för att göra det mer personligt!