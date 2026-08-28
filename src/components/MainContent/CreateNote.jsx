function CreateNote() {
    return (
        <section className="create-note">
            <input
                type="text"
                placeholder={"Title"}
            />

        <textarea
            placeholder="Take a note..."
            rows="5"
        ></textarea>

        <button type="button">
            Add Note
        </button>
        </section>
    );
}

export default CreateNote;