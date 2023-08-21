
/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react"
import { ImgStyle, MaterialIcons } from './Classes';
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import { ActivityCallBox, ShowMoreBtn } from "./Classes";
import AwmImg from "../images/AwmImg.png"
import dataarray from "../data/exampleData.json";


export const ActivityLogSection = styled.div({
  padding: '7px',
})

export const ActivityLogBody = styled.div({
  display: 'flex',
  width: '100%',
  height: '85px',
  borderLeft: '1px solid #e5e5e6',
  margin: '20px 0px 25px 35px',
  border: '4px',

  boxShadow: " 0px 4px 18px rgb(189 37 37 / 6%)",
})

const ActivityLogBodyRight = styled.div({
  fontWeight: '200',
})
const HeadingNav = styled.p({
  fontSize: '18px',
  color: '#333',
})

const Date = styled.span({
  fontSize: '12px',
  color: '#7a7a7a',
})
const Subtitle = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: 10px;
  color: #7a7a7a;
  font-size: 13px;
  font-family: "Nunito Sans", sans-serif;
`



export function ActivityLogs() {


  return (
    <ActivityLogSection>
      <ActivityCallBox>
        <AssignmentOutlinedIcon css={css`
            ${MaterialIcons}`} />

        <ActivityLogBody>
          <ActivityLogSection>
            <img css={css`${ImgStyle}`}
              alt="Edge Consultant" src={AwmImg}
            />
          </ActivityLogSection>
          <ActivityLogBodyRight>
            <HeadingNav>
              A Wanda Maximoff<Date>02-May-2022 12:53</Date>
            </HeadingNav>
            <Subtitle>
              A Wanda Maximoff has updated the call : test
            </Subtitle>
          </ActivityLogBodyRight>
        </ActivityLogBody>
      </ActivityCallBox>


      {
        dataarray.content.map((ele) =>
          <ActivityCallBox>
            <AssignmentOutlinedIcon css={css`
            ${MaterialIcons}`} />

            <ActivityLogBody>
              <ActivityLogSection>
                <img css={css` ${ImgStyle}`}
                  alt="Edge Consultant"
                  src="https://testing.edgecrm.in/files/1c3/83c/d30/b7c/298/ab5/029/3ad/fec/b7b/1c383cd30b7c298ab50293adfecb7b18.jpg"
                />
              </ActivityLogSection>
              <ActivityLogBodyRight>
                <HeadingNav>
                  Edge Consultant <Date>04-May-2022 01:12</Date>
                </HeadingNav>
                <Subtitle>
                  Edge Consultant has updated the meeting : {ele.value}
                </Subtitle>
              </ActivityLogBodyRight>
            </ActivityLogBody>
          </ActivityCallBox>)
      }
      <ShowMoreBtn variant="text" type="link" >
        Show More
      </ShowMoreBtn>

    </ActivityLogSection >
  );
}
