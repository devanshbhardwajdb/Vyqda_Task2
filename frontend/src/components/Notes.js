import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState('');

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const res = await axios.get('http://localhost:3001/getnotes');
        setNotes(res.data);
    };

    const addNote = async () => {
        if (note !== '') {
            await axios.post('http://localhost:3001/addnote', { content: note });
            fetchNotes();
            setNote('');
        }
    };

    const deleteNote = async (id) => {
        await axios.delete(`http://localhost:3001/deletenote/${id}`);
        fetchNotes();
    };

    return (
        <div className="notes-container">
            <textarea
                placeholder="Take a note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
            ></textarea>
            <button onClick={addNote}>Add Note</button>
            <div className="notes-grid">
                {notes.map((n) => (
                    <div className="note-card" key={n.id}>
                        <p>{n.content}</p>
                        <span>{new Date(n.timestamp).toLocaleString()}</span>
                        {/* <button onClick={() => deleteNote(n.id)}>Delete</button> */}
                        <MdDelete onClick={() => deleteNote(n.id)} className='delete_btn'/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;
