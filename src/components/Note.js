 
const Note = ({ id, text, date, handleDeleteNote, colour }) => {
    return <div className='note'>
        <div className={colour}/>;
        
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <div onClick={() => handleDeleteNote(id)}className='delete-icon' >&#x2716;</div>
        </div>
    </div>;
};

export default Note;