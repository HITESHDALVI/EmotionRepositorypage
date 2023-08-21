import React from "react";
import { ChangeButton } from "./ChangeButton";
import { PhoneIcon } from "./PhoneIcon";
import { ChangeButtonNew } from "./ChangeButtonNew";
import { DetailCard } from "./DetailCard";
import { ActivityCallBox, MainDiv } from "./Classes";
import dataarray from "../data/exampleData.json";

export const ActivityAll = () => {
  return (
    <React.Fragment>
      {
        dataarray.data.map((datas) => (
          <ActivityCallBox>
            <PhoneIcon />
            <MainDiv>
              <DetailCard key={datas.id} value={datas.value} />
              {datas.button ? <ChangeButtonNew /> : <ChangeButton />}
            </MainDiv>
          </ActivityCallBox>

        ))
      }
    </React.Fragment>)
};
