import React from "react";
import Input from "@mui/material/Input";
// import "antd/dist/antd.css";
// import { DatePicker, Space } from "antd";
import Flatpickr from "react-flatpickr";
import Box from "@mui/material/Box";
import "flatpickr/dist/themes/material_orange.css";
// import ClockPicker from "react-clockpicker";

const ariaLabel = { "aria-label": "description" };

const CustomInput = ({ value, defaultValue, inputRef, ...props }) => {
  return (
    <input
      style={{
        width: "25%",
        fontSize: "14px",
        border: "none",
        outline: "none",
      }}
      type="date"
      disableUnderline
      placeholder="Date"
      {...props}
      defaultValue={defaultValue}
      ref={inputRef}
    />
  );
};
export const Meeting = () => {
  // var ClockPicker = require("react-clockpicker");
  return (
    <form style={{ fontFamily: '"Nunito Sans", sans-serif' }}>
      <Box sx={{ padding: "10px", borderBottom: 1, borderColor: "divider" }}>
        <Input
          style={{ width: "40%", fontSize: "14px" }}
          placeholder="Meeting Subject"
          inputProps={ariaLabel}
          disableUnderline
        />

        <Flatpickr
          render={({ defaultValue, value, ...props }, ref) => {
            return <CustomInput defaultValue={defaultValue} inputRef={ref} />;
          }}
        />
      </Box>
    </form>
  );
};
