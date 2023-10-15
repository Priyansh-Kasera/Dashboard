import React from 'react'
import styles from '../Style/pieChart.module.css'
const PieChart = () => {
  return (
    <div className={styles.parent}>
        <div style={{width:'100%'}}>
            <h3 className='headingText'>Customers</h3>
            <p className='smallText'>Customers that buy products</p>
        </div>
        <div class={styles.pieChart}>
            <div className={styles.pieChatInnerCircle}>
                <div className={styles.slice}></div>
                <div className={styles.slice}></div>
                <div className={styles.firstCircle}>
                    <p className='headingText'>45%</p>
                    <p className='normalText' style={{textAlign:'center'}}>Total New Customers</p>
                </div>
                <div className={styles.secondCircle}></div>
                <div className={styles.thirdCircle}></div>
            </div>
        </div>
    </div>
  )
}

export default PieChart