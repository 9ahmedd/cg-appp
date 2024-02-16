import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { proIdApi } from '../../redux/productByIdSlice';
import { useParams } from 'react-router-dom';
import './product.css'

function Product() {
    const dispatch = useDispatch();
    const { isLoading, data, isError } = useSelector((state) => state.productId);
    const { proId } = useParams();

    useEffect(() => {
        console.log(proId)
        dispatch(proIdApi(proId));
    }, []);

    return (
        <div className='productt'>
            {isLoading && <div className='loading'></div>}
            {isError && <p style={{ color: "red" }}>Error loading product data</p>}
          <table class="table text-center table-bordered">
  <thead class="table-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">BRAND</th>
      <th scope="col">PRICE</th>
      <th scope="col">CATEGORY_NAME</th>
      <th scope="col">STATUS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <th scope="row">{data&&data.data.product.id}</th>
      <td>{data&&data.data.product.name}</td>
      <td>{data&&data.data.product.brand}</td>
      <td>{data&&data.data.product.price}</td>
      <td>{data&&data.data.product.category_name}</td>
      <td>{data&&data.data.product.status}</td>
    </tr>
   
  </tbody>
            </table> 
            <ul class="d-flex gap-5">
            Variations :
                {data && data.data.product.variations.map((e) => <li>
                    <ul>
                        <li>{e.color_id}</li>
                        <li>{e.color_value}</li>
                        <li>{e.color_name}</li>
                        {e.details && e.details.map((d) => <li>
                            Details : 
                            <ul>
                                <li>{d.size_id}</li>
                                <li>{d.size_name}</li>
                                <li>{d.quantity}</li>
                                <li><img style={{width:"50px",height:"50px"}} src={d.image_path} alt="" /></li>
                            </ul>
                        </li>)}
                    </ul>
                </li>)}
            </ul>
        </div>
    );
}

export default Product;
