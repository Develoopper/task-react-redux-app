import React from "react";

export default function ZeroTask() {
	return (
        <div className="row" style={{marginTop: 50}}>
            <div className="col s12 m3" ></div>
            <div className="col s12 m6">
                <div className="card grey darken-3 " style={{height: 350, borderRadius: 20}}>
                    <div className="card-content white-text ">
                        <h1>0 Task!</h1>
                        <h3>
                            Press the floating button <i className="small material-icons">redo</i> to create a new task!
                        </h3>
                    </div>
                </div>
            </div>
        </div>
	)
}