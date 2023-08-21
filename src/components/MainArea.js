import React from "react";
import { Accordian } from "./Accordian";
import { ContactMenu } from "./ContactMenu";
import { ActivityArea } from "./ActivityArea";
import styled from "@emotion/styled";

const ActivityBoxMain = styled.div({
  display: 'flex',
  flexDirection: ' row',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
})
const ActivityBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  width: "95%",
})


export const MainArea = () => {
  return (
    <ActivityBoxMain>
      <Accordian />
      <ActivityBox>
        <ContactMenu />
        <ActivityArea />
      </ActivityBox>
    </ActivityBoxMain>
  );
};
