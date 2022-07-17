import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function SupportForm() {

    const [inputSupport, setInputSupport] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNextClick = () => {
        dispatch({
            type: 'SET_SUPPORT',
            payload: { inputSupport }
        })
        history.push('/comments');
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