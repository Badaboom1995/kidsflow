import React from 'react';
import { Wrapper } from './styled';
import {
  ButtonsArea,
  FooterForm,
  FormSectionTitle,
  HeadForm,
} from 'parts/styled';
import Button from 'parts/Button';
import BackSection from 'parts/BackSection';
import { Form } from 'formik';
import Tabs from 'parts/Tabs';

import GeneralForm from './components/GeneralForm';
import ContactsForm from './components/ContactsForm';
import LegalForm from './components/LegalForm';

function HighlightsAddView() {
  const tabs = [
    {
      name: 'Общее',
      content: <GeneralForm />,
    },
    {
      name: 'Контакты',
      content: <ContactsForm />
    },
    {
      name: 'Юридические данные',
      content: <LegalForm />
    },
  ];
  return (
    <Wrapper>
      <Form>
        <HeadForm>
          <BackSection />
          <FormSectionTitle>Карточка организации</FormSectionTitle>
        </HeadForm>
        <Tabs tabs={tabs} activeId={0} />
        <FooterForm>
          <ButtonsArea>
            <section>
              <Button>Сохранить</Button>
            </section>
            <section></section>
          </ButtonsArea>
        </FooterForm>
      </Form>
    </Wrapper>
  );
}
export default HighlightsAddView;
