import React, { useState } from 'react';

import { Formik, Form, Field } from 'formik';
import { GridContainer, GridElement } from 'parts/styled';
import {
  Header,
  Body,
  Fields,
  AddPhoto,
  Wrapper,
  BackButton,
  Sign,
} from './styled';
import Input from 'parts/Input';
import Select from 'parts/Select';
import Button from 'parts/Button';
import { SectionSubtitle } from 'parts/typography';
import { addStory } from 'features/HighlightsAdd/duck/actions';
import { useDispatch } from 'react-redux';
import plus from 'assets/plus.svg';

interface IStoryAdd {
  changeVisibility: (visibility: boolean) => void;
}

function StoryAdd({ changeVisibility }: IStoryAdd) {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          dispatch(addStory(values));
          actions.resetForm();
          changeVisibility(false);
        }}
      >
        <Form>
          <Header>
            <div>
              <BackButton onClick={() => changeVisibility(false)} />
              <SectionSubtitle>Создание сториз</SectionSubtitle>
            </div>
            <Button>Сохранить</Button>
          </Header>
          <Body>
            <Fields>
              <GridContainer transparent>
                <GridElement col={4}>
                  <Field name="imageUrl">
                    {({ form, field }) => (
                      <AddPhoto src={field.value}>
                        {!field.value && (
                          <Sign>
                            <img src={plus} alt="" />
                            <span>Загрузить фото</span>
                          </Sign>
                        )}
                        <input
                          type="file"
                          onChange={(e) => {
                            const blob = URL.createObjectURL(e.target.files[0]);
                            form.setFieldValue('imageUrl', blob);
                          }}
                        />
                      </AddPhoto>
                    )}
                  </Field>
                </GridElement>
                <GridElement col={4}>
                  <Select
                    label="Тип сториз"
                    title="---"
                    name="type"
                    options={[
                      { name: 'Event', value: '1' },
                      { name: 'Slide', value: '0' },
                    ]}
                    onChange={() => {}}
                  />
                </GridElement>
                <GridElement col={4}>
                  <Input name="order" label="Порядковый номер" />
                </GridElement>
              </GridContainer>
            </Fields>
          </Body>
        </Form>
      </Formik>
    </Wrapper>
  );
}
export default StoryAdd;
