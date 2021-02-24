import React, { useState } from "react";
import {
  Wrapper,
  Description,
  Title,
  Subtitle,
  Paragraph,
  Controls,
  Dot,
  Picture,
} from "./styled";

import slides from "./slides";
import { useInterval } from "hooks/useInterval";

function WelcomeView() {
  const [currentSlide, setSlide] = useState(0);
  const sliderSpeed = 2000;
  useInterval(() => {
    // setSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  }, sliderSpeed);

  return (
    <Wrapper>
      <Description>
        <Title>Взлетаем!</Title>
        <Subtitle>{slides[currentSlide]?.subtitle}</Subtitle>
        <pre>
          <Paragraph>{slides[currentSlide]?.desc}</Paragraph>
        </pre>
        <Controls>
          {slides.map((item, index) => (
            <Dot
              key={item.desc}
              active={index === currentSlide}
              onClick={() => {
                setSlide(index);
              }}
            />
          ))}
        </Controls>
        {/* <button onClick={nextSlide}>next</button> */}
      </Description>
      <Picture>
        <img src={slides[currentSlide]?.img} alt="" />
      </Picture>
    </Wrapper>
  );
}
export default WelcomeView;
