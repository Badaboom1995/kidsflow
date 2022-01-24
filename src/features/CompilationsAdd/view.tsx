import React from 'react';

import * as Styled from './styled';
import BackSection from 'parts/BackSection';
import { ButtonsArea, FormSectionTitle } from 'parts/styled';
import Button from 'parts/Button';
import { Form } from 'formik';
import { IFormView } from './types';
import GeneralForm from './components/General';
import Tabs from 'parts/Tabs';
import ChooseOrganizations from 'features/ChooseOrganizations';

const { Wrapper, Head, Content, Left, Right, Footer } = Styled;

function EventsAddView({ setFieldValue }: IFormView) {
  return (
    <Wrapper>
      <Head>
        <BackSection />
        <FormSectionTitle>Создание подборки</FormSectionTitle>
      </Head>
      <Form>
        <Content>
          <Left>
            <Tabs
              activeId={1}
              tabs={[
                {
                  name: 'Общее',
                  content: <GeneralForm />,
                },
                {
                  name: 'Организации',
                  content: <ChooseOrganizations />,
                },
              ]}
            />
          </Left>
          <Right></Right>
          <Footer>
            <ButtonsArea>
              <section>
                <Button>Сохранить</Button>
                {/* <Button type="ghost">Удалить анкету</Button> */}
              </section>
              <section>
                {/* <Button type="ghost">Заблокировать</Button> */}
              </section>
            </ButtonsArea>
          </Footer>
        </Content>
      </Form>
    </Wrapper>
  );
}
export default EventsAddView;
