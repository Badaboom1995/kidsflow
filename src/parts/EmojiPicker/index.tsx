import React, { useState, useEffect } from 'react';
import { PickerWrapper, Wrapper, Emoji, ChooseButton } from './styled';
import Picker from 'emoji-picker-react';
import Button from 'parts/Button';
import { Label } from 'parts/styled';

function EmojiPicker() {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setOpen(false);
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
          <Picker onEmojiClick={onEmojiClick} />
        </PickerWrapper>
      )}
    </Wrapper>
  );
}
export default EmojiPicker;
