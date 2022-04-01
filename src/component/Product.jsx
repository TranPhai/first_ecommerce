import React,{useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {addCart,deleteCart} from '../redux/action'


const Product = () => {
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        const getProducts = async () =>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProducts();
    },[])
    const Loading = ()=>{
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6">
                <Skeleton height={400} />
                </div>
            </>
        )
    }
    const dispatch = useDispatch()
    const handleProduct= (product) =>{
       const action = addCart(product);
       dispatch(action);
    }
    const ShowProducts = () =>{
        return (
            <>
                <div className="col-md-6">
                    <img src= {product.image} alt={product.title} 
                    height = "400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className ="display-5">{product.title}</h1>
                    <p className="lead">
                        Rating {product.rating && product.rating.rate} 
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${product.price}
                    </h3>
                    <p className="lead">product.description</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick = {()=>handleProduct(product)} >Add to cart</button>
                    <NavLink to = '/cart' className="btn btn-dark ms-2 px-3">
                        Go to cart
                    </NavLink>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading/> : <ShowProducts/>}
                </div>
            </div>
        </div>
    )
}

export default Product