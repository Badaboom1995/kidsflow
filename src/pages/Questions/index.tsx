import { Title } from "parts/typography";
import React from "react";
import { Wrapper, Question, QuestionTitle, QuestionText } from "./styled";

function Main() {
  return (
    <Wrapper>
      <Title>Вопросы</Title>
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
export default Main;
