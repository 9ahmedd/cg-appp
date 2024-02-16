import React from 'react'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleNavigate1 = () => {
        navigate('/cat')
    }
    const handleNavigate2 = () => {
        navigate('/pros')
    }
  return (
      <div>
          <div className="container">
              <div className="btns">
          <button type="button" onClick={handleNavigate1} class="btn btn-primary one">Categoryes</button>
          <button type="button" onClick={handleNavigate2} class="btn btn-secondary two">Products</button>
    </div>
    </div>
    </div>
  )
}

export default Home