import { useHistory } from 'react-router-dom';

function UnderstandingForm() {

    const history = useHistory();

    const handleNextClick = () => {
        history.push('/support');
    }

    return (
        <div>
            <h2 className="question"></h2>
            <label>How are you understanding the content?</label>
            <input type="number" placeholder="Number 1-5" />
            <input type="button" value="Next" onClick={handleNextClick} />
        </div >
    )
}

export default UnderstandingForm;