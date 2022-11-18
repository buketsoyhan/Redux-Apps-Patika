import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { NumericFormat } from 'react-number-format';



function Receipt() {
  const products = useSelector((state) => state.products.items)
  const filtered = products.filter((item) => item.count > 0);
  let spendMoney = 0
  filtered.map((item) => {
    return spendMoney += item.productPrice * item.count;
  })

  if (filtered.length === 0) {
    return null
  }

  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
      <Box></Box>
      <Box>
        <Text fontSize={35} fontWeight={700}> Your Receipt</Text>
        {filtered.map((item) =>
          <Grid templateColumns='repeat(3, 1fr)' gap={4} key={item.id}>
            <GridItem> <Text fontSize={15}> {item.productName}</Text> </GridItem>
            <GridItem><Text> x {item.count}</Text></GridItem>
            <GridItem> <Text color='green.600' >
              <NumericFormat value={item.productPrice * item.count} displayType='text' thousandSeparator={true} prefix={'$'} />
            </Text></GridItem>
          </Grid>
        )
        }
        <hr></hr>
        <Text fontSize={20} fontWeight={700} float='left' ms={4}>TOTAL </Text>
        <Text float='right' me={5} mb={5} fontSize={20}>
          <NumericFormat value={spendMoney} displayType='text' thousandSeparator={true} prefix={'$'} />
        </Text>
      </Box>
      <Box></Box>
    </Grid>
  )
}

export default Receipt;