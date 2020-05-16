import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';


export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {modalOpen,closeModal} = value;
          const {img, title, priceshow} = value.modalProduct;

          if(!modalOpen){
            return null;
          }else{
            return (
              <div class="modal_container">
              <div class="container">
                <div class="row">
                  <div id="modal" class="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                    <h5>item added to the cart</h5>
                    <img src={img} class="img-fluid" alt="product"/>
                    <h5>{title}</h5>
                    <h5 class="text-muted"> Price : Rp. {priceshow} </h5>
                    <Link to="/">
                      <button class="btn btn-outline-success"  onClick={() => closeModal()} >
                        Store
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button class="btn btn-outline-success"  onClick={() => closeModal()} >
                        Go To Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
