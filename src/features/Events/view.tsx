import React from "react";
import { Wrapper, ButtonsWrapper } from "./styled";
import Slider from "parts/Slider";
import { MainTitle } from "parts/typography";
import EventCard from "./EventCard";
import Button from "parts/Button";
import { Link } from "react-router-dom";

function EventsView() {
  return (
    <Wrapper>
      <MainTitle>События по выбранным категориям</MainTitle>
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
        <Link to="/search">
          <Button type="transparent">Смотреть на карте</Button>
        </Link>
      </ButtonsWrapper>
    </Wrapper>
  );
}
export default EventsView;
