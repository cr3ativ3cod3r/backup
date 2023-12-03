import Note from './Note';
import AddNote from './AddNote'

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    const datedifference = (selectedDate) => {
        const today = new Date()
        const diff = ~~(selectedDate-today)/(1000*3600*24);
        return(diff)
    };

    const deadlinefeature = (a) => {
        if (a <= 0) {
            return 'red';
        } else {
            return 'blue'
        }
    };

    return(
        <div className="notes-list">
            {notes.map((note)=> (
            <Note 
                id={note.id} 
                text={note.text} 
                date={note.date}
                handleDeleteNote={handleDeleteNote}
                colour = {deadlinefeature(datedifference)} />
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NotesList;