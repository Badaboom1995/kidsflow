import React from 'react';

import * as Styled from './styled';
import BackSection from 'parts/BackSection';
import { ButtonsArea, FormSectionTitle, Status } from 'parts/styled';
import Button from 'parts/Button';
import { Form } from 'formik';
import Tabs from 'parts/Tabs';
import Choose from 'parts/Choose';
import { IFormView } from './types';
import GeneralForm from './components/General';
import EventsContactForm from './components/Contacts';

const { Wrapper, Head, Content, Left, Right, Footer } = Styled;

function EventsAddView({ prompts, setFieldValue, handleChange }: IFormView) {
  return (
    <Wrapper>
      <Head>
        <BackSection />
        <FormSectionTitle>Карточка события</FormSectionTitle>
      </Head>

      <Form>
        <Content>
          <Left>
            <Choose
              getViewComponent={(status, name) => (
                <Status status={status}>{name}</Status>
              )}
              onChange={(status) => {
                setFieldValue('isActive', status);
              }}
              options={[
                { name: 'Заблокирован', status: 'disabled' },
                { name: 'Активен', status: 'active' },
              ]}
              current="Активен"
            />
            <Tabs
              activeId={0}
              tabs={[
                {
                  name: 'Общее',
                  content: (
                    <GeneralForm
                      prompts={prompts}
                      handleChange={handleChange}
                    />
                  ),
                },
                {
                  name: 'Контакты',
                  content: <EventsContactForm />,
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
