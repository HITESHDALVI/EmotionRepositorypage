import React from "react";

import { ChangeButton } from "./ChangeButton";
import { PhoneIcon } from "./PhoneIcon";
import { DetailCard } from "./DetailCard";
import { ActivityCallBox, MainDiv } from "./Classes";


export const ActivityTask = () => {
  return (
    <ActivityCallBox>
      <PhoneIcon />
      <MainDiv>
        <DetailCard key="1" value="'hdhhh hj h hj hj hj hj hkhjkhk jhkhkhkh hkhkhkhk kjh kh kh kh hjk
            hkh khkhk'"/>
        <ChangeButton />
      </MainDiv>
    </ActivityCallBox>
  );
};
