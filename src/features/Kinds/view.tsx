import React from "react";
import KindCard from "./components/KindCard";
import { Wrapper } from "./styled";
import Slider from "parts/Slider";

import { Title } from "parts/typography";
interface IKindsView {
  kinds: any[];
  isLoad: boolean;
}

function KindsView({ kinds }: IKindsView) {
  return (
    <Wrapper>
      <div>
        <Title>Направления</Title>
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
