import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Landing from '../Landing/Landing';

class App extends React.Component{
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path='/home' exact component={Landing} />
            </div>
        </BrowserRouter>
      </div>
    );
  };
};

export default App;
