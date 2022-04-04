import React, { useState, useEffect } from 'react';
import { PickerWrapper, Wrapper, ChooseButton } from './styled';
import Picker from 'emoji-picker-react';
import { Label } from 'parts/styled';
import { Field } from 'formik';

type EmojiPicker = {
  name: string;
};
function EmojiPicker({ name }: EmojiPicker) {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const onEmojiClick = (event, emojiObject, callback) => {
    setChosenEmoji(emojiObject);
    setOpen(false);
    callback(name, emojiObject.emoji);
  };

  return (
    <Field name={name}>
      {({ form, field }) => (
        <Wrapper>
          <Label>Иконка</Label>
          <ChooseButton type="button" onClick={() => setOpen(!isOpen)}>
            {chosenEmoji || field.value
              ? chosenEmoji?.emoji || field.value
              : '---'}
          </ChooseButton>
          {isOpen && (
            <PickerWrapper>
              <Picker
                onEmojiClick={(event, emojiObject) =>
                  onEmojiClick(event, emojiObject, form.setFieldValue)
                }
              />
            </PickerWrapper>
          )}
        </Wrapper>
      )}
    </Field>
  );
}
export default EmojiPicker;
