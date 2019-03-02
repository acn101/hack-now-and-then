import '../style/base/_reset.scss';
import '../style/main.scss';

import React from 'react';
import Content from '../component/content/index';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';


export default class App extends React.Component {

  render() {
    return (
      <main className="application">
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" component={Content}/>
          </React.Fragment>
        </BrowserRouter>
      </main>
    );
  }
}
