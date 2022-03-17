import React, { useState } from 'react';
import {
  Wrapper,
  StoriesTitle,
  Story,
  Stories,
  AddStory,
  DeleteStory,
} from './styled';
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
import plus from 'assets/plus.svg';
import Modal from 'parts/Modal';
import StoryAdd from './components/StoryAdd';
import { Formik } from 'formik';

function HighlightsAddView({ stories, createHighlight, removeStory }) {
  const [modalVisible, setModalVisibility] = useState(false);

  return (
    <Wrapper>
      {modalVisible && (
        <Modal isVisible={modalVisible} changeVisibility={setModalVisibility}>
          <StoryAdd changeVisibility={setModalVisibility} />
        </Modal>
      )}
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          createHighlight(values);
          actions.resetForm();
        }}
      >
        <Form>
          <HeadForm>
            <BackSection />
            <FormSectionTitle>Хайлайтс</FormSectionTitle>
          </HeadForm>
          <FormContent>
            <GridContainer>
              <GridElement>
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
              <GridElement col={12}>
                <StoriesTitle>
                  <b>Сториз</b> 8/10
                  <hr />
                </StoriesTitle>
              </GridElement>
              <GridElement col={12}>
                <Stories>
                  <AddStory
                    type="button"
                    onClick={() => {
                      setModalVisibility(!modalVisible);
                    }}
                  >
                    <img src={plus} alt="plus" />
                    Добавить сториз
                  </AddStory>
                  {stories.map((story) => (
                    <Story key={story.order} src={story.imageUrl} type="button">
                      <DeleteStory
                        onClick={() => {
                          removeStory(story.id);
                        }}
                      />
                    </Story>
                  ))}
                </Stories>
              </GridElement>
            </GridContainer>
          </FormContent>
          <FooterForm>
            <ButtonsArea>
              <section>
                <Button>Сохранить</Button>
              </section>
              <section></section>
            </ButtonsArea>
          </FooterForm>
        </Form>
      </Formik>
    </Wrapper>
  );
}
export default HighlightsAddView;
