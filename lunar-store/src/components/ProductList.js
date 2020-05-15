import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<div class="py-5">
					<div class="container">
			 		<h1 class="display-2">Our Products</h1>

					<div class="row">
						<ProductConsumer>
							{value => {
								return value.products.map( product => {
									return <Product key={product.id} product={product} />;
								});
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
