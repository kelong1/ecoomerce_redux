import React from 'react'
import{Link } from "react-router-dom"

const AddProduct = () => {
  return (
    <div>
        <form classname="productForm" className='form-control'>
            <h2>Add a new product</h2>
            <input type="text" placeholder='Enter your Title'className='form-control'/>
            <input type="text" placeholder='Enter your category'className='form-control' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Write your new Blog'className='form-control'></textarea>
            
            <button className='btn btn-dark'>Submit</button>
            <p>Already have an account <Link to="/">Login here</Link></p>
        </form>
    </div>
  )
}

export default AddProduct