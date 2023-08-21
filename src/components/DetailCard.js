/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import { css } from "@emotion/react"
import { ImgStyle } from "./Classes";
export const DetailsCardMain = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  boxSizing: 'border-box',
  fontFamily: 'Nunito Sans ,sans-serif',
  width: " 100%",
  height: '90px',
  background: 'white',
  boxShadow: '0px 4px 18px rgb(189 37 37 / 6%)',
})
export const ContentCard = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  width: 'auto',
  height: '80px',
  boxSizing: 'border-box',
})

export const Heading = styled.h5({
  fontFamily: 'Nunito Sans ,sans-serif',
  marginBlockStart: '0',
  marginBlockEnd: '0',
  fontSize: '18px',
  fontWeight: '300',
  color: ' rgb(0, 29, 82)',
})
export const ContentPara = styled.p({
  display: 'flex',
  flexDirection: 'row',
  fontWeight: '300',
  color: ' rgb(122 ,122, 122)',
  boxSizing: 'border-box',
  marginBlockStart: '0',
  marginBlockEnd: '0',
  fontSize: '13px',
})


export const DynContent = styled(ContentPara)`
color: #ff8000;
font-family: Nunito Sans, sans-serif;
`




export const DetailCard = (props) => {
  return (

    <DetailsCardMain
      key={props.key}
    >
      <img css={css`${ImgStyle}`} alt="Edge Consultant"
        src="https://testing.edgecrm.in/files/1c3/83c/d30/b7c/298/ab5/029/3ad/fec/b7b/1c383cd30b7c298ab50293adfecb7b18.jpg"
      />
      <ContentCard>
        <Heading>
          Edge Consultant
        </Heading>
        <ContentPara>
          created a task
          <DynContent>
            {props.value}
          </DynContent>
          dated Apr 21, 2022 .
        </ContentPara>
      </ContentCard>
    </DetailsCardMain>
  );
};
