import React from 'react'
import style from '../Style/productTable.module.css'
const ProductInfo = ({productData}) => {
  return (
    <div className={style.flexRow} style={{width:'100%',marginTop:20}}>
        <div style={{width:'40%',display:'flex',flexDirection:'row',flexWrap:'wrap',gap:10,rowGap:10}}>
            <img src={productData.image} alt='myImage' width='70' height='40' className={style.image} />
            <div>
              <p className='NormalText'>{productData.name}</p>
              <p className='smallText'>{productData.description}</p>
            </div>
        </div>
        <p className={style.centerText}>{productData.stock} in Stock</p>
        <p className={style.centerText}>{productData.price}</p>
        <p className={style.centerText}>{productData.sales}</p>
    </div>
  )
}

export default ProductInfo