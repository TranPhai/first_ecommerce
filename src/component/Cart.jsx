import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addCart,deleteCart} from '../redux/action'
import '../css/Cart.css'
const Cart = () => {
  let cartList = useSelector(state => state.handleCart.products)
  let dispatch = useDispatch()
  const decreaseHandle = (product) =>{
    dispatch(deleteCart(product))
  }
  const increaseHandle = (product) =>{
    dispatch(addCart(product))
  }
  const Total = () =>{
    let result = cartList.reduce((total, product) =>{
      return (total + (product.qty * product.price))
    },0)
    return result
  }
  return (
    <>
    <div className="container">
        {cartList.map((product,index) =>{
          return(
            
                <div className="row cart-item" key ={index}>
                    <div className="col-md-4">
                      <img src={product.image} alt={product.title}
                      height="200px" width="180px"
                      />
                    </div>
                    <div className="col-md-4">
                      <h3>{product.title}</h3>
                      <p className="lead fw-bold">
                        {product.qty} x ${product.price} = ${product.qty * product.price}
                      </p>
                      <button className="btn btn-outline-dark me-4" onClick={()=> decreaseHandle(product)}>
                        <i className="fa fa-minus"></i>
                      </button>
                      <button className="btn btn-outline-dark"onClick={()=> increaseHandle(product)}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                </div>
            
          )
        })}
        <div><p className="price lead fw-bold" >Total: ${Total()}</p></div>
        
      </div>  
     
    </>
  )
}

export default Cart