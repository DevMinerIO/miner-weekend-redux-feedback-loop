import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// Same comments as all other component pages. 
function CommentsForm() {
    const [inputComments, setInputComments] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNextClick = () => {
        if (!inputComments) {
            alert('You must input a response before moving on');
        } else {
            dispatch({
                type: 'SET_COMMENT',
                payload: inputComments
            })
            history.push('/review');
        }
    }

    return (
        <>
            <h2 className="question"></h2>
            <label>Any additional comments about today?</label>
            <input type="text" placeholder="Message Here" onChange={(event) => setInputComments(event.target.value)} />
            <input type="button" value="Next" onClick={handleNextClick} />
        </>
    )
}

export default CommentsForm;