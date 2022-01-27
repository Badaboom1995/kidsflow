import React, { useState, useEffect } from 'react';
import { PickerWrapper, Wrapper, ChooseButton } from './styled';
import Picker from 'emoji-picker-react';
import { Label } from 'parts/styled';
import { Field } from 'formik';

function EmojiPicker({ name }) {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const onEmojiClick = (event, emojiObject, callback) => {
    setChosenEmoji(emojiObject);
    setOpen(false);
    callback(name, emojiObject.emoji);
  };
  useEffect(() => {
    console.log(chosenEmoji);
  }, [chosenEmoji]);
  return (
    <Wrapper>
      <Label>Иконка</Label>
      <ChooseButton type="button" onClick={() => setOpen(!isOpen)}>
        {chosenEmoji ? chosenEmoji.emoji : '---'}
      </ChooseButton>
      {isOpen && (
        <PickerWrapper>
          <Field name={name}>
            {({ form }) => (
              <Picker
                onEmojiClick={(event, emojiObject) =>
                  onEmojiClick(event, emojiObject, form.setFieldValue)
                }
              />
            )}
          </Field>
        </PickerWrapper>
      )}
    </Wrapper>
  );
}
export default EmojiPicker;
