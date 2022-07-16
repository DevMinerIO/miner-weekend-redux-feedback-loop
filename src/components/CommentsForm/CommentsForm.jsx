import { useHistory } from 'react-router-dom';

function CommentsForm() {
    const history = useHistory();

    const handleNextClick = () => {
        history.push('/review');
    }

    return (
        <>
            <h2 className="question"></h2>
            <label>Any additional comments about today?</label>
            <input type="text" placeholder="Message Here" />
            <input type="button" value="Next" onClick={handleNextClick} />
        </>
    )
}

export default CommentsForm;