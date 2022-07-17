import { useSelector } from "react-redux";

function Review() {

    // a selector for each reducer so they can be passed through the post.
    const feelingFeedback = useSelector(store => store.feelingsReducer);
    const understandingFeedback = useSelector(store => store.understandingReducer);
    const supportFeedback = useSelector(store => store.supportReducer);
    const commentFeedback = useSelector(store => store.commentsReducer);

    return (
        <>
            <p>Feelings: </p>
            <p>Understanding: </p>
            <p>Support: </p>
            <p>Comments: </p>
        </>
    )
}

export default Review;