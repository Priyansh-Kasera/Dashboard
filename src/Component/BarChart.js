import React from 'react'
import styles from '../Style/barChart.module.css'
import {RiArrowDownSLine} from 'react-icons/ri'


const BarChart = () => {
    const chartValues ={
        "Jan" : 153,
        "Feb" : 130,
        "Mar" : 160,
        "Apr" : 110,
        "Jun" : 132,
        "Jul" : 150,
        "Aug" : 100,
        "Sep" : 70,
        "Oct" : 120,
        "Nov" : 200,
        "Dec" : 50
    }
  return (
    <div className={styles.parent}>
        <div className={styles.header}>
            <div>
                <h3 className='headingText'>Overview</h3>
                <p className='smallText'>Monthly Earning</p>
            </div>
            <div className={styles.button}>
                <p className='smallText'>Quartly</p>
                <RiArrowDownSLine size={'1.5rem'} color='gray' />
            </div>
        </div>
        <div className={styles.chatBars}>
                {
                    Object.keys(chartValues).map((data,index)=>(
                        <div className={styles.barContainer}>
                         <p style={{textAlign:'center'}}>{data}</p>
                         <div className={styles.bar} style={{height:chartValues[data]*1.5}}></div>
                        </div>
                       
                    ))
                }
        </div>
    </div>
  )
}

export default BarChart