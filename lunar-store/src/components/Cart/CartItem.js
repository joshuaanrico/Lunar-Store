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
    <span class="d-lg-none">product : </span>
    {title}
    </div>
    <div class="col-10 mx-auto col-lg-2">
    <span class="d-lg-none">price : </span>
    {price}
    </div>
    <div class="col-10 mx-auto col-lg-2 my-2 my-lg-0">
    <div class="d-flex justify-content-center">
    </div>
    <span class="btn btn-black mx-1" onClick={()=>decrement(id)}></span>

    </div>

    </div>


  );
}
