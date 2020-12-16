import React from 'react';
import './App.css';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {MainPage} from "./Router/MainPage/MainPage";
import StagePage from "./Router/StagePage/StagePage";
import {QuestPage} from "./Router/QuestPage/QuestPage";

class App extends React.Component  {

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/stage" component={StagePage}/>
            <Route exact path="/quest" component={QuestPage}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;
