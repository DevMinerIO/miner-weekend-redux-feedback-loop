import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";

function Review() {

    // a selector for each reducer so they can be passed through the post.
    const feelingFeedback = useSelector(store => store.feelingsReducer);
    const understandingFeedback = useSelector(store => store.understandingReducer);
    const supportFeedback = useSelector(store => store.supportReducer);
    const commentFeedback = useSelector(store => store.commentsReducer);

    //history to go to the success page
    const history = useHistory();


    // post request
    const handleSubmit = () => {
        // Surrounded in a try. If any 1 thing fails, it should break and go directly to the catch
        try {
            axios.post('/feedback', {
                feeling: feelingFeedback,
                understanding: understandingFeedback,
                support: supportFeedback,
                comments: commentFeedback
            })
            history.push("/success");
        }
        catch (error) {
            alert('Your feedback could not be submitted!!!');
            console.log('Error POSTing new Feedback', error);
        }
    }
    // takes in the store of each input in order to print to the DOM
    return (
        <>
            <p>Feelings: {feelingFeedback}</p>
            <p>Understanding: {understandingFeedback}</p>
            <p>Support: {supportFeedback}</p>
            <p>Comments: {commentFeedback}</p>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit Feedback</button>
            </form>
        </>
    )
}

export default Review;