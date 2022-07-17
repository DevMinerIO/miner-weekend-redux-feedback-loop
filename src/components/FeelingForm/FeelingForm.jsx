import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function FeelingForm() {
    const [inputFeeling, setInputFeeling] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    // variable to store the feelings values probably not needed
    // const feeling = useSelector(store => store.feelingsReducer);

    const handleNextClick = () => {
        // if (!inputFeeling) {
        //     document.getElementById
        // }
            dispatch({
                type: 'SET_FEELING',
                payload: { inputFeeling }
            })
            history.push('/understanding');
    }

    return (
        <>
            <h2 className="question"></h2>
            <label>How are you feeling today?</label>
            {/* need to add value of inputFeeling? */}
            <input type="number" placeholder="Number 1-5" onChange={(event) => setInputFeeling(event.target.value)} />
            {/* <p className='number'></p> */}
            <input type="button" value="Next" onClick={handleNextClick} />
        </>
    )
}

export default FeelingForm;