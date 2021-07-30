import React, {useState} from "react";
import cn from "classnames";
import TimePicker from "rc-time-picker";
import moment from 'moment';

import {
  Wrapper,
  Title,
  TitleCover,
  CloseForm,
  DaysCover,
  ScheduleCover,
  DaysTitle,
  DaysList,
  DaysItem,
  FormCover,
  FormTitle,
  FormTime,
  FormTimeTitle,
  DaysItemText,
  DaysItemIcon,
  FormTimeField,
  DayOffCheckbox,
  FormCheckboxLabel,
} from "./styled";

import { ITimeSchedule } from "./types";
import Checkbox from "../Checkbox";

function TimeSchedule({title}:ITimeSchedule){
  const [isDisabled, SetIsDisabled] = useState<boolean>(false);

  const isActive = true;
  const isDone = true;

  const onOpenChange = (value) => {
    console.log("value", value);
  }

  const onCloseChange = (value) => {
    console.log("value", value);
  }

  return(
    <Wrapper>
      <TitleCover>
        <Title>{title}</Title>
        <CloseForm>Закрыть</CloseForm>
      </TitleCover>

      <ScheduleCover>
        <DaysCover>
          <DaysTitle>
            Выберите дни недели
          </DaysTitle>
          <DaysList>
            <DaysItem className={cn({active: isActive})}>
              <DaysItemText>пн</DaysItemText>
            </DaysItem>
            <DaysItem className={cn({done: isDone})}>
              <DaysItemText>вт</DaysItemText>
              {isDone && <DaysItemIcon />}
            </DaysItem>
            <DaysItem>
              <DaysItemText>ср</DaysItemText>
            </DaysItem>
          </DaysList>
        </DaysCover>

        <FormCover>
          <FormTitle>
            Выберите время
          </FormTitle>

          <FormTime>
            <FormTimeTitle>
              C
            </FormTimeTitle>
            <FormTimeField>
              <TimePicker
                onChange={onOpenChange}
                showSecond={false}
                placeholder="чч : мм"
                disabled={isDisabled}
              />
            </FormTimeField>
          </FormTime>

          <FormTime>
            <FormTimeTitle>
              До
            </FormTimeTitle>
            <FormTimeField>
              <TimePicker
                onChange={onCloseChange}
                showSecond={false}
                placeholder="чч : мм"
                disabled={isDisabled}
              />
            </FormTimeField>
          </FormTime>

          <FormTime>
            <FormCheckboxLabel>
              <span>
                Выходной
              </span>
              <DayOffCheckbox
                type="checkbox"
                name="dayOff"
                value="123"
                className="checkbox"
              />
            </FormCheckboxLabel>

          </FormTime>

        </FormCover>
      </ScheduleCover>

    </Wrapper>
  )
}

export default TimeSchedule;