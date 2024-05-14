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