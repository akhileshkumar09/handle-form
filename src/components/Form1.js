import React,{useState} from 'react'

function Form1() {
  const [formData, setFormData] = useState({
    name : '',
    password :'',
    bio : '',
    favouriteColor : '',
    hobbies : [],
    subscribe : false
    
  })

  const [error, setError] = useState({});
  const hobbiesList = ['reading', 'cooking', 'traveling', 'gaming']

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    if(type === 'checked' && name === 'hobbies'){
      setFormData((prevData)=>{
       
        const upDatedhobbies = checked
        ? [...prevData.hobbies, value]
        : prevData.hobbies.filter((hobby)=>hobby !== value)
        console.log("Updated Hobbies: ", upDatedhobbies);
        return {...prevData, hobbies : upDatedhobbies}
      })
    } else{
    setFormData((prevData)=>({
     ...prevData,
     [name] : type === 'checkbox'? checked : value
    }))
  }
  }

  const validate = ()=>{
    let tempError = {}
    if(!formData.name) tempError.name = 'Name is required';
    if(!formData.password)  tempError.password = 'Password is required';
    if(!formData.bio) tempError.bio = 'Bio is required'
    if(!formData.favouriteColor) tempError.favouriteColor = 'Favourite Color is required'
    setError(tempError)
    return Object.keys(error).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.hobbies)
    if(validate()){
      console.log("Form Data: ", formData); 
    alert(`Submitted Data: ${JSON.stringify(formData, null, 3)}}`);
    }
  };

  return (
    <div>
       <form onSubmit={handleSubmit}>

<div>
    <label>
      name: 
      <input type='text' name='name' value={formData.name} onChange={handleChange}/>
    </label>
    {error.name &&(<p style={{'color':'red'}}>{error.name}</p>)}
  </div>

  <div>
    <label>
      Password:
      <input type='password' name='password' value={formData.password} onChange={handleChange}/>
    </label>
    {error.password &&(<p style={{'color':'red'}}>{error.password}</p>)}
  </div>

  <div>
    <label>
      Bio:
      <textarea type='text' name='bio' value={formData.bio} onChange={handleChange}/>
    </label>
    {error.bio &&(<p style={{'color':'red'}}>{error.bio}</p>)}
  </div>

  <div>
    <label>
      Favourite Color:
      <select name='favouriteColor' value={formData.favouriteColor} onChange={handleChange}>
        <option value=''>Select...</option>
        <option value='red'>Red</option>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
      </select>
    </label>
    {error.favouriteColor &&(<p style={{'color':'red'}}>{error.favouriteColor}</p>)}
  </div>

  <div>
    <label>
      Subscribe to NewsLetter:
      <input type='checkbox' name='subscribe' checked={formData.subscribe} onChange={handleChange}/>
    </label>
  </div>

  <label>Hobbies</label>
  { hobbiesList.map((hobby)=>(
      <div key={hobby}>
        <input
        type='checkbox'
        name='hobbies'
        value={hobby}
        checked = {formData.hobbies.includes(hobby)}
        onChange={handleChange}
        />
        <label>{hobby}</label>
      </div>
    ))
  }

  <button type='submit'>Submit</button>
</form>
    </div>
  )
}

export default Form1