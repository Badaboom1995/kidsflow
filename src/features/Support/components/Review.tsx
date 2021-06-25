import React, { useState } from "react";
import FormGenerator from "parts/FormGenerator";
import { ModalFooter } from "../styled";

import Button from "parts/Button";
const data = {
  status: "blocked",
  partner: "assd",
  date: "qwe",
  phone: "adsasd",
  email: "adsasd",
  reviewText: "reviewText",
  decision: "decision",
};

function Review() {
  const [reviewRef, setRef] = useState(null);

  return (
    <>
      <FormGenerator
        transparent
        config={{
          settings: { defaultType: "text", defaultCol: 6 },

          fields: [
            { name: "partner", label: "Партнер" },
            { name: "date", label: "Дата создания" },
            { name: "phone", label: "Телефон" },
            { name: "email", label: "E-mail" },
            {
              name: "reviewText",
              label: "Текст обращения",
              type: "textarea",
              col: 12,
            },
            {
              name: "decision",
              label: "Решение по обращению",
              type: "textarea",
              col: 12,
            },
          ],
        }}
        onSubmit={(values) => {}}
        initialValues={data}
        setRef={setRef}
      />
      <ModalFooter>
        <Button
          onClick={() => {
            reviewRef?.current.handleSubmit();
          }}
        >
          Сохранить
        </Button>
      </ModalFooter>
    </>
  );
}
export default Review;
