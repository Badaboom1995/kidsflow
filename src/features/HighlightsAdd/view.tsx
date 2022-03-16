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
  Status,
} from 'parts/styled';
import Button from 'parts/Button';
import BackSection from 'parts/BackSection';
import { Form } from 'formik';
import Input from 'parts/Input';
import Select from 'parts/Select';
import EmojiPicker from 'parts/EmojiPicker';
import plus from 'assets/plus.svg';
import Modal from 'parts/Modal';
import StoryAdd from './components/StoryAdd/StoryAdd';
import { removeStory } from './duck/slice';
import { useDispatch } from 'react-redux';

function HighlightsAddView({ stories }) {
  const [modalVisible, setModalVisibility] = useState(false);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {modalVisible && (
        <Modal isVisible={modalVisible} changeVisibility={setModalVisibility}>
          <StoryAdd changeVisibility={setModalVisibility} />
        </Modal>
      )}
      <Form>
        <HeadForm>
          <BackSection />
          <FormSectionTitle>Хайлайтс</FormSectionTitle>
        </HeadForm>
        <FormContent>
          <GridContainer>
            <GridElement>
              <Input name="name" label="Название" />
            </GridElement>
            <GridElement col={3}>
              <EmojiPicker name="icon" />
            </GridElement>
            <GridElement col={3}>
              <Select
                label="Статус"
                title="---"
                name="partner"
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
                  onClick={() => {
                    setModalVisibility(!modalVisible);
                  }}
                >
                  <img src={plus} alt="plus" />
                  Добавить сториз
                </AddStory>
                {stories.map((story) => (
                  <Story key={story.order} src={story.image}>
                    <DeleteStory
                      onClick={() => {
                        dispatch(removeStory(story.id));
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
    </Wrapper>
  );
}
export default HighlightsAddView;
