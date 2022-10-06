import React from 'react'


const AddProduct = () => {
  return (
    <div>
        <form className="productForm form-control"  method="post" enctype="multipart/form-data">
            <h2>Add a new product</h2>
            <input type="text" placeholder='Enter category' name="category"className='form-control'/>
            <input type="text" placeholder='Enter product name' name="category"className='form-control'/>
            <input type="text" placeholder='Enter product description ' name="category"className='form-control'/>
            <input type="integer" placeholder='Enter product price'className='form-control' />
            <input type="file" placeholder='Enter product image' name="image"className='form-control'/>
            
            <button className='btn btn-block'>Submit</button>
            
        </form>
    </div>
  )
}

export default AddProduct