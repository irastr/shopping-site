import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import Homepage from "./Page";
import About from "./About";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <div>
            {/* <Switch> */}
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            {/* </Switch> */}
          </div>
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;
