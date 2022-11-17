import React from 'react'
import {useSelector} from "react-redux"
import "./style.css"
import { NumericFormat } from 'react-number-format';
function Products() {
    const money = useSelector((state)=>state.products.money)
  return (
    <div className='money-bar'>
        <NumericFormat value={money} displayType='text' thousandSeparator={true} prefix={'$'} />
    </div>
  )
}

export default Products