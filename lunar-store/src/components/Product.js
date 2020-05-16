import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";
import PropTypes from "prop-types";

import { FaShoppingCart } from 'react-icons/fa';

export default class Product extends Component {
	render() {
		const {id, title, img, priceshow, inCart} = this.props.product;
		return (
			<div id="product" class="card bg-light mb-3" style={{width: "18rem"}}>
				<ProductConsumer>
					{(value) => (
						<div onClick={() => value.handleDetail(id)} >
						  	<img class="card-img-top" src={img} alt="Card image cap" />
							<div class="card-body">
							    <h5 class="card-title">{title}</h5>
									<p>Rp. {priceshow}</p>
							    <p class="card-text">Tersedia.</p>
							    <a href="/details" class="btn btn-primary">Detail Product</a>
							    <button class="btn btn-outline-warning" disabled={inCart ? true : false}
							    	onClick={() => {
								    	value.addToCart(id);
										value.openModal(id);
									}}
								>
									{inCart?(<p class="text-capitalize mb-0" disabled>In Cart</p>):(<FaShoppingCart size={25}></FaShoppingCart>)}
							    </button>
						  	</div>
						</div>
					)}
				</ProductConsumer>
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
