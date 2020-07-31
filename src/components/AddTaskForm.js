import React from "react";

export default function AddTask({change, formValues}) {
    return (
		<div>
			<div className="input-field col s6 m3 white">
				<label htmlFor="title">Task title</label>
				<input 
					id="title" 
					type="text" 
					className="validate" 
					style={{backgroundColor: "#fafafa"}}
					onChange={change}
					value={formValues.title}
				/>
			</div>

			<div className="input-field col s6 m9 white">
				<label htmlFor="body">Task Body</label>
				<textarea 
					id="body" 
					className="materialize-textarea" 
					style={{backgroundColor: "#fafafa"}}
					onChange={change}
					value={formValues.body}
				/>
			</div>
		</div>
    )
}