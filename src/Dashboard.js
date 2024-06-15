import React, { useContext }    from 'react'
import { DataContent } from './WebContent'
import './App.css'

  

const Dashboard = () => {
const {logout,userId,userEm,userUn,dateShow,userPn,userGn,userF,userMs,handleEdit}=useContext(DataContent)
 
  return (
    <div>
       <h1>Hi! {userUn}  Dashboard <button onClick={handleEdit}>Edit Profile </button> </h1>
       <center>
      <table id="customers">
        <thead>
          <tr>
            <th> Attributes</th>
            <th> Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td> {userUn}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{userEm}</td>
          </tr>
          <tr>
            <td>Id</td>
            <td>{userId}</td>
          </tr>
          <tr>
            <td>Phonenumber</td>
            <td>{userPn}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{userGn}</td>
          </tr>
          <tr>
            <td>Marital Status</td>
            <td>{userMs} </td>  
          </tr>
          <tr>
            <td>Photo</td>
            <td><img src={userF} width={150} height={150} alt='hiiiiiiii' />
             
            </td>
          </tr>
        </tbody>
      </table>
      </center>

   

  <h5> Date : <b> {dateShow}  </b>  </h5>
<button onClick={logout} > Logout </button>
    </div>
  )
}

export default Dashboard