import React from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './styled';
import { BackButton } from 'parts/styled';
import Choose from 'parts/Choose';

function BackSection() {
  const history = useHistory();
  return (
    <Wrapper>
      <BackButton
        type="button"
        onClick={() => {
          history.goBack();
        }}
      >
        Назад
      </BackButton>
    </Wrapper>
  );
}
export default BackSection;
