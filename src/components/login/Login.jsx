import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { userApi } from '../../redux/loginSlice';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userApi({ phone, password })).then((result) => {
      console.log(result)
      if (result.payload.token) {
        navigate('/home')
      }
    });
  }
  return (
      <div class="container">
          <form onSubmit={handleSubmit}>
  <div class="mb-3 mt-5">
    <label for="exampleInputEmail1" class="form-label">Phone</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      onChange={(e) => setPhone(e.target.value)} />
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                  />
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login