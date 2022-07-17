import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function SupportForm() {

    const [inputSupport, setInputSupport] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNextClick = () => {
        if (!inputSupport) {
            alert('You must input a response before moving on');
        } else if (inputSupport > 5 || inputSupport < 1) {
            alert('You must pick a number between 1 and 5 before moving on');
        } else {
            dispatch({
                type: 'SET_SUPPORT',
                payload: inputSupport
            })
            history.push('/comments');
        }
    }

    return (
        <>
            <h2 className="question"></h2>
            <label>Are you feeling supported today?</label>
            <input type="number" placeholder="Number 1-5" onChange={(event) => setInputSupport(event.target.value)} />
            <input type="button" value="Next"  onClick={handleNextClick}/>
        </>
    )
}
export default SupportForm;