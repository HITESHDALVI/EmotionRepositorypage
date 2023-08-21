/** @jsxImportSource @emotion/react */
import React from 'react'

import { css } from "@emotion/react"
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { MaterialIcons } from './Classes';

export const PhoneIcon = () => {
    return (
        <PhoneInTalkIcon
            css={css`
            ${MaterialIcons}`}

        />
    )
}
