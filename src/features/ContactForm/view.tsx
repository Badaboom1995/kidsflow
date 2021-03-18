import React from "react";
import { Wrapper, Row, Label, Footer } from "./styled";
import { MainTitle } from "parts/typography";
import Input from "parts/Input";
import Select from "parts/Select";
import { Overlay } from "parts/styled";
import Button from "parts/Button";

interface IContactFormView {
  isOpen: boolean;
  close: () => void;
}
function ContactFormView({ isOpen, close }: IContactFormView) {
  return (
    <Overlay
      closed={!isOpen}
      id="1"
      onClick={(e) => {
        if (e.target["id"] === "1") close();
      }}
    >
      <Wrapper>
        <MainTitle>Связаться с нами</MainTitle>
        <Row>
          <Label>Тема вопроса</Label>
          <Select
            title="SELECT"
            groupName="reason"
            options={[
              { name: "one", value: "one" },
              { name: "one", value: "two" },
            ]}
            onChange={() => {}}
          />
        </Row>
        <Row>
          <Label>Ваш e-mail или номер телефона</Label>
          <Input name="contacts" />
        </Row>
        <Row>
          <Label>Ваше сообщение</Label>
          <Input name="contacts" multiline={10} />
        </Row>
        <Footer>
          <Button>Отправить</Button>
        </Footer>
      </Wrapper>
    </Overlay>
  );
}
export default ContactFormView;
