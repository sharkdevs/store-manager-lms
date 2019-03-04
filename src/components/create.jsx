import React from 'react';
import './styles/styles.css'

const Create = () => (
    <div class="main" id="main">
        <div class="title-section">
            <h1><span class="orange">Add New </span>Product<small>(Administrator)</small></h1>
        </div>
        <div class="sub-title"><h3>Create a product below</h3></div>

        <div class="create-product padding-lr-40">
            <form action="#" method="post">
                <label for="pname">Product name</label>
                <input type="text" name="pname " id="pname"/>

                <div class="frm-half">
                        <label for="Number">Number of Items</label>
                        <input type="text" name="Number" id="Number"/>
                </div>

                <div class="frm-half">
                        <label for="price">Price</label>
                        <input type="text" name="price" id="price"/>
                </div>
                <label >Upload Image</label>
                <input type="file" name="image" id="image"/>
                <br/>

                <label >Add product description</label>
                <textarea name="description" id="description" cols="30" rows="10"/>
                <input class="btn btn-blue" type="submit" value="Add Product"/>
            </form>
        </div>
    </div>
        
	
)

export default Create;
	