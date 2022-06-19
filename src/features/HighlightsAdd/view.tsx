import React from 'react';
import { Wrapper, StoriesTitle } from './styled';
import {
  ButtonsArea,
  FooterForm,
  FormSectionTitle,
  FormContent,
  HeadForm,
  GridContainer,
  GridElement,
} from 'parts/styled';
import Button from 'parts/Button';
import BackSection from 'parts/BackSection';
import { Form } from 'formik';
import Input from 'parts/Input';
import Select from 'parts/Select';
import EmojiPicker from 'parts/EmojiPicker';

import ColorPicker from 'parts/ColorPicker';
import Stories from './components/Stories';

function HighlightsAddView() {
  return (
    <Wrapper>
      <Form>
        <HeadForm>
          <BackSection />
          <FormSectionTitle>Хайлайтс</FormSectionTitle>
        </HeadForm>
        <FormContent>
          <GridContainer>
            <GridElement col={4}>
              <Input name="title" label="Название" />
            </GridElement>
            <GridElement col={3}>
              <EmojiPicker name="emoji" />
            </GridElement>
            <GridElement col={3}>
              <Select
                label="Статус"
                title="---"
                name="isActive"
                options={[
                  { name: 'Активна', value: '1' },
                  { name: 'Неактивна', value: '0' },
                ]}
                onChange={() => {}}
              />
            </GridElement>
            <GridElement col={2}>
              <ColorPicker name="borderColor" label="Цвет фона" />
            </GridElement>
            <GridElement col={12}>
              <StoriesTitle>
                <b>Сториз</b> 8/10
                <hr />
              </StoriesTitle>
            </GridElement>
            <GridElement col={12}>
              <Stories />
            </GridElement>
          </GridContainer>
        </FormContent>
        <FooterForm>
          <ButtonsArea>
            <section>
              <Button>Сохранить</Button>
            </section>
          </ButtonsArea>
        </FooterForm>
      </Form>
    </Wrapper>
  );
}
export default HighlightsAddView;
