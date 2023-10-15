import React from 'react'
import styles from '../Style/mainPage.module.css'
import MainPageCard from './MainPageCard'
import { PiWallet } from 'react-icons/pi';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import BarChart from './BarChart';
import PieChart from './PieChart';
import ProductTable from './ProductTable';
import { PiNotepadLight } from 'react-icons/pi';
import {BsCashCoin, BsHandbag} from 'react-icons/bs'
import wave from '../Images/waving-hand.png'
const MainPage = () => {
    const mainPageCard = [{name:"Earning",price:"$198K",profit : 37.8,color:'#deffee',image : <BsCashCoin size={50} color='#00a23d' />},
{name:"Orders",price:"$2.4K",profit : -2,color:'#e7dbff',image : <PiNotepadLight   size={50} color='#a000fe'/>},
{name:"Balance",price:"$2.4K",profit : -2,color:'#cef2fe',image : <PiWallet size={50} color='#347ccd'/>},
{name:"Total Sales",price:"$89K",profit : 11,color:'#ffbde2',image : <BsHandbag size={50} color='#d60009' />}]
function showHideFunction(){
   
    document.getElementById("sideNav").style.display = "block"
}
  return (
    <div className={styles.mainContainer}>
        <div className={styles.header}>
            <div className={styles.sideMenuIcon} onClick={()=>{
                showHideFunction();
            }}>
                <AiOutlineMenu size={30}/>
            </div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'baseline',gap:5}}>
            <h4 className='headingText'>Hey Priyansh</h4>
            <img src={wave} width='25' height='25' alt='waving_hand'/>
            <h4 className='headingText'>,</h4>
            </div>
            
            <div className={styles.searchBar}>
                <AiOutlineSearch  color='gray'/>
                <input type='text' placeholder='Search' className={styles.inputField}/>
            </div>
            
        </div>
        <div className= {styles.mainPageCards}>
            {
                mainPageCard.map((data,index)=>(
                    <MainPageCard cardData={data}/>
                ))
            }
        </div>
        <div className={styles.flexRow}>
            <BarChart />
            <PieChart />
        </div>

        <ProductTable />
    </div>
  )
}

export default MainPage