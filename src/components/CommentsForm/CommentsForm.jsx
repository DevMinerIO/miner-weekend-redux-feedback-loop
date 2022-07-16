
function CommentsForm() {

    return (
        <>
            <h2 className="question"></h2>
            <label>Any additional comments about today?</label>
            <input type="text" placeholder="Message Here" />
            <input type="button" value="Next" />
        </>
    )
}

export default CommentsForm;