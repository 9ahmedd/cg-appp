import React, { useEffect, useState } from 'react'
import './products.css'
import { cards } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { proApi } from '../../redux/productSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();
 
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.product)
  useEffect(() => {
    dispatch(proApi());
  }, [])
//   const handleNav = (id) => {
//    navigate(`/pro:${id}`)
  //  }
  
  return (
    <div>
      <div className='container pro'>
        <div className="box"  >
      {data&&data.data.product.map((e)=><Link to={`/pro/${e.id}`}>
        <img src={e.variations[0].details[0].image_path} alt="" />
        <h4>{e.name}</h4>
        <span>{e.brand}</span>
        <span>{e.price}</span>
      </Link>)
          }
          </div>
      </div>
    </div>
  )
}

export default Products