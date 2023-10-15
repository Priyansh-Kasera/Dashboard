import React from 'react'
import style from '../Style/productTable.module.css'
import ProductInfo from './ProductInfo'
import { AiOutlineSearch } from 'react-icons/ai'
import { RiArrowDownSLine } from 'react-icons/ri'
import image1 from '../Images/c-d-x-PDX_a_82obo-unsplash.jpg'
import image2 from '../Images/frank-septillion-Qrspubmx6kE-unsplash.jpg'
const ProductTable = () => {
    const productData = [{name : "Abstract 3D", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
stock :32, price :"$ 45.99", sales : 20,image : image1},
{name : "Sarphens illustration", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
stock :32, price :"$ 45.99", sales : 20, image : image2}]
  return (
    <div className={style.parentContainer}>
        <div className={style.flexRow} style={{flexWrap:'wrap',rowGap:10}}>
            <h3 className='headingText' style={{width:'70%'}}>Product Sell</h3>
            <div className={style.searchBar}>
                <AiOutlineSearch  color='gray'/>
                <input type='text' placeholder='Search' className={style.inputField}/>
            </div>
            <div className={`${style.searchBar} smallText`}>
                <p className='smallText'>Last 30 days</p>
                <RiArrowDownSLine size={'1.5rem'} color='gray' />
            </div>
        </div>
        <div className={[style.flexRow, style.borderBottom].join(' ')} >
            <p className='smallText' style={{width:'40%'}}>Product Name</p>
            <p className={`smallText ${style.centerText}`}>Stock</p>
            <p className={`smallText ${style.centerText}`}>Price</p>
            <p className={`smallText ${style.centerText}`}>Total Sales</p>
        </div>
    
        {
            productData.map((data,index)=>(
                <ProductInfo productData={data} key={index} />
            ))
        }
        
    </div>
  )
}

export default ProductTable