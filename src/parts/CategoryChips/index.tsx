import React from 'react';
import { useFormikContext } from 'formik';

import { IconCross } from '../../components/Icons';

import {
  CategoryChipsList,
  CategoryChipsItem,
  CategoryChipsTitle,
  CategoryChipsText,
  HiddenCheckbox,
  Wrapper,
} from './styled';
import { ICategoryChips } from './types';

function CategoryChips({
  title,
  text,
  list,
  value,
  name,
  touched,
  side,
  error,
}: ICategoryChips) {
  const formik = useFormikContext();
  return (
    <Wrapper>
      {title && <CategoryChipsTitle>{title}</CategoryChipsTitle>}
      {text && <CategoryChipsText>{text}</CategoryChipsText>}
      {error && (
        <p style={{ color: 'red' }}>
          {/* {error} */}
          {/*{touched ? error : ""}*/}
          {/*{touched ? 1 : 0}*/}
        </p>
      )}
      <CategoryChipsList>
        {list?.map((item) => (
          <CategoryChipsItem
            key={item.value}
            onClick={() => {
              side(item.value);
            }}
            className={
              (value?.includes(item.value) && 'active') ||
              (formik.values[name] === item.value && 'active')
            }
          >
            <HiddenCheckbox
              key={item.value}
              type="checkbox"
              name={name}
              value={item.value}
              onClick={side}
            />
            {value?.includes(item.value) && (
              <IconCross width={10} height={10} />
            )}
            {item.name}
          </CategoryChipsItem>
        ))}
      </CategoryChipsList>
    </Wrapper>
  );
}

export default CategoryChips;
