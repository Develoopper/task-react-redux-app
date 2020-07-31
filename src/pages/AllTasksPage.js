import React, {Component} from 'react'
import ZeroTask from '../components/ZeroTask';
import Task from '../components/Task';
import ModalFloatingButton from '../components/ModalFloatingButton';
import { connect } from 'react-redux'

class AllTasksPage extends Component {

    render() { 
        //this.props.tasks.setCounter(this.props.tasks.length)
        console.log("d");

        let tasks = this.props.tasks.map((task, index) => {
            return (
              <Task title={task.title} body={task.body} key={index}/>
            )
        })

        return (
            <div>
                <div className="row">
                    {
                        this.props.tasks.length !== 0 ? tasks : <ZeroTask/>
                    }
                </div>
                <ModalFloatingButton addTask={this.handleAdd} x={5}/>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
      tasks: state.tasks
    }
}

export default connect(mapStateToProps)(AllTasksPage);