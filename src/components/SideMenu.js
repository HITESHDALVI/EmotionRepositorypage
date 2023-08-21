/** @jsxImportSource @emotion/react */
import React from "react";
import manImg from "../images/manImg.jpg";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import TungstenOutlinedIcon from "@mui/icons-material/TungstenOutlined";
import InsightsSharpIcon from "@mui/icons-material/InsightsSharp";
import styled from "@emotion/styled";

import { css } from "@emotion/react"


const SideMenuList = styled.div({
  display: "flex",
  flexDirection: "column",
  height: '100%',
  padding: '0',
  margin: '0',
  alignItems: "flex-start",
  listStyle: "none",
  boxSizing: " border-box",
  backgroundColor: "white",
  boxShadow: "0px 4px 18px rgb(189 37 37 / 6%)",
  zIndex: '99',
})

const SideMenuLi = styled.li({
  fontSize: '14px',
  cursor: 'pointer',
  color: '#72859d',
  padding: '0.3rem',
  margin: '0.3rem',
  '&:hover,&:focus': {
    color: "#366bc9",
  }
})



export const SideMenu = () => {
  const icons = [<DashboardOutlinedIcon />, <DateRangeOutlinedIcon />, <CardTravelOutlinedIcon />, <PersonPinOutlinedIcon />, <LocalLibraryOutlinedIcon />, <CampaignOutlinedIcon />, <SupportAgentOutlinedIcon />, <GavelOutlinedIcon />, <TungstenOutlinedIcon />, <InsightsSharpIcon />];

  return (
    <SideMenuList >
      <SideMenuLi>
        <img css={css`
           width: 30px;
           height: 30px;
           border-radius: 50%
        `} src={manImg} alt="manImg" />
      </SideMenuLi>
      {
        icons.map((ele) => (
          <SideMenuLi>{ele}</SideMenuLi>
        ))
      }

    </SideMenuList >
  );
};
