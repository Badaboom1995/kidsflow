import React from "react";
import KindCard from "./components/KindCard";
import { Wrapper } from "./styled";
import Slider from "parts/Slider";

import { MainTitle } from "parts/typography";
import { Loader } from "parts/styled";
interface IKindsView {
  kinds: any[];
  isLoad: boolean;
}

function KindsView({ kinds, isLoad }: IKindsView) {
  return (
    <Wrapper>
      {isLoad && <Loader />}
      <div>
        <MainTitle>Направления</MainTitle>
        <Slider>
          {kinds?.map((item) => (
            <KindCard key={item.eventDirectionId} kind={item} />
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
}
export default KindsView;
