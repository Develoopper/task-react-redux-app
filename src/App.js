import React from "react";
import NavBar from "./components/NavBar"
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import AllTasksPage from "./pages/AllTasksPage";
import SingleTaskPage from "./pages/SingleTaskPage";

class App extends React.Component {

  state = {
    counter: 0
  }

  setCounter = (counter) => {
    this.setState({
      counter
    })
  }

  // constructor() {
  //   super();
  //   this.handleAdd = this.handleAdd.bind(this);
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar counter={this.state.counter}/>
          <Switch>
            <Route path="/" exact render={(props) => <AllTasksPage {...props} setCounter={"this.setCounter"} />}/>
            <Route path="/:title" component={SingleTaskPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
