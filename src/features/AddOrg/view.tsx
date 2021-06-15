import React, { useEffect, useState } from "react";
import { Wrapper, MainArea, Left, Right, Row, Docs, Header } from "./styled";
import FormGenerator from "parts/FormGenerator";
import BackSection from "parts/BackSection";
import { FormSectionTitle, ButtonsArea } from "parts/styled";
import UpoadFile from "parts/UpoadFile";
import Button from "parts/Button";
import Tabs from "parts/Tabs";
import StatusHandler from "parts/StatusHandler";
import { toast } from "react-toastify";
import organizationsService from "services/organizations";
import GeneralForm from "./components/GeneralForm";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUploadId, removeUploadIds } from "features/AddOrg/duck/slice";
import { uploadIdsSelector } from "features/AddOrg/duck/selectors";

function AddOrgView({
  initialData,
  organizationId,
}: {
  organizationId: string;
  initialData?: {
    general: any;
    contacts: any;
    legal: any;
  };
  formRefs: { general: any; contacts: any; legal: any };
  setFormRef: (ref: any) => void;
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const uploadIds = useSelector(uploadIdsSelector);
  const submitMethod = initialData
    ? organizationsService.update
    : organizationsService.create;

  const [generalRef, setGeneralRef] = useState(null);
  const [contactRef, setContactRef] = useState(null);
  const [formalRef, setFormalRef] = useState(null);
  const [choosedPartner, setChoosedPartner] = useState(null);

  const [status, setStatus] = useState(0);

  const [generalData, setGeneral] = useState(null);
  const [contactData, setContact] = useState(null);
  const [formalData, setFormal] = useState(null);

  const submitAll = () => {
    generalRef?.current?.handleSubmit();
    contactRef?.current?.handleSubmit();
    formalRef?.current?.handleSubmit();
    setTimeout(() => {
      submitMethod(
        {
          ...generalData,
          ...contactData,
          ...formalData,
          partnerId: choosedPartner,
          directions: [generalData?.directions],
          businessHours: [
            {
              day: 0,
              openTime: "10:00",
              closeTime: "19:00",
            },
          ],
          uploadIds: uploadIds,
          status,
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
    }, 300);
  };
  const onUploadSuccess = (id) => {
    dispatch(addUploadId(id));
  };

  // useEffect(() => {
  //   submitMethod(
  //     {
  //       ...generalData,
  //       ...contactData,
  //       ...formalData,
  //       partnerId: choosedPartner,
  //       directions: [generalData.directions],
  //       businessHours: [
  //         {
  //           day: 0,
  //           openTime: "10:00",
  //           closeTime: "19:00",
  //         },
  //       ],
  //       uploadIds: uploadIds,
  //       status,
  //     },
  //     organizationId
  //   )
  //     .then(() => {
  //       toast.success("Готово!");
  //       dispatch(removeUploadIds());
  //       history.push(`/orgs`);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       error.forEach((errorMessage) => toast.error(errorMessage));
  //     });
  // }, [formReady]);

  return (
    <Wrapper>
      <BackSection />
      <Header>
        <Left>
          <FormSectionTitle offsetLeft={60}>
            Карточка организации (251489):
          </FormSectionTitle>
        </Left>
        <Right>
          <StatusHandler
            onChange={(status) => {
              const statusId = status === "disabled" ? 0 : 1;
              setStatus(statusId);
            }}
            options={[
              { name: "Заблокирован", status: "disabled" },
              { name: "Активен", status: "active" },
            ]}
            current="Активен"
          />
        </Right>
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
                  <div>
                    <GeneralForm
                      choosePartner={setChoosedPartner}
                      initialData={initialData?.general}
                      setGeneral={(values) => {
                        setGeneral(values);
                      }}
                      setRef={setGeneralRef}
                    />
                    <Row>
                      {/* <UpoadFile
                        label="Добавить логотип"
                        onSuccess={onUploadSuccess}
                      /> */}
                      <UpoadFile
                        label="Добавить фото"
                        onSuccess={onUploadSuccess}
                      />
                      <UpoadFile
                        label="Добавить фото"
                        onSuccess={onUploadSuccess}
                      />
                      <UpoadFile
                        label="Добавить фото"
                        onSuccess={onUploadSuccess}
                      />
                    </Row>
                  </div>
                ),
              },
              {
                id: 2,
                name: "Контакты",
                content: (
                  <FormGenerator
                    config={{
                      title: "Контакты",
                      settings: { defaultType: "text", defaultCol: 6 },
                      fields: [
                        { name: "address", label: "Адрес" },
                        { name: "phoneNumber", label: "Телефон" },
                        { name: "email", label: "Email" },
                        { name: "site", label: "Сайт" },
                      ],
                    }}
                    onSubmit={(values) => {
                      setContact(values);
                    }}
                    setRef={setContactRef}
                    initialValues={initialData?.contacts}
                  />
                ),
              },
              {
                id: 3,
                name: "Юридические данные",
                content: (
                  <>
                    <FormGenerator
                      config={{
                        title: "Юридические данные",
                        settings: { defaultType: "text", defaultCol: 6 },
                        fields: [
                          { name: "entity", label: "Юр.Лицо" },
                          { name: "accountAddress", label: "Расчетный счет" },
                          { name: "taxIdNumber", label: "ИНН" },
                          { name: "primaryStateNumber", label: "ОГРН" },
                          { name: "legalAddress", label: "Юр. адрес" },
                        ],
                      }}
                      onSubmit={(values) => {
                        setFormal(values);
                      }}
                      setRef={setFormalRef}
                    />
                    <Row>
                      <FormSectionTitle>Документы:</FormSectionTitle>
                      <Docs>
                        <UpoadFile label="Добавить документ" file />
                        <UpoadFile label="Добавить документ" file />
                        <UpoadFile label="Добавить документ" file />
                      </Docs>
                    </Row>
                  </>
                ),
              },
            ]}
          />
        </Left>
        <Right></Right>
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
