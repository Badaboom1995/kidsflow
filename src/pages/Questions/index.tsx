import { MainTitle } from "parts/typography";
import React from "react";
import { Wrapper, Question, QuestionTitle, QuestionText } from "./styled";

function Questions() {
  return (
    <Wrapper>
      <MainTitle>Вопросы</MainTitle>
      <Question>
        <QuestionTitle>Как работает приложение?</QuestionTitle>
        <QuestionText>
          Вы скачиваете приложение на телефон, заполняете анкету на своего
          ребенка и получаете доступ к базе с продюсерами.
        </QuestionText>
      </Question>
      <Question>
        <QuestionTitle>Сколько стоят услуги?</QuestionTitle>
        <QuestionText>
          Вы скачиваете приложение на телефон, заполняете анкету на своего
          ребенка и получаете доступ к базе с продюсерами.
        </QuestionText>
      </Question>
      <Question>
        <QuestionTitle>Сколько стоят услуги?</QuestionTitle>
        <QuestionText>
          Вы скачиваете приложение на телефон, заполняете анкету на своего
          ребенка и получаете доступ к базе с продюсерами.
        </QuestionText>
      </Question>
      <Question>
        <QuestionTitle>Сколько стоят услуги?</QuestionTitle>
        <QuestionText>
          Вы скачиваете приложение на телефон, заполняете анкету на своего
          ребенка и получаете доступ к базе с продюсерами.
        </QuestionText>
      </Question>
    </Wrapper>
  );
}
export default Questions;
