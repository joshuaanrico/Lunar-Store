import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
	const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
	return (
		<React.Fragment>
			<div class="container">
				<div class="row">
					<div class="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
						<Link to="/">
							<button class="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()} >
								clear cart
							</button>
						</Link>
						
						<h5>
							<span class="text-title">subtotal :</span>
							<strong>Rp. {cartSubTotal}</strong>
						</h5>
						<h5>
							<span class="text-title">tax :</span>
							<strong>Rp. {cartTax}</strong>
						</h5>
						<h5>
							<span class="text-title">total :</span>
							<strong>Rp. {cartTotal}</strong>
						</h5>
						<Link to="/">
							<button type="button" class="btn btn-success px-5" onClick={() => clearCart()} >Pay</button>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
