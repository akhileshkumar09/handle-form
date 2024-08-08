import React, { useState } from 'react'
import PersonalInformation from '../components/PersonalInformation'
import Address from '../components/Address'
import Review from '../components/Review'

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
      name : '',
      email : '',
      password : '',
      address : '',
      city : '',
      state : '',
      zip : ''
  })

  const handleNext = () =>{
      setCurrentStep((prevStep)=>prevStep+1)
  }

  const handlePrevious = () => {
      setCurrentStep((prevStep) => prevStep-1)
  }

  const handleChange = (e) => {
      const {name, value, type, checked} = e.target
      setFormData({
          ...formData,
          [name] : type === 'checkbox' ? checked : value
      })
  }

  const handleSubmit = () =>{
      alert(`Submitted data ${JSON.stringify(formData, null, 2)}`)
  }

  const renderStep = () =>{
      switch(currentStep){
          case 1:
              return <PersonalInformation formData={formData} handleChange={handleChange}/>
          case 2:
              return <Address formData={formData} handleChange={handleChange}/>
          case 3:
              return <Review formData={formData} handleChange={handleChange}/>
          default :
              return <PersonalInformation formData={formData} handleChange={handleChange}/>            
      }
  }
  return (
    <div>
       <h3>You are on step {currentStep}</h3>
        {renderStep()}
        {currentStep > 1 && (<button onClick={handlePrevious}>Previous</button>)}
        {currentStep < 3 && (<button onClick={handleNext}>Next</button>)}
        {currentStep === 3 && (<button onClick={handleSubmit}>Submit</button>)} 
    </div>
  )
}

export default MultiStepForm