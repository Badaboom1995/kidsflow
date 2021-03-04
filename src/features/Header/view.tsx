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
import { toggleOpen } from "features/Navigation/duck/slice";
import { useDispatch } from "react-redux";
import search from "./assets/search.svg";

function HeaderView() {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Container>
        <MenuToggle
          open={true}
          onClick={() => {
            dispatch(toggleOpen());
          }}
        />
        <Logo />
        <Search>
          <SearchForm>
            <Formik onSubmit={() => {}} initialValues={{ search: "" }}>
              <Input
                icon={search}
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
