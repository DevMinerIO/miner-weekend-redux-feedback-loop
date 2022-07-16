
function FeelingForm() {

    return (
        <>
            <h2 className="question"></h2>
            <label>How are you feeling today?</label>
            <input type="number" placeholder="Number 1-5" />
            <input type="button" value="Next" />
        </>
    )
}

export default FeelingForm;