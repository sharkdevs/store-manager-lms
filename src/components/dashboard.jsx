import React from 'react';
import './styles/styles.css'
import { NavLink } from 'react-router-dom';


const Dashboard = () => (
    <div class="main products-body" id="main">
        <div class="dash-tabs">
            <div class="title-section">
                <h1><span class="orange">Manage Your store Effectively</span></h1>
            </div>
            <ul>
                <li><NavLink to="/products"><i class="fas fa-money-check-alt"></i>View sales</NavLink></li>
                <li><NavLink to="/products"><i class="fas fa-stream"></i>Products</NavLink></li>
                <li><NavLink to="/create"><i class="fas fa-plus-circle"></i>Add Product</NavLink></li>
                <li><NavLink to="/create"><i class="fas fa-user"></i>Add User</NavLink></li>
            </ul>
            
        </div>
    </div>
)

export default Dashboard;