import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import logo from '../logo.svg';

import { FaShoppingCart } from 'react-icons/fa';

export default class Navbar extends Component {
	logOut(e) {
		e.preventDefault()
	    localStorage.removeItem('usertoken')
	    this.props.history.push(`/`)
	}

	render() {
		const loginRegLink = (
	      <ul className="navbar-nav">
	        <li className="nav-item">
	          <Link to="/login" className="nav-link">
	            Login
	          </Link>
	        </li>
	        <li className="nav-item">
	          <Link to="/register" className="nav-link">
	            Register
	          </Link>
	        </li>
	      </ul>
	    )

	    const userLink = (
	      <ul className="navbar-nav">
	        <li className="nav-item">
	          <Link to="/profile" className="nav-link">
	            User
	          </Link>
	        </li>
	        <li className="nav-item">
	          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
	            Logout
	          </a>
	        </li>
	      </ul>
	    )

		return (

			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				{/* Logo dan nama Store */}
				<a class="navbar-brand">
					<img src={logo} width="50" height="30" class="d-inline-block align-top" alt="" />
				    Lunar Store
				</a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

				{/* Navbar yg kiri */}
			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">
			      <li class="nav-item active">
			      	<Link to="/" class="nav-link">
			      		Home <span class="sr-only">(current)</span>
			        </Link>
			      </li>
			    </ul>
				{localStorage.usertoken ? userLink : loginRegLink}
			    {/* Navbar yg kanan */}
				<Link to="/Cart" class="btn btn-outline-success my-2 my-sm-0">
					<FaShoppingCart size={25}></FaShoppingCart>&nbsp; My Cart
				</Link>
			  </div>
			</nav>
		);
	}
}



// const NavWrapper = styled.nav'
// 	background: var(--mainBlue);
// 	.nav-link{
// 		color: var(--mainWhite)!important;
// 		font-size:1.3rem;
// 		text-transfrom: capitalize;
// 	}
// ';
