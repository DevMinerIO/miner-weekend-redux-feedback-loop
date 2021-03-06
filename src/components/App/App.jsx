import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// component imports
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import Review from '../Review/Review';
import { useSelector, useDispatch } from 'react-redux';
import Success from '../Success/Success';

function App() {

  // useSelector to get the store of reducer feedbackReducer from the index.js
  const feedback = useSelector(store => store.feedbackReducer);
  const dispatch = useDispatch();

  // get request. Not sure if I will need it yet. 
  const getFeedback = () => {
    // get the url from the server.js
    axios.get('/review')
      .then(response => {
        dispatch({ type: 'SET_FEEDBACK', payload: response.data })
      })
      .catch(error => {
        console.log('Error in APP GETing Feedback:', error);
      })
  }


  return (
    <div className='App'>
      <Router>
        <Route path="/">
          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>
        </Route>
        {/* Home. Includes the first "feelings input" */}
        <Route path="/" exact>
          <FeelingForm />
        </Route>
        {/* understanding form */}
        <Route path="/understanding" exact>
          <UnderstandingForm />
        </Route>
        {/* Support form */}
        <Route path="/support">
          <SupportForm />
        </Route>
        {/* Comments form */}
        <Route path="/comments">
          <CommentsForm />
        </Route>
        {/* Review form */}
        <Route path="/review">
          {/* sending function getFeedback as a prop in case I wanted to render the current feedback to the dom. */}
          <Review getFeedback={getFeedback} />
        </Route>
        {/* success page after successful submit */}
        <Route path="/success">
          <Success />
        </Route>
      </Router>
    </div>
  );
}

export default App;
