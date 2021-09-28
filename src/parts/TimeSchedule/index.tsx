import React, { useState } from "react";
import TimePicker from "rc-time-picker";
import { days } from "./consts";
import moment from "moment";

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
  DaysItemText,
  FormTimeField,
  DayOffCheckbox,
  FormCheckboxLabel,
  Time,
  SubmitTime,
  TimeField,
  Rest,
} from "./styled";

import { ITimeSchedule, TData } from "./types";

function TimeSchedule({ title, onChange, initialValues }: ITimeSchedule) {
  const [dayDefaultData, setDayDefaultData] = useState({
    openTime: "10:00",
    closeTime: "20:00",
  });
  const dataArray = new Array(7)
    .fill(dayDefaultData)
    .map((item, index) => ({ completed: true, day: index, ...item }));
  const [data, SetData] = useState<TData>(
    initialValues?.businessHours.length
      ? initialValues?.businessHours
      : dataArray
  );
  const [isDisabled, SetIsDisabled] = useState<boolean>(false);
  const [activeIndex, SetActive] = useState<string>(null);

  const isDayOff =
    !data[activeIndex]?.openTime && !data[activeIndex]?.closeTime;

  const onTimeChange = ({
    value,
    type,
  }: {
    value: string;
    type: "openTime" | "closeTime";
  }) => {
    SetData(
      data?.map((item, index) =>
        index.toString() === activeIndex ? { ...item, [type]: value } : item
      )
    );
  };

  const setDayOff = () => {
    if (isDayOff) {
      SetData(
        data?.map((item, index) =>
          index.toString() === activeIndex
            ? { ...dayDefaultData, completed: true }
            : item
        )
      );
      return;
    }

    SetData(
      data?.map((item, index) =>
        index.toString() === activeIndex ? null : item
      )
    );
  };

  const onDayChange = () => {
    const newData = data?.map((item, index) =>
      index.toString() === activeIndex ? { ...item, completed: true } : item
    );
    onChange(
      newData.reduce((accum, item, index) => {
        if (!item.closeTime) return accum;
        return [
          ...accum,
          {
            day: index,
            openTime: item.openTime,
            closeTime: item.closeTime,
          },
        ];
      }, [])
    );
    SetData(newData);

    if (activeIndex === "6") {
      SetActive(null);
      return;
    }
    SetActive((parseInt(activeIndex) + 1).toString());
  };

  return (
    <Wrapper>
      <TitleCover>
        <Title>{title}</Title>
        <CloseForm
          type="button"
          onClick={() => {
            SetIsDisabled(!isDisabled);
          }}
        >
          {isDisabled ? "Открыть" : "Закрыть"}
        </CloseForm>
      </TitleCover>

      <ScheduleCover>
        <DaysCover>
          <DaysTitle>
            Выберите дни недели
            {/* <div>
              <button
                onClick={() =>
                  setDayDefaultData({
                    openTime: "9:00",
                    closeTime: "22:30",
                  })
                }
              >
                9:00 - 22:30
              </button>
              <button
                onClick={() =>
                  setDayDefaultData({
                    openTime: "8:30",
                    closeTime: "21:00",
                  })
                }
              >
                8:30 - 21:00
              </button>
            </div> */}
          </DaysTitle>
          <DaysList>
            {days.map(({ index, name }, i) => {
              const currentData = data[i];
              return (
                <DaysItem
                  key={index}
                  onClick={() => {
                    onDayChange();
                    SetActive(index);
                  }}
                >
                  <DaysItemText
                    active={index === activeIndex}
                    completed={currentData?.completed}
                  >
                    {name}
                  </DaysItemText>
                  {currentData?.completed && (
                    <>
                      <Time>{currentData?.openTime}</Time>
                      <Time>{currentData?.closeTime}</Time>
                    </>
                  )}
                  {currentData === null ||
                    (!currentData?.openTime && !currentData?.closeTime && (
                      <Rest>
                        <span role="img" aria-label="sleep">
                          😴
                        </span>
                      </Rest>
                    ))}
                </DaysItem>
              );
            })}
          </DaysList>
        </DaysCover>

        {activeIndex && !isDisabled && (
          <FormCover>
            <FormTitle>Выберите время</FormTitle>

            <FormTime>
              <FormTimeField>
                <TimeField>
                  <TimePicker
                    clearIcon={<span></span>}
                    onChange={(value) => {
                      onTimeChange({
                        value: value.format("HH:mm"),
                        type: "openTime",
                      });
                    }}
                    showSecond={false}
                    placeholder="чч : мм"
                    disabled={isDisabled}
                    value={
                      data[activeIndex]?.openTime
                        ? moment(data[activeIndex]?.openTime, "hh:mm")
                        : moment("00:00", "hh:mm")
                    }
                  />
                </TimeField>
                <TimeField>
                  <TimePicker
                    clearIcon={<span></span>}
                    onChange={(value) => {
                      onTimeChange({
                        value: value.format("HH:mm"),
                        type: "closeTime",
                      });
                    }}
                    showSecond={false}
                    placeholder="чч : мм"
                    disabled={isDisabled}
                    value={
                      data[activeIndex]?.closeTime
                        ? moment(data[activeIndex]?.closeTime, "hh:mm")
                        : moment("00:00", "hh:mm")
                    }
                  />
                </TimeField>

                <SubmitTime
                  style={{ position: "relative", zIndex: 9 }}
                  type="button"
                  onClick={() => {
                    onDayChange();
                  }}
                >
                  OK
                </SubmitTime>
              </FormTimeField>
            </FormTime>

            <FormTime>
              <FormCheckboxLabel>
                <span>Выходной</span>
                <DayOffCheckbox
                  name="dayOff"
                  type="checkbox"
                  checked={isDayOff}
                  value="123"
                  className="checkbox"
                  onChange={() => {
                    setDayOff();
                  }}
                />
                <span className="visibleControl" />
              </FormCheckboxLabel>
            </FormTime>
          </FormCover>
        )}
      </ScheduleCover>
    </Wrapper>
  );
}

export default TimeSchedule;
