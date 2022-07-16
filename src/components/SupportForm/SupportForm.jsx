import { useHistory } from 'react-router-dom';

function SupportForm() {

    const history = useHistory();
    const handleNextClick = () => {
        history.push('/comments');
    }

    return (
        <>
            <h2 className="question"></h2>
            <label>Are you feeling supported today?</label>
            <input type="number" placeholder="Number 1-5" />
            <input type="button" value="Next"  onClick={handleNextClick}/>
        </>
    )
}
export default SupportForm;