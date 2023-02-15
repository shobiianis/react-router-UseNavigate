import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
 
    let Navigate=useNavigate();

    let goToAbout=()=>{
      Navigate('/About')
         
    }
    let goToNoti=()=>{
        Navigate('/Noti')
           
      }

    let goToProduct=()=>{
        Navigate('/Product')
        
    }      
  return (
    <div>
        Home
        <br />
        
        <button onClick={goToAbout}>About</button>
        <button onClick={goToNoti}>Notification</button>
        <button onClick={goToProduct}>Product</button>
  
    </div>
  )
}

export default Home