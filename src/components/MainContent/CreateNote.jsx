import { useState } from "react";

function CreateNote({ onAddNote }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (title.trim() === "" && description.trim() === "") {
            return;
        }

        onAddNote({
            id: Date.now(),
            title: title,
            description: description,
        });

        setTitle("");
        setDescription("");
    }

    return (
        <form className="create-note" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <textarea
                placeholder="Take a note..."
                rows="5"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <button type="submit">Add Note</button>
        </form>
    );
}

export default CreateNote;