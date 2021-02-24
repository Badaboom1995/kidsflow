import React from "react";
import { Wrapper, ButtonsWrapper } from "./styled";
import Slider from "parts/Slider";
import { Title } from "parts/typography";
import EventCard from "./EventCard";
import Button from "parts/Button";

function EventsView() {
  return (
    <Wrapper>
      <Title>События по выбранным категориям</Title>
      <Slider settings={{ slidesToShow: 4 }}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Slider>
      <ButtonsWrapper>
        <Button>Смотреть больше</Button>
        <Button type="transparent">Смотреть на карте</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
}
export default EventsView;
