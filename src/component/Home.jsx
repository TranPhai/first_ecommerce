import React from 'react'
import {img} from '../constant/image'
import Products from './Products'
function Home() {
  return (
    <div className="hero">
        <div className="card bg-dark text-white border-0">
        <img src={img.BANNER_IMG} className="card-img" alt="Background" height="400px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0">Sự kiện mùa xuân</h5>
            </div>
        </div>
        </div>
        <Products/>
    </div>
  )
}

export default Home