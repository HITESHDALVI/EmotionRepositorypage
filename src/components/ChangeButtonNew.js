import React from 'react'
import { Stack } from "@mui/material";
import { Button } from "./Classes";

export const ChangeButtonNew = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text" type="link">
                View
            </Button>
            <Button variant="text" type="link">
                Edit
            </Button>
            <Button
                type="link"
                variant="text"
                style={{ color: "red" }}

            >
                Delete
            </Button>
        </Stack>
    )
}
