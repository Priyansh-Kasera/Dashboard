import React, { useEffect } from 'react'
import styles from '../Style/dashboard.module.css'
import SideNav from '../Component/SideNav'
import MainPage from '../Component/MainPage'
const DashBoard = () => {
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      if(window.innerWidth > 700){
        document.getElementById("sideNav").style.display = "block"
      }
      else{
        document.getElementById("sideNav").style.display = "none"
      }
    })
  },[])
  return (
    <div className={styles.parentContainer}>
          <div id='sideNav' className={styles.sideNav} >
            <SideNav/>
        </div>
  
        
        <div style={{width:'100%'}} >
          <MainPage/>
        </div>
    </div>
  )
}

export default DashBoard