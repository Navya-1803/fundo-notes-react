import { useState } from "react";
import CreateNote from "./CreateNote";

function MainContent({ selectedView }) {
    const [notes, setNotes] = useState([]);
    const [archivedNotes, setArchivedNotes] = useState([]);

    const [editingNoteId, setEditingNoteId] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedDescription, setEditedDescription] = useState("");

    function handleAddNote(newNote) {
        setNotes([...notes, newNote]);
    }

    function handleArchiveNote(noteId) {
        const noteToArchive = notes.find((note) => note.id === noteId);

        setArchivedNotes([...archivedNotes, noteToArchive]);
        setNotes(notes.filter((note) => note.id !== noteId));
    }

    function handleRestoreNote(noteId) {
        const noteToRestore = archivedNotes.find(
            (note) => note.id === noteId
        );

        setNotes([...notes, noteToRestore]);
        setArchivedNotes(
            archivedNotes.filter((note) => note.id !== noteId)
        );
    }

    function handleDeleteNote(noteId, location) {
        if (location === "notes") {
            setNotes(notes.filter((note) => note.id !== noteId));
        } else {
            setArchivedNotes(
                archivedNotes.filter((note) => note.id !== noteId)
            );
        }
    }

    function handleEditNote(note) {
        setEditingNoteId(note.id);
        setEditedTitle(note.title);
        setEditedDescription(note.description);
    }

    function handleSaveNote(noteId, location) {
        const updateNote = (note) =>
            note.id === noteId
                ? {
                    ...note,
                    title: editedTitle,
                    description: editedDescription,
                }
                : note;

        if (location === "notes") {
            setNotes(notes.map(updateNote));
        } else {
            setArchivedNotes(archivedNotes.map(updateNote));
        }

        handleCancelEdit();
    }

    function handleCancelEdit() {
        setEditingNoteId(null);
        setEditedTitle("");
        setEditedDescription("");
    }

    function renderNotes(notesList, location) {
        if (notesList.length === 0) {
            return (
                <p>
                    {location === "notes"
                        ? "Your notes will appear here."
                        : "No archived notes."}
                </p>
            );
        }

        return (
            <section className="notes-list">
                {notesList.map((note) => (
                    <div className="note-card" key={note.id}>
                        {editingNoteId === note.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedTitle}
                                    onChange={(event) =>
                                        setEditedTitle(event.target.value)
                                    }
                                />

                                <textarea
                                    value={editedDescription}
                                    onChange={(event) =>
                                        setEditedDescription(event.target.value)
                                    }
                                />

                                <div className="note-actions">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSaveNote(note.id, location)
                                        }
                                    >
                                        Save
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleCancelEdit}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3>{note.title}</h3>
                                <p>{note.description}</p>

                                <div className="note-actions">
                                    <button
                                        type="button"
                                        onClick={() => handleEditNote(note)}
                                    >
                                        Edit
                                    </button>

                                    {location === "notes" ? (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleArchiveNote(note.id)
                                            }
                                        >
                                            Archive
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRestoreNote(note.id)
                                            }
                                        >
                                            Restore
                                        </button>
                                    )}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDeleteNote(note.id, location)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </section>
        );
    }

    if (selectedView === "notes") {
        return (
            <main>
                <h2>Notes</h2>

                <CreateNote onAddNote={handleAddNote} />

                {renderNotes(notes, "notes")}
            </main>
        );
    }

    if (selectedView === "archive") {
        return (
            <main>
                <h2>Archived Notes</h2>

                {renderNotes(archivedNotes, "archive")}
            </main>
        );
    }

    /*return (
        <main>
            <h2>Trash</h2>
            <p>Trash functionality will be added later.</p>
        </main>
    );*/
}

export default MainContent;