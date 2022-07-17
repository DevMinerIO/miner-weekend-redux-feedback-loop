import { useHistory } from 'react-router-dom';

function Success() {
    const history = useHistory();

    const handleNewClick = () => {
        history.push('/');
    }

    return (
        <>
            <h2 className="success">SUCCESS! YOUR FEEDBACK HAS BEEN SUBMITTED</h2>
            <button className="newFeedback" onClick={handleNewClick}>Click here to submit new feedback</button>
        </>
    )
}

export default Success;