import { useEffect,useState } from 'react'
import axios from 'axios';


function App() {
  let [user,setUser] = useState()
 useEffect(()=>{
  let data = async ()=>{
    let response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUser(response.data);

  }
  data()
 },[])
let [formData, setFormData] = useState({
  firstname: "",
  lastname: "",
  email: ""
})

 let handleForm = (e) => {
  let {name, value} = e.target
  
  setFormData({...formData,[name]:value})
  console.log(formData);
 }
 let handleSubmit = () => {
  console.log(formData);
 }
  return (
    <>
    <div className="main">
    {user && user.length > 0
    ?
    user.map((item,index)=>(
      <div key={index} className='item'>
        <h1>Name:{item.name}</h1>
        <h3>Username:{item.username}</h3>
      </div>
   
    
    ))
    :
    <h1>Loading......</h1>
  }
     </div>
     <div className='data'>
      <input name='firstname' placeholder='First Name' onChange={handleForm} />
      <input name='lastname' placeholder='Last Name' onChange={handleForm} />
      <input name='email' placeholder='Email' onChange={handleForm} />
      <input name='password' placeholder='Password' onChange={handleForm} />
      <button onClick={handleSubmit}>Save</button>
     </div>
    </>
  )
}

export default App
