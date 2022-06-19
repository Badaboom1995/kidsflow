import Modal from 'parts/Modal';
import React, { useState, useEffect } from 'react';
import StoryAdd from './StoryAdd';
import { Wrapper, AddButton, DeleteStory, Story } from './styled';
import plus from 'assets/plus.svg';
import { Field, useField, useFormik } from 'formik';
import { getFileFromBlob, isBlob } from 'utils/blob';
import highlightsService from 'services/highlights';
import { toast } from 'react-toastify';

function Stories() {
  const [field, meta, helpers] = useField('stories');
  const { setValue } = helpers;
  const [modalVisible, setModalVisibility] = useState(false);
  const [activeStory, setActiveStory] = useState(null);
  const [stories, setStories] = useState([]);
  const [toDelete, setToDelete] = useState(null);

  const removeStory = (storyId: string): void => {
    const newState = stories.filter((item) => item.storyId !== storyId);
    setToDelete(null);
    setStories(newState);
  };

  const addStory = (story: Record<string, unknown>): void => {
    const newState = [...stories, story];
    setStories(newState);
  };

  const updateStory = (story: Record<string, unknown>): void => {
    const newState = stories.map((item) =>
      item.storyId === story.storyId ? story : item
    );
    console.log(story, newState)
    setStories(newState);
  };

  const selectActiveStory = (storyId): Record<string, string> =>
    stories.find((story) => story.storyId === storyId);

  useEffect(() => {
    if (field.value.length) setStories(field.value);
  }, []);

  useEffect(() => {
    if (stories.length) setValue(stories);
    stories.forEach((item) => {
      if (isBlob(item.imageUrl)) {
        getFileFromBlob(item.imageUrl)
          .then((file) => highlightsService.addStoryImage(file))
          .then((result) => {
            const errors = result.errorMessage;
            if (errors.length) throw errors[0];
            updateStory({ ...item, imageUrl: result.data[0].cloudUrl });
          })
          .catch((error) => {
            setToDelete({ storyId: item.storyId, error });
          });
      }
    });
  }, [stories]);

  useEffect(() => {
    if (toDelete) {
      setTimeout(() => {
        removeStory(toDelete.storyId);
      }, 1000);
      toast.error(toDelete.error);
    }
  }, [toDelete]);

  return (
    <Wrapper>
      {modalVisible && (
        <Modal isVisible={modalVisible} changeVisibility={setModalVisibility}>
          <StoryAdd
            storyId={activeStory}
            addStory={addStory}
            setActiveStory={setActiveStory}
            updateStory={updateStory}
            changeVisibility={setModalVisibility}
            initialValues={selectActiveStory(activeStory)}
          />
        </Modal>
      )}
      <AddButton
        type="button"
        onClick={() => {
          setModalVisibility(!modalVisible);
        }}
      >
        <img src={plus} alt="plus" />
        Добавить сториз
      </AddButton>
      {stories
        ?.sort((a, b) => (a.order > b.order ? 1 : -1))
        .map(({ imageUrl, storyId }) => (
          <Story
            key={storyId}
            isLoading={isBlob(imageUrl)}
            deleting={toDelete?.storyId === storyId}
            src={imageUrl}
            type="button"
            onClick={(e) => {
              if (e.currentTarget === e.target) {
                setActiveStory(storyId);
                setModalVisibility(true);
              }
            }}
          >
            <DeleteStory
              onClick={() => {
                helpers.setValue(removeStory(storyId));
              }}
            />
          </Story>
        ))}
    </Wrapper>
  );
}
export default Stories;
