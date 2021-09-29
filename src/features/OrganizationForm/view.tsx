import React, { useEffect, useState } from "react";
import { Wrapper, MainArea, Left, Right, Header } from "./styled";
import BackSection from "parts/BackSection";
import { ButtonsArea, FormSectionTitle } from "parts/styled";
import Button from "parts/Button";
import Tabs from "parts/Tabs";
import { toast } from "react-toastify";
import GeneralForm from "./components/GeneralForm";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUploadIds } from "features/OrganizationForm/duck/slice";
import ContactsForm from "./components/ContactsForm";
import LegalForm from "./components/LegalForm";
import {
  isOnlineSchool,
  dataSelector,
  imagesSelector,
  scheduleSelector,
} from "./duck/selectors";
import PreviewCard from "./components/PreviewCard";
import Choose from "parts/Choose";
import { Status } from "parts/styled";

import { IAddOrgView } from "./types";

function AddOrgView({
  organizationId,
  formRefs,
  setFormRef,
  submitMethod,
}: IAddOrgView) {
  const dispatch = useDispatch();
  const history = useHistory();
  const isOnline = useSelector(isOnlineSchool);
  const images = useSelector(imagesSelector);
  const data = useSelector(dataSelector);
  const businessHours = useSelector(scheduleSelector);
  const defaultStatus = data.general
    ? data.general?.isActive
      ? "Активен"
      : "Заблокирован"
    : null;
  const [dataReady, setReady] = useState(false);
  const [status, setStatus] = useState(
    defaultStatus ? defaultStatus : "Активен"
  );

  const submitAll = () => {
    formRefs.general?.current.handleSubmit();
    formRefs.contacts?.current.handleSubmit();
    formRefs.legal?.current?.handleSubmit();
    setTimeout(() => {
      setReady(!dataReady);
    }, 0);
  };

  useEffect(() => {
    const onlineSchool = isOnline ? "OnlineSchool" : null;
    if (dataReady) {
      submitMethod(
        {
          ...data.general,
          ...data.contacts,
          ...data.legal,
          ...(onlineSchool
            ? {
                directions: [
                  data.general?.directions,
                  ...data.general?.category,
                  onlineSchool,
                ],
              }
            : {
                directions: [
                  data.general?.directions,
                  ...data.general?.category,
                ],
              }),
          about:
            data.general.about.charAt(0).toUpperCase() +
            data.general.about.slice(1),
          businessHours,
          uploadIds: images.map((item) => item.id),
          isActive: status === "Активен" ? true : false,
        },
        organizationId
      )
        .then(() => {
          toast.success("Готово!");
          dispatch(removeUploadIds());
          history.push(`/orgs`);
        })
        .catch((error) => {
          error.forEach((errorMessage) => toast.error(errorMessage));
        });
      setReady(!dataReady);
    }
  }, [dataReady]);

  return (
    <Wrapper>
      <BackSection />
      <Header>
        <FormSectionTitle>Карточка организации</FormSectionTitle>
        <Choose
          getViewComponent={(status, name) => (
            <Status status={status}>{name}</Status>
          )}
          onChange={(value) => {
            console.log(value);
            setStatus(value);
          }}
          options={[
            { name: "Заблокирован", status: "Заблокирован" },
            { name: "Активен", status: "Активен" },
          ]}
          current={status}
        />
      </Header>

      <MainArea>
        <Left>
          <Tabs
            activeId={1}
            tabs={[
              {
                id: 1,
                name: "Общее",
                content: (
                  <GeneralForm setRef={(ref) => setFormRef.general(ref)} />
                ),
              },
              {
                id: 2,
                name: "Контакты",
                content: <ContactsForm setFormRef={setFormRef.contacts} />,
              },
              {
                id: 3,
                name: "Юридические данные",
                content: <LegalForm setFormRef={setFormRef.legal} />,
              },
            ]}
          />
        </Left>
        <Right>
          <PreviewCard
            generalFormState={data.general}
            contactFormState={data.contacts}
            formalFormState={data.legal}
          />
        </Right>
      </MainArea>
      <ButtonsArea>
        <section>
          <Button onClick={submitAll}>Сохранить</Button>
          <Button>Добавить событие</Button>
        </section>
        <section>
          <Button type="ghost">Заблокировать</Button>
        </section>
      </ButtonsArea>
    </Wrapper>
  );
}
export default AddOrgView;
