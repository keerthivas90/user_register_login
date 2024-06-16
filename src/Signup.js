import React , {useContext, useState } from 'react'
import { DataContent } from './WebContent';

const Signup = () => {
 
 const {dateShow,author,addprofiles,onBack} = useContext(DataContent) 

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [pnumber,setPnumber] = useState('');
  const [gender,setGender] = useState('');
  const [userinfo, setUserInfo] = useState({ languages: [] }); 
  const [imgs,setImgs] =useState();   

    const handleChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        const { languages } = userinfo;
        
        // Case 1 : The user checks the box
        if (checked) {
            setUserInfo({
                languages: [...languages, value] 
            });
        }
        // Case 2  : The user unchecks the box
        else {
            setUserInfo({
                languages: languages.filter(
                    (e) => e !== value
                ) 
            });
        }
      };
    
    const handleChnage=(e)=>{
        
        const data = new FileReader()
        data.addEventListener('load',()=>{
            setImgs(data.result)
        })
        data.readAsDataURL(e.target.files[0])
    }
    
  const signupSubmit = (e) =>{
        e.preventDefault();      

        let maritalStatus=  userinfo.languages ;
        addprofiles({
          username,
          email,
          password,
          pnumber,
          gender,
          maritalStatus,
          imgs})     
 
        setUsername('');
        setEmail('')
        setPassword('')
        setPnumber('')
        setGender('')
        setUserInfo('')
        
  }
  return (
    <div className='signs'>
         <h1> Signup </h1>  
        
            <form onSubmit={signupSubmit}>
                <div className='inputelement'>
                <label>User Name</label>
                <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' required  />
                </div>
                <div className='inputelement'>
                <label>Email ID</label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email ID' required   />
                </div>
                <div className='inputelement'>
                <label>Password</label>
                <input type='password' value={password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="password" onChange={(e)=> setPassword(e.target.value)}  required  />
                </div>
                <div className='inputelement'>
                <label>Phone </label>
                <input type='tel' value={pnumber} maxLength="10" onChange={(e)=>setPnumber(e.target.value)} required />
                </div>
                <div className='inputelement'>
                <label>Gender</label>
                <input type="radio" value="Male"  
                 onChange={() => setGender( "Male")  } name='gender' /> 
                 Male 
                 <input type="radio" value="Female"  
                 onChange={() => setGender( "Female")  } name='gender' /> 
                 Female  
                </div>
                <div className='inputelement'>
                  <label>Marital Status</label>
                    <input type="checkbox" name="languages" value="Single" onChange={handleChange}/>
                      Single  
                    <input type="checkbox" name="languages" value="Married" onChange={handleChange}/>
                    Married  
                    <input type="checkbox" name="languages" value="FamilyMan"  onChange={handleChange}/>
                      FamilyMan  
                </div>
                <div className='inputelement'>
                <label> Image </label>
                <input type='file' onChange={handleChnage} accept="image/*" />                 
                </div>
             
                <div className='inputelement'>
                <button type='submit'>Resigter</button>
                <button onClick={onBack} >Cancel</button>
                </div>
            </form>
        
         <footer>
        <h4>React App developed by <b>  {author} </b> </h4> 
        <b> {dateShow}  </b> 

        </footer>
    </div>
  )
}

export default Signup