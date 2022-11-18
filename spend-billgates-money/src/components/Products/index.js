import React from 'react'
import { useSelector } from "react-redux"
import "./style.css"
import { NumericFormat } from 'react-number-format';
import { Grid, GridItem } from '@chakra-ui/react'
import Card from '../Card';
function Products() {
    const money = useSelector((state) => state.products.money)
    const products = useSelector((state) => state.products.items)
    return (
        <div>
            <div className='money-bar'>
                <NumericFormat value={money} displayType='text' thousandSeparator={true} prefix={'$'} />
            </div>

            <div >
                <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                    {products.map((item) => (
                        <GridItem key={item.id}>
                            <Card id={item.id} />
                        </GridItem>
                    )
                    )
                    }
                </Grid>
            </div>
        </div>
    )
}

export default Products