import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";
import PropTypes from "prop-types";

import { FaShoppingCart } from 'react-icons/fa';

export default class Product extends Component {
	render() {
		const {id, title, img, price, inCart} = this.props.product;
		return (
			<div class="card bg-light mb-3" style={{width: "18rem"}}>
			  <img class="card-img-top" src={img} alt="Card image cap" />
			  <div class="card-body">
			    <h5 class="card-title">{title}</h5>
			    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <a href="/details" class="btn btn-primary">Go somewhere</a>
			    <button class="btn btn-outline-warning" disabled={inCart ? true : false} onClick={() => {console.log('rere');}} >
					{inCart?(<p class="text-capitalize mb-0" disabled>In Cart</p>):(<FaShoppingCart size={25}></FaShoppingCart>)}
			    </button>
			    <p>$ {price}</p>
			  </div>
			</div>
		);
	}
}

Product.propTypes = {
	product:PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool,
	}).isRequired
};
