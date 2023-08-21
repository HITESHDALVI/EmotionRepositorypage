import React from "react";
import { PhoneIcon } from "./PhoneIcon";
import { ChangeButtonNew } from "./ChangeButtonNew";
import { DetailCard } from "./DetailCard";
import { ActivityCallBox, MainDiv } from "./Classes";
import dataarray from "../data/exampleData.json";


export const ActivityCall = () => {

  return (<React.Fragment>
    {
      dataarray.elements.map((data) => {
        return (
          <ActivityCallBox>
            <PhoneIcon />
            <MainDiv>
              <DetailCard key={data.id} value={data.value} />
              <ChangeButtonNew />
            </MainDiv>
          </ActivityCallBox>
        );
      })}</React.Fragment>)
};
