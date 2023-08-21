/** @jsxImportSource @emotion/react */
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";



import styled from "@emotion/styled";



const InputLabelNew = styled(InputLabel)`
font-size: 15px;
`
const InputNew = styled(Input)`
font-size: 16px; padding-left: 17px
`
export const FirstItem = () => {
    const data = [{ key: "Contact Number 1", value: "Phone No" }, { key: "Contact Number 2", value: "Phone No" }, { key: "Email", value: "nilesgmhase07.tg+1319@gmail.com" }]

    return (
        <>  {
            data.map((elem) => (
                <FormControl
                    fullWidth
                    sx={{ m: 1, width: "350px" }}
                    variant="standard"
                >
                    <InputLabelNew

                        htmlFor="standard-adornment-amount"
                    >
                        {elem.key}
                    </InputLabelNew>
                    <InputNew
                        disableUnderline
                        placeholder={elem.value}
                        sx={{
                            m: 1,
                        }}
                        id="standard-adornment-amount"
                        startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                        }
                    />
                </FormControl>
            ))
        }</>
    )
}

