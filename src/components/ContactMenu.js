/** @jsxImportSource @emotion/react */
import React from 'react'

import { css } from "@emotion/react"
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import "./ContactMenu.css";
import { Meeting } from "./tabcontent/Meeting";

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
      backgroundColor: "#0238d9",
    },
  })
);
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AntTabStyle = css({
  marginRight: "20px", marginLeft: "20px"
})

const BoxNew = styled(Box)`
background-color: #fff; display: flex; flex-direction: row }}
`
export const ContactMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      css={css`
        width:96%;
        height: 160px ;
        margin: 10px;
        padding: 10px;
        box-shadow: 0px 4px 18px rgb(189 37 37 / 6%);
        `}
    >
      <BoxNew >
        <div
          css={css`
        width: 165px;
        display: flex;
        align-items: center;
        margin-left: 10px;
        font-size: 16px;
         `}

        >Next Action <ArrowRightAltIcon />
        </div>
        <div value={value} onChange={handleChange}>
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="ant example"
          >
            <AntTab
              css={css`
              ${AntTabStyle}`}
              label="Update"
              {...a11yProps(0)}
            />
            <AntTab
              css={css`
            ${AntTabStyle}`}
              label="Meeting"
              {...a11yProps(1)}
            />
            <AntTab
              css={css`
            ${AntTabStyle}`}
              label="Call"
              {...a11yProps(2)}
            />
            <AntTab
              css={css`
            ${AntTabStyle}`}
              label="Task"
              {...a11yProps(3)}
            />
            <AntTab
              css={css`
            ${AntTabStyle}`}
              label="Email"
              {...a11yProps(4)}
            />
          </AntTabs>
        </div>
      </BoxNew>

      <TabPanel value={value} index={0}>
        <FormControl fullWidth sx={{ width: "100%" }} variant="standard">
          <TextField
            placeholder=" Type Your Updates Here"
            multiline
            id="standard-multiline-static"
            variant="standard"
            sx={{
              m: 1,
              fontSize: "10px",
              width: "750px",
            }}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          <handleInput />
        </FormControl>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Meeting />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item 4
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item 5
      </TabPanel>
    </Box >
  );
};
