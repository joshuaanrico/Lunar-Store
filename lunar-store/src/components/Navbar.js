import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import 'font-awesome/css/font-awesome.min.css';
export default class Navbar extends Component {
	render() {
		return (

			<NavWrapper class="navbar navbar-expand-lg navbar-light bg-light">
				{/* Logo dan nama Store */}
				<a class="navbar-brand" href="#">
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
			        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Link</a>
			      </li>
			      <li class="nav-item dropdown">
			        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          Dropdown
			        </a>
			        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
			          <a class="dropdown-item" href="#">Action</a>
			          <a class="dropdown-item" href="#">Another action</a>
			          <div class="dropdown-divider"></div>
			          <a class="dropdown-item" href="#">Something else here</a>
			        </div>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link disabled" href="#">Disabled</a>
			      </li>
			    </ul>

			    {/* Navbar yg kanan */}
				<a href="/Cart" class="btn btn-outline-success my-2 my-sm-0">
						<i className="fas fa-cart-plus" />My Cart
				</a>
			  </div>
			</NavWrapper>
		);
	}
}


const NavWrapper = styled.nav'
	background: var(--mainBlue);
	.nav-link{
		color: var(--mainWhite)!important;
		font-size:1.3rem;
		text-transfrom: capitalize;
	}
';
