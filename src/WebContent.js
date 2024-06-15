import React ,{createContext ,useState } from 'react'
 
import data from './data/profiles.json'
import apiRequest from './apiRequest'
export const DataContent= createContext();

const WebContent = ({children}) => {
const defaultimg= require('./i.png')
    const [profiles,setProfiles]=useState(data.profiles);    
    const [signup,setSignup] = useState(false);
    const [showEdit,setShowEdit] = useState(false);
    const [dashboard,setDashboard] = useState(false);
    const [userEm,setUserEm] = useState('');
    const [userUn,setUserUn] = useState('');
    const [userId,setUserId] = useState('');
    const [userPn,setUserPn] = useState('');
    const [userGn,setUserGn] = useState('');
    const [userMs,setUserMs] = useState('');
    const [userF,setUserF] = useState(defaultimg);
 
    const API_URL = 'http://localhost:8080/profiles/'
   
     const register = () =>{
      setSignup(true)
    }
   
    const addprofiles=(profile)=>{
      const id= profiles.length >=1 ? profiles.length + 1 : 1 ;
      const profiledata= {id, ...profile}
      setProfiles(profiledata)
      const postProfiles = {
        method: "POST",
            headers: {
              'Content-type':'application/json'
            },
            body: JSON.stringify(profiledata) 
      }
      const addProfileUrl = apiRequest(API_URL,postProfiles);
      alert(' Your Profile created! congrats')
       setSignup(false)
       console.log(addProfileUrl)
    }
    const handleEdit = (userEm) => {
      const profile  = profiles.find((profile) => profile.email === userEm
    );  
      setShowEdit(true)
      setDashboard(false)
      console.log(profile)
    };
          
   
    const editProfiles=(updateProfile)=>{
     

          const id = updateProfile.id ;
          const profile_id = id.filter(el => el !== '');            
          const EditProfiles = {
            method: "PATCH",
                headers: {
                  'Content-type':'application/json'
                },
                body: JSON.stringify(updateProfile) 
          }
          const editUrl = `${API_URL}${profile_id}` ;  
          
          const EditProfileUrl = apiRequest(editUrl,EditProfiles);
          
            alert(' Your Profile Edited! congrats')
                setShowEdit(false)
                console.log(EditProfileUrl)
        
    }
  
     const profileDashboard = (profile) =>{     
      const profileEmail =  profile.email ;
      
      const dataEmails =   data.profiles.map((player) =>player.email);
      const dataPassword = data.profiles.map((player) =>player.password);
      const emailCheck = dataEmails.includes(profile.email);
      const emailPassword = dataPassword.includes(profile.password);
      
      (emailCheck ===  true) && (emailPassword ===  true) ? 
     setDashboard(true)   : alert('wrong credentials entered') ;
    
    const attributeName=  data.profiles.map((player) =>
      player.email === profileEmail ?  player.username     :  ''
    );
    const attributeId=  data.profiles.map((player) =>
      player.email === profileEmail ?  player.id    :  ''
    );
    const attributenumber=  data.profiles.map((player) =>
      player.email === profileEmail ?  player.pnumber    :  ''
    );
    const attributegender=  data.profiles.map((player) =>
      player.email === profileEmail ?  player.gender     :  ''
    );
    const attributemstatus=  data.profiles.map((player) =>
      player.email === profileEmail ? String(player.maritalStatus) :  ''
    );
    
    const attributemimg=  data.profiles.map((player) =>
      player.email === profileEmail ?  player.imgs   :  ''
    );
    

    const profileName = attributeName.filter(el => el !== '');
    const profileId = attributeId.filter(item => <li  key={item.id}>{item.id }   </li> );
    const profilenumber = attributenumber.filter(el => el !== '' );
    const profilegender = attributegender.filter(el => el !== ''   );
    const profilemstatus = attributemstatus.filter(el => el !== '' );
    const profilemimg = attributemimg.filter(el => el !== '');    
    setUserEm(profileEmail)
    setUserId(profileId)
    setUserUn(profileName)
    setUserPn(profilenumber)
    setUserGn(profilegender)
    setUserMs(profilemstatus)
    setUserF(profilemimg)  
    }
    const logout = () =>{
      setDashboard(false)
      setShowEdit(false)
    }
    const onBack= () =>{    
      setSignup(false)
    }  
    
    const onDash=() =>{
      setDashboard(true)

    }
    
    const author="keerthivasan - React JS Developer"
    const displayDate = new Date();
      const dateShow = <p>
            {displayDate.getMonth()}-{displayDate.getDate()}-{displayDate.getFullYear()}
            || {displayDate.getHours()}-{displayDate.getMinutes()}-{displayDate.getSeconds()}
            </p>;
       
       
  return (
    <DataContent.Provider value={{author,dateShow,onBack,register,logout,profileDashboard,addprofiles,signup,dashboard,userEm,userId,userUn,userPn,userGn,userMs,userF,showEdit,onDash,profiles,handleEdit,editProfiles}}>
        {children}
    </DataContent.Provider>
  )
}

export default WebContent