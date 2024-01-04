const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })


  const duplicateNotes = notes.find(function (note) {
    return note.title === title
})
    if (duplicateNotes === undefined) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}
const removeNotes = function(title){
      
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note){
        return note.title!==title
    })

    console.log("delete kr rha")
 saveNotes(notesToKeep)
}

const listNotes = function(){
    const notes = loadNotes();

    debugger
    notes.forEach(element => {
         console.log(element.title);
    });
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes:removeNotes,
    listNotes:listNotes
}