import React, { useEffect } from 'react'
import './category.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { catApi } from '../../redux/categorySlice';
import { cards } from '../data';

function Category() {
  const { isLoading, data, isError } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(catApi())
  },[])
  return (
    <div className='container mt-5 cat'>

      
      <table class="table table-success table-striped">
  <thead>
    <tr className='table-dark'>
      <th style={{textAlign:"center"}} scope="col">ID</th>
      <th style={{textAlign:"center"}} scope="col">NAME</th>
      <th style={{textAlign:"center"}} scope="col">IMG</th>
    
    </tr>
  </thead>
     <tbody>
           {
    
          data && data.data.category.map((e, i) =>
              <tr key={i}>
                    <td style={{textAlign:"center"}}>{e.id}</td>
              <td style={{textAlign:"center"}} >{e.name}</td>
              
                
          <td style={{textAlign:"center"}}><img  style={{width:"50px",height:"50px"}} src={cards[i].img} alt="" /></td>
                  
            </tr>
          )}
   
  </tbody>
      </table>
      
      {data &&  <span>Count : {data.data.category.length }</span>
       
}
    </div>
  )
}

export default Category