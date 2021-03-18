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
import { Formik, Form } from "formik";
import { toggleOpen } from "features/Navigation/duck/slice";
import { useDispatch } from "react-redux";
import search from "./assets/search.svg";
import { setFilter } from "ducks/filters/slice";
import { useHistory } from "react-router-dom";

function HeaderView() {
  const dispatch = useDispatch();
  const history = useHistory();
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
            <Formik
              onSubmit={() => {
                history.push("/search");
              }}
              initialValues={{ search: "" }}
            >
              <Form>
                <Input
                  icon={search}
                  name="search"
                  placeholder="Поиск по событию или названию организации"
                  onChange={(e) => {
                    dispatch(setFilter(e.target.value));
                  }}
                />
              </Form>
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
