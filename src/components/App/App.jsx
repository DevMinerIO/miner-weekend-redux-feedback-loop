import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import Review from '../Review/Review';

function App() {

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
        <form>
          <Route path="/" exact>
            <FeelingForm />
          </Route>
          <Route path="/understanding" exact>
            <UnderstandingForm />
          </Route>
          <Route path="/support">
            <SupportForm />
          </Route>
          <Route path="/comments">
            <CommentsForm />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
        </form>
      </Router>
    </div>
  );
}

export default App;
