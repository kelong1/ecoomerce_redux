import React from 'react'

const AddProduct = () => {
  return (
    <div>
        <form classname="productForm" className='form-control'>
            <h2>Add a new product</h2>
            <input type="text" placeholder='Enter your Title'className='form-control'/>
            <input type="text" placeholder='Enter your category'className='form-control' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Write your new Blog'className='form-control'></textarea>
            
            <button className='btn btn-dark'>Submit</button>
            <p>Already have an account <a>Login here</a></p>
        </form>
    </div>
  )
}

export default AddProduct