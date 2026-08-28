import { useState } from "react";
import CreateNote from "./CreateNote";

function MainContent() {
    const [notes, setNotes] = useState([]);

    function handleAddNote(newNote) {
        setNotes([...notes, newNote]);
    }

    return (
        <main>
            <h2>Notes</h2>

            <CreateNote onAddNote={handleAddNote} />

            {notes.length === 0 ? (
                <p>Your notes will appear here.</p>
            ) : (
                <section className="notes-list">
                    {notes.map((note) => (
                        <div className="note-card" key={note.id}>
                            <h3>{note.title}</h3>
                            <p>{note.description}</p>
                        </div>
                    ))}
                </section>
            )}
        </main>
    );
}

export default MainContent;