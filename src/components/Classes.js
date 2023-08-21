/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { css } from "@emotion/react"



export const ActivityCallBox = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '13px',
})

export const MainDiv = styled.div({
    width: " 100%",
    padding: "10px 0px 25px 45px",
})

export const Button = styled.button({
    display: 'inline-block',
    padding: '10px 18px',
    fontSize: '14px',
    marginRight: '10px',
    color: ' rgb(11, 59, 144)',
    cursor: 'pointer',
    fontFamily: 'Nunito Sans, sans-serif',
    border: 'none',
    outline: 'none',
    margin: ' 5px',
    fontWeight: '0 !important',
    backgroundColor: ' transparent',
})
export const PastHeading = styled.h4({
    marginTop: '10px',
    padding: '0px 65px 8px',
    fontSize: '24px',
    color: 'rgb(88, 86, 86)',
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '300',
    marginBlockStart: '0',
    marginBlockEnd: '0',
})
export const ShowMoreBtn = styled.button({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    color: 'orangered',
    cursor: 'pointer',
    fontFamily: 'Nunito Sans, sans-serif',
    border: 'none',
    outline: 'none',
    marginLeft: '50%',
    marginTop: '50px',
    marginBottom: '50px',
})
export const MaterialIcons = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: '1px solid #ff8000',
    padding: '7px',
    borderRadius: '50%',
    color: '#ff8000',
})
export const ImgStyle = css({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginLeft: '7px',
    padding: '5px',
})
