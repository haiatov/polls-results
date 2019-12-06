import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import QuestionsList from '../QuestionsList/'; 
import Header from '../Header/';
import Footer from '../Footer/';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Route exact path='/:userId/:scheduleId' component={QuestionsList}/>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }

}


export default App