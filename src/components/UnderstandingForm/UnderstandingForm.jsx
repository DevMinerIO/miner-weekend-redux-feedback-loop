import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function UnderstandingForm() {
    const [inputUnderstanding, setInputUnderstanding] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNextClick = () => {

        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: { inputUnderstanding }
        })
        history.push('/support');
    }

    return (
        <div>
            <h2 className="question"></h2>
            <label>How are you understanding the content?</label>
            <input type="number" placeholder="Number 1-5" onChange={(event) => setInputUnderstanding(event.target.value)} />
            <input type="button" value="Next" onClick={handleNextClick} />
        </div >
    )
}

export default UnderstandingForm;