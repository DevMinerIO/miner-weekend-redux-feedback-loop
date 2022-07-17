import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function UnderstandingForm() {
    const [inputUnderstanding, setInputUnderstanding] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNextClick = () => {
        if (!inputUnderstanding) {
            alert('You must input a response before moving on');
        } else if (inputUnderstanding > 5 || inputUnderstanding < 1) {
            alert('You must pick a number between 1 and 5 before moving on');
        } else {
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: inputUnderstanding
            })
            history.push('/support');
        }
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