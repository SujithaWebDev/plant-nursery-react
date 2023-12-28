import React from 'react'
import { FaCartPlus } from "react-icons/fa6";
import Productdetails from './Productdetails'
const Product = ({cart,setCart}) => {
  return (
    <div>
      <div className='productherosection'>
        <h3>Green Life, Home Delight!</h3>
        <p>Elevate your space with lush wonders from our nursery. Discover vibrant botanical companions for a greener lifestyle. Unearth the beauty of nature, one plant at a time.</p>
        <button><a href="/product">Buy Plants</a></button>
      </div>
      <div className="gridlayout">
      <div className="productssection">
      <h2>Plants Available</h2>
      <hr/>
      {
        Productdetails.map((o)=>
        <div className='productsdiv'>
          <div className='productscard'>
            <img src={o.image}></img>
            <h3>{o.name}</h3>
            <p>Rs. {o.Price}</p>
            <button onClick={()=>setCart([...cart,o])} ><FaCartPlus className="addtocarticon"/></button>
          </div>
        </div>)
      }
      </div>
      </div>

      
    </div>
  )
}

export default Product
