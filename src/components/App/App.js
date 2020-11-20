import 'react-app-polyfill/ie11';

import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';


import QuestionsList from '../QuestionsList/';
import Header from '../Header/';
import Footer from '../Footer/';


class App extends Component {

  render() {

    return (
      <div>
        <Header />
        <BrowserRouter basename={'/polls/results'}>
          <Route exact path='/:resultId' component={QuestionsList} />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }

}


export default App