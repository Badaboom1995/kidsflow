import React from "react";
import { Wrapper } from "./styled";
import { Item, Section } from "features/AddUserForm/styled";
import Input from "parts/Input";

interface IUserFormView {
  handleChange: (e: React.ChangeEvent) => void;
  errors: any;
  touched: any;
}
function UserFormView({ touched, errors }: IUserFormView) {
  const withError = (name: string) => ({
    error: errors[name],
    touched: touched[name],
  });
  return (
    <Wrapper>
      <Section>
        <Item>
          <Input name="fullName" label="ФИО" {...withError("fullName")} />
        </Item>
        <Item>
          <Input
            name="phone"
            label="Телефон"
            placeholder="7 919 420 44 84"
            {...withError("phone")}
          />
        </Item>
        <Item>
          <Input name="email" label="Email" {...withError("email")} />
        </Item>
        <Item>
          <Input name="login" label="Логин" {...withError("login")} />
        </Item>
        <Item>
          <Input
            name="password"
            label="Пароль"
            type="password"
            {...withError("password")}
          />
        </Item>
      </Section>
      <button type="submit">qwe</button>
    </Wrapper>
  );
}
export default UserFormView;
