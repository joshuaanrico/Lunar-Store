import React from 'react';

export default function CartItem(item,value) {
  const{id,title,img,price,total,count} = item;
  const{inCrement,dercement,removeItem} = value;
  return (
    <div class="row my-1 text-capitalize text-center">
      <div class="col-10 mx-auto col-lg-2">
      <img
      src={img}
      style={{width: "5rem", height:"5rem"}}
      class="img-fluid"
      alt="product"
      />
    </div>
    <div class="col-10 mx-auto col-lg-2">
    </div>
    <div class="col-10 mx-auto col-lg-2">
    </div>
    <div>
  );
}
