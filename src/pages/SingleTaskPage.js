import React from "react";

export default function SingleTaskPage({match}) {
    console.log(match);
	return (
		<div className="col s12 m4">
			<div className="card grey darken-3">

				<div className="card-content white-text">
					<span className="card-title">{match.params.title}</span>
					<p>{"body"}</p>
				</div>

			</div>
		</div>
	)
}