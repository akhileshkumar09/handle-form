import React from 'react'

function PersonalInformation({formData, handleChange}) {
  return (
    <div>
        <h2>Personal Information</h2>
        <lavel>
            Name:
            <input type='text' name='name' value={formData.name} onChange={(e)=>handleChange(e)} placeholder='Enter Your Name'/>
        </lavel>
        <lavel>
            Email:
            <input type='email' name='email' value={formData.email} onChange={(e)=>handleChange(e)} placeholder='Enter Your Email ID'/>
        </lavel>
        <lavel>
            Name:
            <input type='password' name='password' value={formData.password} onChange={(e)=>handleChange(e)} placeholder='Enter Your Password'/>
        </lavel>
    </div>
  )
}

export default PersonalInformation