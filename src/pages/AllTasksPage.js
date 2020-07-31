import React, {Component} from 'react'
import ZeroTask from '../components/ZeroTask';
import Task from '../components/Task';
import ModalFloatingButton from '../components/ModalFloatingButton';


class AllTasksPage extends Component {
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

    render() { 
        //this.props.setCounter(this.state.tasks.length)
        console.log("d");

        let tasks = this.state.tasks.map((task, index) => {
            return (
              <Task deleteTask={this.handleDelete} addTask={this.handleAdd} title={task.title} body={task.body} key={index}/>
            )
        })

        return (
            <div>
                <div className="row">
                    {
                        this.state.tasks.length !== 0 ? tasks : <ZeroTask/>
                    }
                </div>
                <ModalFloatingButton addTask={this.handleAdd} x={5}/>
            </div>
        );
    }
}
 
export default AllTasksPage;