import React from "react";
import KindCard from "./components/KindCard";
import { Wrapper, NextArrow } from "./styled";
import lang from "./assets/lang.svg";
import Slider from "parts/Slider";

import bg from "./assets/sport_bg.png";
import { Title } from "parts/typography";

const kinds = [
  {
    id: "1",
    background: bg,
    icon: lang,
    label: "Иностранные языки",
  },
  {
    id: "2",
    background: bg,
    icon: lang,
    label: "Иностранные языки",
  },
  {
    id: "3",
    background: bg,
    icon: lang,
    label: "Иностранные языки",
  },
  {
    id: "4",
    background: bg,
    icon: lang,
    label: "Иностранные языки",
  },
  {
    id: "5",
    background: bg,
    icon: lang,
    label: "Иностранные языки",
  },
  {
    id: "6",
    background: bg,
    icon: lang,
    label: "Иностранные языки",
  },
  {
    id: "7",
    background: bg,
    icon: lang,
    label: "Иностранные языки",
  },
];

function KindsView() {
  return (
    <Wrapper>
      <div>
        <Title>Направления</Title>
        <Slider>
          {kinds.map((item) => (
            <KindCard kind={item} />
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
}
export default KindsView;
