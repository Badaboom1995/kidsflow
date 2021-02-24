import React from "react";
import {
  Wrapper,
  Search,
  Buttons,
  Partner,
  Enter,
  SearchForm,
  Container,
} from "./styled";
import Input from "parts/Input";
import Logo from "parts/Logo";
import MenuToggle from "parts/MenuToggle";
import { Formik } from "formik";

function HeaderView() {
  return (
    <Wrapper>
      <Container>
        <MenuToggle onClick={() => {}} />
        <Logo />
        <Search>
          <SearchForm>
            <Formik onSubmit={() => {}} initialValues={{ search: "" }}>
              <Input
                name="search"
                placeholder="Поиск по событию или названию организации"
              />
            </Formik>
          </SearchForm>
        </Search>
        <Buttons>
          <Partner>Стать партнером</Partner>
          <Enter>Вход</Enter>
        </Buttons>
      </Container>
    </Wrapper>
  );
}
export default HeaderView;
