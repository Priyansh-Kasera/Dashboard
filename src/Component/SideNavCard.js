import React from 'react'
import styles from '../Style/sideNavCard.module.css'
import { RiArrowRightSLine } from 'react-icons/ri'
const SideNavCard = ({cardName}) => {
  return (
    <div className={styles.cardContainer}>
         {cardName.image}
        <p className='normalText whiteTextColor'>{cardName.name}</p>
        <RiArrowRightSLine color='white' style={{position:'absolute',right:10}}/>
    </div>
    
  )
}

export default SideNavCard