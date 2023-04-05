import { Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import './product.css';
const Product = () => {
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to='/newProduct'>
            <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
       <div className="productTopLeft">
        <Chart data={productData} datakey='Sales' title='Sales Performance'/>
       </div>
       <div className="productTopRight">
         <div className="productInfoTop">
            <img src="/images/saksham.jpg" alt="" className="productInfoImg" />
            <span className="productName">Mac Book</span>
         </div>
         <div className="productInfoBottom">
            <div className="productInfoItem">
                <span className="productInfoKey">Id:</span>
                <span className="productInfoValue">1</span>
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">Sales:</span>
                <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">Active:</span>
                <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">In Stock:</span>
                <span className="productInfoValue">No</span>
            </div>
         </div>
       </div>
      </div>
      <div className="productBottom">
       <form className="productForm">
        <div className="productFormLeft">
            <label>Product</label>
            <input type="text" placeholder='Mac Book' />
             <label>In Stock</label>
             <select name="inStock" id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
             </select>
             <label>Active</label>
             <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
             </select>
        </div>
        <div className="productFormRight">
            <div className="productUpload">
                <img src="/images/saksham.jpg" alt="" className="productUploadImg" />
                <label for="file">
                    <Publish />
                </label>
                <input type="file" id='file' style={{display:'none'}} />
            </div>
            <button className="productButton">Update</button>
        </div>
       </form>
      </div>
    </div>
  );
}

export default Product;
