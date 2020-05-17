import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<div class="py-4">
					<div class="container">
			 		<h1 class="display-2">Our Products</h1>
					<form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
				      <input class="form-control mr-sm-2 w-75" type="search" placeholder="Search" aria-label="Search"/>
				      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				    </form>
				    <br/>
					<div class="card-columns">
						<ProductConsumer>
							{value => {
								return value.products.map ( product => {
									return <Product key={product.id} product={product} />;
								})
							}}
						</ProductConsumer>
					</div>
				</div>
			</div>
			</React.Fragment>
			//<div>
				//<Product>

				//</Product>
			//</div>
		);
	}
}
