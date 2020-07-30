import React from "react";

export default function AddTask() {
    return (
		<div>
			<div className="input-field col s6 m3 white">
				<label htmlFor="last_name">Task title</label>
				<input id="last_name" type="text" className="validate" style={{backgroundColor: "#fafafa"}}/>
			</div>

			<div className="input-field col s6 m9 white">
				<label htmlFor="last_name">Task Body</label>
				<textarea id="textarea1" className="materialize-textarea" style={{backgroundColor: "#fafafa"}}/>
			</div>
		</div>
    )
}