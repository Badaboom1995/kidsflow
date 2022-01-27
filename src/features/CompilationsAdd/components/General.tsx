import React from 'react';

import Input from 'parts/Input';
import Select from 'parts/Select';
import { GridContainer, GridElement } from 'parts/styled';
import EmojiPicker from 'parts/EmojiPicker';

function GeneralForm() {
  return (
    <div>
      <GridContainer>
        <GridElement>
          <Input name="name" label="Название подборки" />
        </GridElement>
        <GridElement col={3}>
          {/* TODO Переписать селект. Добавить поддержку типов кроме строки */}
          <Select
            name="isActive"
            options={[
              { name: 'Активна', value: 'active' },
              { name: 'Заблокирована', value: 'blocked' },
            ]}
            label="Статус"
            title="---"
            onChange={() => {}}
          />
        </GridElement>
        <GridElement col={3}>
          <EmojiPicker name="emoji" />
        </GridElement>
      </GridContainer>
    </div>
  );
}

export default GeneralForm;
