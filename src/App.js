import React from "react";
import NavBar from "./components/NavBar"
import Task from "./components/Task"
import ZeroTask from "./components/ZeroTask"
import "./App.css";
import ModalFloatingButton from "./components/ModalFloatingButton";

class App extends React.Component {

  state = {
    tasks: [
      {title: "Task1", body: "Body1"},
      {title: "Task2", body: "Body2"},
      {title: "Task3", body: "Body3"},
      {title: "Task4", body: "Body4"},
      {title: "Task5", body: "Body5"},
      {title: "Task6", body: "Body6"},
      {title: "Task7", body: "Body7"},
    ]
  }

  handleDelete = (title) => {
    let tasks = this.state.tasks.filter((task) => {return task.title !== title})
    this.setState({
      tasks
    })
  }

  handleAdd = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  // constructor() {
  //   super();
  //   this.handleAdd = this.handleAdd.bind(this);
  // }

  render() {
    let tasks = this.state.tasks.map((task, index) => {
      return (
        <Task deleteTask={this.handleDelete} addTask={this.handleAdd} title={task.title} body={task.body} key={index}/>
      )
    })

    return (
      <div className="App">
        <NavBar counter={this.state.tasks.length}/>
        <div className="row">
          {
            this.state.tasks.length === 0 ? <ZeroTask/> : tasks
          }
        </div>
        <ModalFloatingButton addTask={this.handleAdd} x={5}/>
      </div>
    );
  }
}

export default App;
