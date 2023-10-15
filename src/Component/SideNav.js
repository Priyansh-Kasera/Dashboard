import React from 'react'
import styles from '../Style/sideNav.module.css'
import SideNavCard from './SideNavCard'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { HiOutlineKey } from 'react-icons/hi'
import {BiSolidOffer, BiUserCircle} from 'react-icons/bi'
import {LuBox} from 'react-icons/lu'
import { BsCashCoin, BsChevronDown } from 'react-icons/bs'
import {MdOutlineLiveHelp} from 'react-icons/md'
import { PiHexagonDuotone } from 'react-icons/pi'
import user from '../Images/user.png'
const SideNav = () => {
    const sideCards = [{name :"Dashboard",image : <HiOutlineKey color='white'/>},{name: "Product",image : <LuBox color='white'/>},
    {name :"Customers", image : <BiUserCircle color='white' />},{name : "Income",image : <BsCashCoin color='white'/> },
    {name : "Promote", image :<BiSolidOffer color='white' />},{name :"Help",image :<MdOutlineLiveHelp color='white'/>}]
    function showHideFunction(){
        document.getElementById("sideNav").style.display = "none"
    }
  return (
    <div className={styles.container}>
        
        <div className={styles.flexRow}>
            <AiOutlineArrowLeft size={20} color='white' onClick={()=>{showHideFunction()}} id={styles.backButton}/> 
            <PiHexagonDuotone color='white' size={30}/>
            <h3 className='headingText whiteTextColor'>DashBoard</h3>
        </div>
        <div className={styles.cardContainer}>
            {
                sideCards.map((data,index)=>(
                    <SideNavCard cardName={data} key={index}/>
                ))
            }
        </div>
        <div className={styles.fixedPosition}>
            <div className={[styles.flexRow,styles.userCard].join(' ')}>
                <img src={user} height='30' width='30' alt='userImage' />
                <div>
                    <p className='noramlText whiteTextColor'>Priyansh</p>
                    <p className='smallText'>Project Manager</p>
                </div>
                <BsChevronDown size={20} color='gray' style={{position:'absolute',right:20}}/>
            </div>
        </div>
        
    </div>
  )
}

export default SideNav