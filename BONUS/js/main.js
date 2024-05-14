"use strict"
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// definisco una funzione che crea il mio oggetto Persona
const Persona = (name, role, image) => {
    return {
        name: name,
        role: role,
        image: image
    }
}

const persons = [
    Persona("Wayne Barnett", "Founder & CEO", "wayne-barnett-founder-ceo.jpg"),
    Persona("Angela Caroll", "Chief Editor", "angela-caroll-chief-editor.jpg"),
    Persona("Walter Gordon", "Office Manager", "walter-gordon-office-manager.jpg"),
    Persona("Angela Lopez", "Social Media Manager", "angela-lopez-social-media-manager.jpg"),
    Persona("Scott Estrada", "Developer", "scott-estrada-developer.jpg"),
    Persona("Barbara Ramos", "Graphic Designer", "barbara-ramos-graphic-designer.jpg")
]

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
function printPersons(persons){
    const lengthOfPersons = persons.length;
    for (let i = 0; i < lengthOfPersons; i++){
        const person = persons[i];
        console.log(`nome: ${person.name}\nruolo: ${person.role}\nnome immagine: ${person.image}`)
    }
}
printPersons(persons);

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
function printPersonsToDOM(persons, parentID){
    const lengthOfPersons = persons.length;
    // seleziono l'elemtno a cui appenderò i miei elementi
    const parent = document.getElementById(parentID)
    // creo un nuovo sottoelemento a cui appendere i miei elementi per ridurre il numero di chiamate al DOM
    const innerParent = document.createElement("div")
    for (let i = 0; i < lengthOfPersons; i++){
        const person = persons[i];
        // per ogni persona creo un paragrafo
        const element = document.createElement('p')
        // inserisco i valori nel paragrafo
        element.innerText = `nome: ${person.name}\nruolo: ${person.role}\nnome immagine: ${person.image}` 
        // appendo il paragrado al mio innerParent
        innerParent.appendChild(element) 
    }
    parent.appendChild(innerParent)
}
// printPersonsToDOM(persons, "content")

// BONUS 1
function printPersonsBonus1(persons, parentID){
    const lengthOfPersons = persons.length;
    // seleziono l'elemtno a cui appenderò i miei elementi
    const parent = document.getElementById(parentID)
    // creo un nuovo sottoelemento a cui appendere i miei elementi per ridurre il numero di chiamate al DOM
    const innerParent = document.createElement("div")
    //definisco una costante che contiene una stringa con il percorso alla cartella delle immagini
    const pathToImgFolder = "./img/"
    for (let i = 0; i < lengthOfPersons; i++){
        const person = persons[i];
        // IMMAGINE
        // creo un elemento img
        const imgElement = document.createElement("img");
        imgElement.src = pathToImgFolder + person.image;
        imgElement.alt = "foto di " + person.name;
        innerParent.appendChild(imgElement)

        // NOME E RUOLO
        // per ogni persona creo un paragrafo
        const element = document.createElement('p');
        // inserisco i valori di nome e ruolo nel paragrafo
        element.innerText = `nome: ${person.name}\nruolo: ${person.role}`;
        // appendo il paragrado al mio innerParent
        innerParent.appendChild(element);

    }
    parent.appendChild(innerParent)
}
// printPersonsBonus1(persons, "content")

// BONUS 2:
// Organizzare i singoli membri in card/schede

function printPersonsBonus2(persons, parentID){
    const lengthOfPersons = persons.length;
    // seleziono l'elemtno a cui appenderò i miei elementi
    const container = document.getElementById(parentID);
    // creo un nuovo sottoelemento a cui appendere i miei elementi per ridurre il numero di chiamate al DOM
    const row = document.createElement("div");
    row.className = "row"; 
    //definisco una costante che contiene una stringa con il percorso alla cartella delle immagini
    const pathToImgFolder = "./img/";
    for (let i = 0; i < lengthOfPersons; i++){
        const person = persons[i];
        // creo una card
        const card = document.createElement("div")
        card.className = "card"

        // IMMAGINE
        // creo un elemento img
        const imgElement = document.createElement("img");
        imgElement.src = pathToImgFolder + person.image;
        imgElement.alt = "foto di " + person.name;
        card.appendChild(imgElement)

        // NOME 
        // creo un elemento h3
        const nameElement = document.createElement('h3');
        // inserisco i valore del nome
        nameElement.innerText = person.name;
        // appendo l'h3 alla mia card
        card.appendChild(nameElement);

        // RUOLO
        // creo un elemento p
        const roleElement = document.createElement("p");
        // inserisco il valore del ruolo
        roleElement.innerText = person.role;
        // appendo il paragrafo alla mia card
        card.appendChild(roleElement)


        //appendo la mia card alla row
        row.appendChild(card)
    }
    // appendo la mia row al container
    container.appendChild(row)
}
printPersonsBonus2(persons, "container")