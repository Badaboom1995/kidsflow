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

function CompilationsAddView() {
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
                  content: (
                    <ChooseOrganizations
                      callback={(ids) => {
                        console.log(ids);
                      }}
                      name="organizationIds"
                    />
                  ),
                },
              ]}
            />
          </Left>
          <Right></Right>
          <Footer>
            <ButtonsArea>
              <section>
                <Button>Сохранить</Button>
              </section>
              <section></section>
            </ButtonsArea>
          </Footer>
        </Content>
      </Form>
    </Wrapper>
  );
}
export default CompilationsAddView;
