import { useHistory } from 'react-router-dom';

function FeelingForm() {
    const history = useHistory();

    const handleNextClick = () => {
        history.push('/understanding');
    };


    return (
        <>
            <h2 className="question"></h2>
            <label>How are you feeling today?</label>
            <input type="number" placeholder="Number 1-5" />
            <input type="button" value="Next" onClick={handleNextClick} />
        </>
    )
}

export default FeelingForm;