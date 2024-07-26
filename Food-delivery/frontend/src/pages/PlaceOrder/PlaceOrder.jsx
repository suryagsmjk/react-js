import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} =useContext(StoreContext)
  return (
    <div>
      <form className='place-order'>
        <div className="place-order-left">
          <p className='title'>Delivery Infomation</p>
          <div className="multi-fields">
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='last Name' />
          </div>
          <input type='text' placeholder='Email address' />
          <input type='text' placeholder='Street' />
          <div className="multi-fields">
            <input type='text' placeholder='City' />
            <input type='text' placeholder='State' />
          </div>
          <div className="multi-fields">
            <input type='text' placeholder='Zip code' />
            <input type='text' placeholder='Country' />
          </div>
          <input type='text' placeholder='Phonr' />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div >
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:3}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>${getTotalCartAmount()===0?0:getTotalCartAmount() + 3}</p>
              </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default PlaceOrder