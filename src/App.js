 
import React ,{useContext} from 'react';

import Signin from './Signin'
import Signup from './Signup'
import Dashboard from './Dashboard'
import { DataContent } from './WebContent';
import EditProfile from './EditProfile';
 

function App() {
 const { signup,dashboard,showEdit} =useContext(DataContent)
            
  return (
    <div className="App">
      
      <center> 
            <h1>React User System App   </h1>   
                {
                 signup === true ?  <Signup   /> : 
                 dashboard ===true ? <Dashboard   />   : 
                 showEdit ===true ? <EditProfile   />   : 
                  <Signin  />
                }
        
        </center> 
      
    </div>
  );
}

export default App;
