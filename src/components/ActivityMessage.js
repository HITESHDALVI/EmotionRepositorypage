/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import edgecrmcontent from "../images/edgecrmcontent.png";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ActivityTask } from "./ActivityTask";
import { ActivityAll } from "./ActivityAll";
import { ActivityMeet } from "./ActivityMeet";
import { ActivityCall } from "./ActivityCall";
import { PastHeading, ShowMoreBtn } from "./Classes";

import { css } from "@emotion/react"


const TabNew = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: ['"Nunito Sans", sans - serif'].join(","),
    "&:hover": {
      color: " orange",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "orange",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#fff",
    },
    "& .MuiTabs-indicator": {
      borderBottom: "none",
      backgroundColor: "transparent",
    },
  })
);

const TabNewMy = styled(TabNew)`

  margin-right: 10px;
  margin-left: 10px;
`

const TabPanelNew = styled(TabPanel)`

 padding: 10px;
  margin-left: 12px;
`

export const ActivityMessage = () => {
  const [value, setValue] = React.useState("4");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <TabNewMy

            label="All"
            value="4"
          />
          <TabNewMy label="Meeting" value="5" />
          <TabNewMy label="Call" value="6" />
          <TabNewMy label="Task" value="7" />
          <TabNewMy label="Update" value="8" />
          <TabNewMy label="Email" value="9" />
        </TabList>
        <TabPanelNew value="4">
          <PastHeading >Past</PastHeading>
          <ActivityAll />
          <ShowMoreBtn
            variant="text"
            // style={{ "color": "#1946a1", }}
            type="link"
          >
            Show More
          </ShowMoreBtn>
        </TabPanelNew>
        <TabPanelNew value="5">
          <PastHeading >Past</PastHeading>
          <ActivityMeet />
        </TabPanelNew>
        <TabPanelNew value="6">
          <PastHeading >Past</PastHeading>
          <ActivityCall />
        </TabPanelNew>
        <TabPanelNew value="7">
          <PastHeading >Past</PastHeading>
          <ActivityTask />
        </TabPanelNew>
        <TabPanelNew value="8">
          <img
            src={edgecrmcontent}
            alt="edgecrmcontent"
            css={css`
            display:flex;
    align-items:center;
    justify-content:center;
    margin:30px;
    margin-left:30%;
    margin-top:10%;
        `}
          />
        </TabPanelNew>
        <TabPanel value="9">
          <img
            src={edgecrmcontent}
            alt="edgecrmcontent"
            css={css`
            display:flex;
    align-items:center;
    justify-content:center;
    margin:30px;
    margin-left:30%;
    margin-top:10%;
        `}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
