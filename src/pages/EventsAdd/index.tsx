import React from "react";
import { Wrapper, Right, Left, Head } from "./styled";
import BackSection from "parts/BackSection";
import FormGenerator from "parts/FormGenerator";
import EventCard from "./components/EventCard";

function EventsAdd() {
  return (
    <Wrapper>
      <Head>
        <BackSection />
      </Head>
      <Left>
        <FormGenerator
          config={{
            fields: [
              { name: "name", label: "Название" },
              { name: "type", label: "Тип события" },
              { name: "org", label: "Организация" },
              { name: "partner", label: "Партнер" },
              { name: "number", label: "Количество мест" },
              { name: "date", label: "Дата проведения" },
              { name: "ageFrom", label: "Возраст от" },
              { name: "ageTo", label: "Возраст до" },
            ],
            settings: { defaultType: "text", defaultCol: 6 },
          }}
        />
      </Left>
      <Right>
        <EventCard />
      </Right>
      <Left>
        <FormGenerator
          config={{
            fields: [
              { name: "adress", label: "Адрес проведения" },
              { name: "phone", label: "Телефон" },
              { name: "email", label: "Email" },
              { name: "site", label: "Сайт" },
            ],
            settings: { defaultType: "text", defaultCol: 6 },
          }}
        />
      </Left>
    </Wrapper>
  );
}
export default EventsAdd;
