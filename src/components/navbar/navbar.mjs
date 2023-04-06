import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
	return (
		<header className="navbar">
			<div className="main">
				<h2 className="title">Full<span>Stack</span></h2>
				<ul className="list">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/image">image</Link></li>
					<li><Link to="/todo">todo</Link></li>
				</ul>
				<div className="menu">
					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
				</div>
			</div>
		</header>
	)
}


export default Navbar 

