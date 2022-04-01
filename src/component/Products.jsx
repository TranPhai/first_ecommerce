import React,{useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
function Products() {
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(()=>{
        const  getProducts = async () =>{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            if(componentMounted){
                // clone data
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            };
            return ()=>{
                componentMounted = false;
            }
        }
        getProducts();
    },[])
    const Loading =() =>{
        return(
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }
    const filterProduct =(cat) =>{
        const updateList = data.filter((x)=>x.category === cat);
        setFilter(updateList);
    }
    const ShowProducts =() =>{
        return (
            <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark" onClick={()=>setFilter(data)}>Tất cả</button>
            <button className="btn btn-outline-dark"onClick={()=>filterProduct("men's clothing")}>Đồ nam</button>
            <button className="btn btn-outline-dark"onClick={()=>filterProduct("women's clothing")}>Đồ nữ</button>
            <button className="btn btn-outline-dark"onClick={()=>filterProduct("jewelery")}>Trang sức</button>
            <button className="btn btn-outline-dark"onClick={()=>filterProduct("electronics")}>Thiết bị điện tử</button>

            </div>
            {filter.map((product,index)=>{
                return(                   
                        <div className="col-md-3" key ={index} >
                            <div className="card h-100 text-center p-4" >
                                <img src= {product.image} className="card-img-top" alt={product.title} height="250px"/>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <NavLink to ={`products/${product.id.toString()}`} className="btn btn-ouline-dark">Chi tiết</NavLink>
                                </div>
                            </div>
                        </div>
                )
            })}
            </>
        )

    }
    return (
        <div>
           <div className="container my-5 py-5">
               <div className="row">
                   <div className="col-12 mb-5">
                       <h1 className="display-6 fw-bolder text-center">Sản phẩm</h1>
                       <hr/>
                   </div>
               </div>
               <div className="row justify-content-center">
                   {loading ? <Loading/> : <ShowProducts/> }
               </div>
           </div>
        </div>
    )
}

export default Products