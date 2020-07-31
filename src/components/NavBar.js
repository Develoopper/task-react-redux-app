import React from "react";

export default function NavBar({counter}) {
	return (
		<div className="navbar-fixed">
			<nav>
				<div 
					className="nav-wrapper grey darken-4" 
					style={{fontSize: 35, fontWeight: "bold"}}
				>
					<a className="center brand-logo" >Todo App</a>
					<ul id="nav-mobile" className="left hide-on-med-and-down">
						<li><a href="#"><i className="material-icons right">menu</i></a></li>
						<li><a href="sass.html" style={{fontSize: 18}}>Completed</a></li>
					</ul>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a style={{fontSize: 18}}>{counter} Task{counter > 1 ? "s" : ""}</a></li>
					</ul>
				</div>
			</nav>
		</div>
	)
}