import React from 'react';
import './styles/styles.css'
import logo from '../images/login.png'
import { NavLink } from 'react-router-dom';


const LoginForm = () => (
  //create a login form
  <div className="login-form">
    <div className='login_main'>
      <div className="container">
        <div className="col-3 img-holder">
            {/* <img src={logo} alt="Connecting Business" /> */}
        </div>
        <div className="col-3 login_center">
          <h1>Growth <span className="orange">Recipe,<br /> For </span>Businesses</h1>
          <p>Manage Your stores Efficiently Using Store manager</p>

          <ul>
            <li><i className="far fa-user"></i></li>
            <li><i className="fas fa-business-time"></i></li>
            <li><i className="fas fa-chart-bar"></i></li>
            <li><i className="fas fa-cart-plus"></i></li>
            <li><i className="fas fa-dollar-sign"></i></li>
          </ul>
        </div>
        <div className="col-3 ">
          <form className="col-form" action="">
            <img src="images/Store manager login.png" alt="" />
            <hr />
            <div className="form-items">
              <label >Email</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="form-items">
              <label >Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <NavLink to="/dashboard"><button className="btn btn-orange" type="submit"> Login</button></NavLink>

              <input type="checkbox" defaultChecked={true} name="remember" id="remember" /> Remember Me?

            <p>Forgot password? click <a href="#">here</a></p>
            <hr />
            <div>&copy; 2018. Store Management</div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default LoginForm;