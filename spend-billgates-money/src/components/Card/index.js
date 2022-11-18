import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { changeValue } from "../../redux/productSlice";
import { Box, Button, Center, Image, Input, Text } from '@chakra-ui/react'
import "./style.css"
function Card({ id }) {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.items)
    const money = useSelector((state) => state.products.money)

    const item = products.find((tmp) => tmp.id === id);

    const [count, setCount] = useState(item.count);
    const [isBuyable, setisBuyable] = useState(false);
    const [isSellable, setisSellable] = useState(true);
    let maximumBuy = Math.floor(money / item.productPrice);
    let maximum = Number(count) + Number(maximumBuy);

    useEffect(() => {
        dispatch(changeValue({ id: item.id, count: count }))

        control();
    }, [count]);

    useEffect(() => {
        if (item.productPrice > money) {
            setisBuyable(true);
        }
        if (item.productPrice <= money) {
            setisBuyable(false);
        }
    }, [money]);
    const buy = () => {
        handleChange(Number(count) + 1);
    }
    const sell = () => {
        handleChange(Number(count) - 1);
    }
    const control = () => {
        if (count > 0) {
            setisSellable(false);
        }
        if (count === 0) {
            setisSellable(true);
        }
    }
    const handleChange = (value) => {
        if (value > maximum && money > 0) {
            setCount(maximum)
        }
        else if (value < 0) {
            setCount(0);
        }
        else if (money === 0 && value < count) {
            setCount(value);
        }
        else {
            setCount(value);
        }
    }

    return (
        <Box w='95%' h='95%' bg='#EBF8FF' p={4} color='black' borderWidth='1px' alignItems='center' >
            <div >
                <Image className='product' src={item.image} m='auto' />
                <Text className='product' fontSize={25} fontWeight={700} >
                    {item.productName}
                </Text>
                <Text>
                    <NumericFormat className='product' value={item.productPrice} displayType='text' thousandSeparator={true} prefix={'$'} />
                </Text>
            </div>
            <Box className='sales' alignItems='center' m='auto' >
                {
                    !isSellable &&
                    <Button className='sale' style={{ backgroundColor: "red", color: "white" }} width='100px' height='40px' ms={4} onClick={() => sell()} >Sell</Button>
                }
                {
                    isSellable &&
                    <Button className='sale' width='100px' height='40px' ms={4} onClick={() => sell()} >Sell</Button>

                }
                <Input className='sale' type='number' textAlign='center' value={count} onChange={(e) => handleChange(e.target.value)} width='100px' height='35px' />

                {
                    !isBuyable &&
                    <Button className='sale' style={{ backgroundColor: "green", color: "white" }} width='100px' height='40px' me={4} onClick={() => buy()}>Buy</Button>
                }
                {
                    isBuyable &&
                    <Button className='sale' width='100px' height='40px' me={4} onClick={() => buy()}>Buy</Button>
                }
            </Box>
        </Box>
    )
}

export default Card