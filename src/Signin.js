import React , {useContext, useState}  from 'react' 
import { DataContent } from './WebContent';
const Signin = () => {
  const {author,dateShow,profileDashboard,register} = useContext(DataContent)  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const  emailvalue=(e)=>{
    setEmail(e.target.value)
  }
  const  passvalue=(e)=>{
    setPassword(e.target.value)
  }
   const handlelogin = (e) => {

    e.preventDefault();  
      
    profileDashboard({
      email,
      password
    })
  }
  return (
    <>
        <div className='signs'>
     <h1> Signin </h1>   
     <form onSubmit={handlelogin}>
     <div className='inputelement'>
     <label>Email ID </label>
     <input type='email'   placeholder='Email ID' value={email}  onChange={emailvalue}   required /> 
     </div>
     <div className='inputelement'>
     <label>Password</label>
     <input type='password' value={password}  onChange={passvalue} placeholder='password' required />
     </div>
     <div className='inputelement'>
     <button type='submit'> Sign In </button> 
     </div>
     </form>
     
        
    <p>New Member <b><span  className='point'  onClick={register}> Sign Up </span></b></p>
       
    <footer>
    <h4>React App developed by <b>  {author}</b> </h4> 
        <b> {dateShow}  </b> 
    </footer>
    </div>
    </>

  )
}

export default Signin