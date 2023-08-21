/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from "@emotion/react"
import { MaterialIcons } from './Classes';
import GroupsIcon from "@mui/icons-material/Groups";
import { ChangeButtonNew } from "./ChangeButtonNew";
import { DetailCard } from "./DetailCard";
import { ActivityCallBox, MainDiv } from "./Classes";

export const ActivityMeet = () => {
  return (
    <ActivityCallBox>
      <GroupsIcon css={css`
            ${MaterialIcons}`} />
      <MainDiv>
        <DetailCard key="1" value="'adhgjgjgcgj gjg jg jg j g j gj gj gjg jg j'" />
        <ChangeButtonNew />
      </MainDiv>

    </ActivityCallBox>
  );
};
