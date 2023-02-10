import React, { useEffect, useState, useRef } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import './Home.styles.css';
import '../../assets/IMG_7437.jpeg'
import '../../assets/profile.png'


export const Home = () => {
 
  return (
    <>
      
      <Grid 
        padding='2em 2em 0 2em'
        h='100vh'
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={8}
        bg={'brand.900'}
      >
        <GridItem
          id='item1' 
          rowSpan={1} 
          colSpan={1}

          bg='brand.500'
          borderRadius='10px' 
          color='white' 
          alignContent='center'
          style={{
          transition: "all 0.5s ease-in-out",
          // transform: rotateBoxes ? "rotate(0deg)": "rotate(180deg)"
        }}
          />
        <GridItem
          id='item2'
      
          rowSpan={1} 
          colSpan={2} 
          bg='brand.200'
          borderRadius='10px' 
          style={{
          transition: "all 0.5s ease-in-out",
          
        }} />
        <GridItem 
          id='item3'
 
          rowSpan={2} 
          colSpan={2} 
          bg='brand.400' 
          borderRadius='10px' 
          style={{
          transition: "all 0.5s ease-in-out",
      
        }} />
        <GridItem 
          id='item4'
          marginBottom='2em'
          rowSpan={3} 
          colSpan={2} 
          bg='brand.700' 
          borderRadius='10px'
          style={{
            transition: "all 0.5s ease-in-out"
        }} />
        <GridItem 
          id='item5'

          colSpan={1} 
          bg='brand.300' 
          style={{
            transition: "all 0.5s ease-in-out"
            // transform: rotateBoxes ? "rotate(0deg)": "rotate(180deg)"
        }} />
        <GridItem 
          id='item6' 
          colSpan={3}
          bg='brand.300' 
          borderRadius='10px'
          style={{
            transition: "all 0.5s ease-in-out"
        }} />

      </Grid>

    </>
  );
};

export default Home





