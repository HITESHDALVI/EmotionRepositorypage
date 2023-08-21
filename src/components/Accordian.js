/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import React from "react"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { AccordianItem } from "./AccordianItem";
import { FirstItem } from "./FirstItem";


const AccordianMain = styled.divdiv`
display: flex;
flex-direction: column;
align-items: center;
  width: 30%;
  height: 100%;
  margin: 17px;
  box-sizing: border-box;
  text-align: left;
`

const Accordian1Item = styled.div`
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
  height: 250px;
  width: 390px;
`
const Acc1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: #160f29;
  background-color: #fff;
  position: relative;
  box-sizing: border-box;
  height: 50px;
  width: 370px
`
const AccordianName = styled.div`
  text-align: left;
`
const AccBox = styled.div`
box-sizing:border-box;`


const StyledArrowForwardIosOutlinedIcon = styled(KeyboardArrowDownOutlinedIcon)`
    font-size: 29px;
    font-weight: 700;
`


export const Accordian = () => {
  return (
    <AccordianMain>
      <Accordian1Item>
        <Acc1>
          <AccordianName>Contact information</AccordianName>
          <StyledArrowForwardIosOutlinedIcon
          />
        </Acc1>
        <AccBox>
          <FirstItem />
        </AccBox>
      </Accordian1Item>
      <AccordianItem />
    </AccordianMain>
  );
};
