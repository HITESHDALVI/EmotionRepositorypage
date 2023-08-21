/** @jsxImportSource @emotion/react */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CampignImg from "../images/CampignImg.png";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { ActivityMessage } from "./ActivityMessage";


import { css } from "@emotion/react"

import { ActivityLogs } from "./ActivityLogs";
const AntTabs = styled(Tabs)({
  width: "100%",
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#0238d9",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
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
      color: "#0238d9",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#0238d9",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgb(13, 71, 161)",
    },
  })
);


const BoxNew = styled(Box)`
background-color: #fff; display: flex; flex-direction: row }}
`
const AntTabNew = styled(AntTab)`margin-right: 20px; margin-left: 20px}}
`
export const ActivityArea = () => {
  const [value, setValue] = React.useState("1");




  const TabPanelNew = styled(TabPanel)`

padding: 10px;
 margin-left: 12px;
`
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box
        css={css`
       width:100%;
       height: 620px ;
       margin: 10px;
       padding: 10px;
       `}
      >
        <BoxNew>
          <AntTabs
            aria-label="ant example"
            value={value}
            onChange={handleChange}
          >
            <AntTabNew

              label="Activity"
              value="1"
            />
            <AntTabNew

              label="Campaign Emailers"
              value="2"
            />

            <AntTabNew label="Logs" value="3" />
          </AntTabs>
        </BoxNew>

        <TabPanelNew value="1">
          <ActivityMessage />
        </TabPanelNew>
        <TabPanel value="2">
          <img
            css={css`
          display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 300px;
  margin: 30px;
  margin-left: 20%;
  margin-top: 10%;
        `}
            src={CampignImg}
            alt="edgecrmcontent"

          />
        </TabPanel>
        <TabPanel value="3">
          <ActivityLogs />
        </TabPanel>
      </Box>
    </TabContext>
  );
};
