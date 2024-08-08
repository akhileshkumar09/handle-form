import React from 'react'

function Address({formData, handleChange}) {
  return (
    <div>
       <h2>Address</h2>
        <label>
            Address:
            <input type='text' name='address' value={formData.address} onChange={(e)=>handleChange(e)} placeholder='Enter Your Address'/>
        </label>
        <label>
            City:
            <input type='text' name='city' value={formData.city} onChange={(e)=>handleChange(e)} placeholder='Enter Your City'/>
        </label>
        <label>
            Address:
            <input type='text' name='state' value={formData.state} onChange={(e)=>handleChange(e)} placeholder='Enter Your State'/>
        </label>
        <label>
            Address:
            <input type='text' name='zip' value={formData.zip} onChange={(e)=>handleChange(e)} placeholder='Enter Your Zip Code'/>
        </label>
    </div>
  )
}

export default Address