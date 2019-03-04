import React from 'react';
import style from './styles/styles.css'

const Products = () => (
    <div class="main products-body" id="main">
        <div class="title-section">
            <h1><span class="orange">Products </span>In Store</h1>
        </div>
        <div class="sub-title"><h3>All products(20)</h3></div>

        <div class="buttons">
            <ul>
                <li class=" btn btn-blue"><i class="fas fa-plus-circle"></i> Add Product</li>
                <li class="btn "><i class="fas fa-print"></i> Print Products</li>
                <li class="btn "><i class="fas fa-file-export"></i> Export Data</li>
            </ul>
        </div>
        <div class="tbl-products">
            <table>
                <thead>
                    <td>#</td>
                    <td>Product Name</td>
                    <td>No. In stock</td>
                    <td>Price</td>
                    <td>view</td>
                    <td>Edit</td>
                    <td>Delete</td>

                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Cherry Beans cappuccino 3kg </td>
                        <td>4</td>
                        <td>Ksh 400</td>
                        <td class="text-green"><i class="fas fa-eye"></i></td>
                        <td class="text-warn"><i class="fas fa-edit"></i></td>
                        <td><i class=" text-red fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Men's Khaki Trousers </td>
                        <td>34</td>
                        <td>Ksh 1000</td>
                        <td class="text-green"><i class="fas fa-eye"></i></td>
                        <td class="text-warn"><i class="fas fa-edit"></i></td>
                        <td class="text-red"><i class="  fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Cherry Beans shorts </td>
                        <td>45</td>
                        <td>Ksh 400</td>
                        <td class="text-green"><i class="fas fa-eye"></i></td>
                        <td class="text-warn"><i class="fas fa-edit"></i></td>
                        <td><i class=" text-red fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Dark Blue African Tshirt</td>
                        <td>76</td>
                        <td>Ksh 580</td>
                        <td class="text-green"><i class="fas fa-eye"></i></td>
                        <td class="text-warn"><i class="fas fa-edit"></i></td>
                        <td><i class=" text-red fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Maroon Commando Tshirt with Swag</td>
                        <td>7</td>
                        <td>Ksh 650</td>
                        <td class="text-green"><i class="fas fa-eye"></i></td>
                        <td class="text-warn"><i class="fas fa-edit"></i></td>
                        <td><i class=" text-red fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Infinix Noted Pen 10</td>
                        <td>23</td>
                        <td>Ksh 13,000</td>
                        <td class="text-green"><i class="fas fa-eye"></i></td>
                        <td class="text-warn"><i class="fas fa-edit"></i></td>
                        <td><i class=" text-red fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Rja House Phone</td>
                        <td>34</td>
                        <td>Ksh 7890</td>
                        <td class="text-green"><i class="fas fa-eye"></i></td>
                        <td class="text-warn"><i class="fas fa-edit"></i></td>
                        <td><i class=" text-red fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Vaccuum Cleaner Tiger Brand</td>
                        <td>45</td>
                        <td>Ksh 90,000</td>
                        <td class="text-green"><i class="fas fa-eye"></i></td>
                        <td class="text-warn"><i class="fas fa-edit"></i></td>
                        <td><i class=" text-red fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Lemon Flavoured Home detergent</td>
                        <td>12</td>
                        <td>Ksh 560</td>
                        <td class="text-green"><i class="fas fa-eye"></i></td>
                        <td class="text-warn"><i class="fas fa-edit"></i></td>
                        <td><i class=" text-red fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>The other Home cleaner washing detergent </td>
                        <td>52</td>
                        <td>Ksh 140</td>
                        <td class="text-green"><i class="fas fa-eye"></i></td>
                        <td class="text-warn"><i class="fas fa-edit"></i></td>
                        <td><i class=" text-red fas fa-trash-alt"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default Products;