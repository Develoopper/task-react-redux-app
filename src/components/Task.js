import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTask } from '../actions/taskActions'

class Task extends Component {
	handleDelete = () => {
		this.props.deleteTask(this.props.task.title);
    }

	render() { 
		return (
			<div className="col s12 m4">
				<div className="card grey darken-3">

					<div className="card-content white-text">
						<span className="card-title">{this.props.title}</span>
						<p>{this.props.body}</p>
					</div>

					<div className="card-action">
						<a href="#" onClick={this.handleDelete}>
							<i className="small material-icons">clear</i>
						</a>
						<Link to={"/" + this.props.title}>
							<i className="small material-icons">info_outline</i>
						</Link>
					</div>

				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	let title = ownProps.title;
	return {
	  task: state.tasks.find(task => task.title === title)
	}
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      deleteTask: (title) => dispatch(deleteTask(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);