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

// BONUS
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
printPersonsBonus1(persons, "content")