const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {return "Your notes..."}

const addNote= (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen("New note added!"));
    } else {
        console.log(chalk.bgRed("Note title already exists!"));
    } 
}

const removeNote = (title) =>{
    const notes = loadNotes();
    const keptNotes = notes.filter( (note)=> note.title!== title);
    saveNotes(keptNotes);

    if (notes.length === keptNotes.length) {
        console.log(chalk.bgRed("No note found!"));
    } else {
        console.log(chalk.bgGreen("Note removed!"));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find((note) => note.title === title);
    
    if (!foundNote) {
        console.log(chalk.bgRed("Note not found!"));
    } else {
        console.log(chalk.bgGreen("Note found!"));
        console.log(chalk.yellow(foundNote.title));
        console.log(foundNote.body);
    }
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => console.log(note.title));
}


const saveNotes = (array) => {
    const dataJSON = JSON.stringify(array);
    fs.writeFileSync('notes.json', dataJsON);
}


const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};