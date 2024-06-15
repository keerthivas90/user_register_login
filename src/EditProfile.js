import React, { useContext, useState } from 'react'
import { DataContent } from './WebContent'
 

 const EditProfile = () => {
  const {userUn,onDash,editProfiles,userId,userPn,userGn,userMs,userF} = useContext(DataContent)
  const [username,setUsername] = useState(userUn);
  const [pnumber,setPnumber] = useState(userPn);
  const [gender,setGender] = useState(userGn);
  const [imgs,setImgs] =useState();   
  let arrval=  userMs.filter(el => el !== '');
  let chk= "'"+arrval+"'"
 
 let Scheck=(chk.includes('Single'))
 let Mcheck=(chk.includes('Married'))
 let Fcheck=(chk.includes('FamilyMan'))
 const [single ,SetSingle] = useState(Scheck)
 const [married ,SetMarried] = useState(Mcheck)
 const [familyman ,SetFamilyMan] = useState(Fcheck)
 
const scheckchange =()=>{ 
 
  single===true ? SetSingle(false)  
  :  SetSingle(true) 
}
const mcheckchange =()=>{ 
   
  married===true ?
  SetMarried(false) 
  : SetMarried(true) 
}
const fcheckchange =()=>{ 
 
  familyman===true ?
  SetFamilyMan(false)
  : SetFamilyMan(true) 
}
const FileChange=(e)=>{
  
  const data = new FileReader()
  data.addEventListener('load',()=>{
      setImgs(data.result)
  })
  data.readAsDataURL(e.target.files[0])
}
  const EditSubmit = (e) =>{
    let threevalues= [single,married ,familyman ];
    let sing=threevalues[0];
    sing===true ? sing = "Single" : sing='' ;    
    let marry=threevalues[1];
    marry===true ? marry = "Married" : marry='' ;
    let family=threevalues[2];
    family===true ? family = "FamilyMan" : family='' ;     
    e.preventDefault();
  
    const updateProfile= {
      id:userId,
      username :String(username) ,
      gender:String(gender),
      pnumber:Number(pnumber) ,
      maritalStatus:[sing,marry ,family ],
      imgs
    } ;
      
    editProfiles(updateProfile);
    
  }
 

  return (

    <div>
    
       <h1> {userUn} EditProfile  </h1> 
             
    <form onSubmit={EditSubmit}>
                <div className='inputelement'>
                <label>User Name</label>
                <input type='text' value={username}
                 onChange={(e)=>setUsername(e.target.value)} 
                 />
                </div>
                <div className='inputelement'>
                <label>Phone Number</label>
                <input type='tel' value={pnumber} maxLength="10"
                 onChange={(e)=>setPnumber(e.target.value)} 
                 />
                </div>
                <div className='inputelement'>
                <label>Gender </label>
                <input type="radio"  value="Male" checked={gender ==="Male" }    
                 onChange={() => setGender( "Male")  } name='gender' /> 
                 Male 
                 <input type="radio" value="Female" checked={gender ==="Female" }    
                 onChange={() => setGender( "Female")  } name='gender' /> 
                 Female  
                </div>
                <div className='inputelement'>
                <label>Marital Status</label>
                    <input type="checkbox" name="maritalStatus" value="Single" checked={single===true  }    onChange={scheckchange} />
                      Single  
                    <input type="checkbox" name="maritalStatus" value="Married" checked={married===true  }  onChange={mcheckchange}/>
                    Married  
                    
                    <input type="checkbox" name="maritalStatus" value="FamilyMan" checked={familyman===true  }   onChange={fcheckchange} />
                      FamilyMan  
                </div>
                <div className='inputelement'>
                <input type='file' onChange={FileChange}   />  <br />               
                <img src={userF} width={150} height={150} alt='hiiiiiiii' />
                
                </div>
                <button type='submit'>Submit</button>
    </form>
  
    
      <button onClick={onDash}>Dashboard</button>

    </div>
  )
}

export default EditProfile
