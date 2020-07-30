import React from "react";

export default function Task({title, body, deleteTask}) {
	return (
		<div className="col s12 m4">
			<div className="card grey darken-3">

				<div className="card-content white-text">
					<span className="card-title">{title}</span>
					<p>{body}</p>
				</div>

				<div className="card-action">
					<a href="#" onClick={() => deleteTask(title)}>
						<i className="small material-icons">clear</i>
					</a>
					<a href="#">
						<i className="small material-icons">check</i>
					</a>
				</div>

			</div>
		</div>
	)
}