import React from 'react'

const Cart = (props) => {
  return (
        <div className='cart_'>
            <img src ={props.img} alt="" />
            <h3>{props.title}</h3>
            <h4>Year: {props.year}</h4>
        </div>
   
  )
}

export default Cart
