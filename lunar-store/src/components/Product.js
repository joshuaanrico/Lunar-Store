import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";

export default class Product extends Component {
	render() {
		const {id, title, img, price, inCart} = this.props.product;
		return (
			<div>
				<h3>producttt</h3>
			</div>
		);
	}
}
