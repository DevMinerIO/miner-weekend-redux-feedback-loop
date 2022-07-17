import axios from "axios";
import { useSelector } from "react-redux";

function Review() {

    // a selector for each reducer so they can be passed through the post.
    const feelingFeedback = useSelector(store => store.feelingsReducer);
    const understandingFeedback = useSelector(store => store.understandingReducer);
    const supportFeedback = useSelector(store => store.supportReducer);
    const commentFeedback = useSelector(store => store.commentsReducer);

    // post request
    axios.post('/review', {
        feeling: feelingFeedback,
        understanding: understandingFeedback,
        support: supportFeedback,
        comments: commentFeedback
    })

    return (
        <>
            <p>Feelings: {feelingFeedback}</p>
            <p>Understanding: {understandingFeedback}</p>
            <p>Support: {supportFeedback}</p>
            <p>Comments: {commentFeedback}</p>
        </>
    )
}

export default Review;