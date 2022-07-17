import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function CommentsForm() {
    const [inputComments, setInputComments] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNextClick = () => {
        dispatch({
            type: 'SET_COMMENT',
            payload: { inputComments }
        })
        history.push('/review');
    }

    return (
        <>
            <h2 className="question"></h2>
            <label>Any additional comments about today?</label>
            <input type="text" placeholder="Message Here" onChange={(event) => setInputSupport(event.target.value)} />
            <input type="button" value="Next" onClick={handleNextClick} />
        </>
    )
}

export default CommentsForm;