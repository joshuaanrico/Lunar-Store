import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div class="row my-2 text-capitalize text-center">
      <div class="col-10 mx-auto col-lg-2">
        <img src={img} style={{ width: "5rem", height:"5rem" }} class="img-fluid" alt="product" />
      </div>
      <div class="col-10 mx-auto col-lg-2">
        <span class="d-lg-none">product : </span>
        {title}
      </div>
      <div class="col-10 mx-auto col-lg-2">
        <span class="d-lg-none">price : </span>
        {price}
      </div>
      <div class="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div class="d-flex justify-content-center">
          <div>
            <span class="btn btn-outline-dark" onClick={() => decrement(id)} > - </span>
            <span class="btn btn-outline-dark"> {count} </span>
            <span class="btn btn-outline-dark" onClick={() => increment(id)} > + </span>
          </div>
        </div>
      </div>
      {/**/}
      <div class="col-10 mx-auto col-lg-2">
        <div class="btn btn-outline-dark" onClick={() => removeItem(id)} >
            <FaTrash size={25}></FaTrash>
        </div>
      </div>
      <div class="col-10 mx-auto col-lg-2">
        <strong>item total : $ {total}</strong>
      </div>
    </div>
  );
}
