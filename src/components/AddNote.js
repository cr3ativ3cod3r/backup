import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    


    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = () =>{
        if(noteText.trim().length > 0 && selectedDate.trim().length >0){
            handleAddNote(noteText, selectedDate);
            setNoteText('');
            setSelectedDate('');
        }
    };
    
    return (
        <div className="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder='Type here'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <input type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
            />
            <div className="note-footer">
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;