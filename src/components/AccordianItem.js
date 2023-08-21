/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from "@emotion/styled";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import dataarray from "../data/exampleData.json";

export const AccordianItemNew = styled.div.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
font-size: 15px;
color: #160f29;
background-color: #fff;
position: relative;
box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0px 4px 18px rgb(189 37 37 / 6%);
  text-align: left;
  margin: 5px;
  padding: 10px;
  padding-left: 22px;
  height: 50px;
  width: 390px;
`

const AccordianName = styled.div`
text-align: left;
`

const StyledArrowForwardIosOutlinedIcon = styled(ArrowForwardIosOutlinedIcon)`
    font-size: 16px;
    font-weight: 700;
`

export const AccordianItem = () => {


    return (<>
        {
            dataarray.items.map((elem) => (
                <AccordianItemNew>
                    <AccordianName>{elem}</AccordianName>
                    <StyledArrowForwardIosOutlinedIcon

                    />
                </AccordianItemNew>
            ))
        }</>

    )
}
