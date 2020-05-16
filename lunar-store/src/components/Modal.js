import React, { Component } from 'react';
import styled from 'styled-Components';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
      {(value) => {
        const {modalOpen,closeModal} = value;
        const{img, title, price} = value.modalProduct;

        if(!modalOpen){
          return null;
        }
        else{
          return {
          <div class="container">
            <div class="row">
              <div id="modal" class="col-8 mx-auto col-md-6 col-lg-4
              text-center text-capitalize p-5">
              <h5>item added to the cart</h5>
              <img src{img} class="img-fluid"
              alt="product"/>
              <h5>{title}</h5>
              <h5 class="text-muted"> price : $ {price} </h5>
              <a href="/details" class="btn shopping"> Store </a>
              <button class="btn continue shop"  onClick={() => closeModal()}>
              <a href="/cart" class="btn go cart"> go to cart </a>
              <button class="btn go cart "  onClick={() => closeModal()}>
              </div>
            </div>
          </div>
        };
      }
      }}
      </ProductConsumer>
    );
  }
}
