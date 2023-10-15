import React from 'react'
import styles from '../Style/mainPageCard.module.css'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
const MainPageCard = ({cardData}) => {
  return (
    <div className={styles.parent}>
        <div className={styles.image} style={{backgroundColor:cardData.color}}>
            {/* <PiNotepadLight color={cardData.imageColor} size={50} /> */}
            {cardData.image}
        </div>
        <div className={styles.textContent}>
            <p className={styles.smallText}>{cardData.name}</p>
            <p className='headingText'>{cardData.price}</p>
            <div style={{display:'flex',flexDirection:'row',gap:1,alignItems:'center'}}>
            {
                    cardData.profit > 0 ?
                    <AiOutlineArrowUp color='green' size={'0.8rem'}/>
                    :
                    <AiOutlineArrowDown color='red'size={'0.8rem'}/>
            }
            <p className={styles.text}
            style={cardData.profit > 0 ? {color:'green'} : {color:'red'}}
            >       
                
                {Math.abs(cardData.profit)}</p>
            <p className={styles.text}> This month</p>
            </div>
           
        </div>
    </div>
  )
}

export default MainPageCard