import React from 'react'
import Navbar from './Navbar'

const Additem = () => {
  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Product Name</label>
    <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Product Id</label>
    <input type="text" className="form-control" />


    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">no of item</label>
<select name="" id="" className="form-control">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Image</label>
    <input type="file" name="" id="" className="form-control" />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Price</label>
    <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success">Submit</button>

    </div>
</div>

    </div>
</div>

    </div>
  )
}

export default Additem