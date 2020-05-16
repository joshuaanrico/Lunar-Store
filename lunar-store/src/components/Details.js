import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const {id,company,img,info,price,title,inCart} = value.detailProduct;
					return (
						<div class="container py-5">
							{/* title */}
							<div class="row">
								<div class='col-10 mx-auto text-center text-slanted my-5'>
									<h1>{title}</h1>
								</div>
							</div>
							{/* end title */}
							{/* product info */}
							<div class="row">
								<div class="col-10 mx-auto col-md-6 my-3">
									<img src={img} alt="product" class="img-fluid" />
								</div>
								{/* product text */}
								<div class="col-10 mx-auto col-md-6 my-3 text-capitalize">
									<h2>Model : {title}</h2>
									<h4 class="text-uppercase text-muted mt-3 mb-2">
										Made by: <span class="text-uppercase">{company}</span>
									</h4>
									<h4 class="text-blue">
										<strong>
											Price: <span>$</span> {price}
										</strong>
									</h4>
									<p class="text-capitalize font-weight-bold mt-3 mb-0">
										Some info about products:
									</p>
									<p class="text-muted lead">{info}</p>
									{/* buttons */}
									<div>
										<a href="/" type="button" class="btn btn-primary">Back To Products</a>
										&nbsp;&nbsp;
										<a href="" type="button" class="btn btn-warning" disabled={inCart ? true : false}
											onClick={() => {
												value.addToCart(id);
												value.openModal(id);
											}}
										>
											{inCart ? "inCart" : "Add To Cart"}
										</a>
									</div>
								</div>
							</div>


						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}
