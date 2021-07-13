import React, {useEffect, useRef, useState} from "react";
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
import { removeUploadIds, removeUploadId } from "features/AddOrg/duck/slice";
import {
  currentOrganizationSelector,
  uploadIdsSelector,
} from "features/AddOrg/duck/selectors";
import { deleteImage, uploadImage, uploadExtraImage } from "./duck/actions";
import PreviewCard from "./components/PreviewCard";
import {TGeneralFormState, TContactsFormState, TFormalFormState} from "./types";
import TimeSchedule from "../../parts/TimeSchedule";


//TODO. Убрать из view логику и вынести в компоненты формы
function AddOrgView({
  organizationId,
}: {
  organizationId: string;
  formRefs: { general: any; contacts: any; legal: any };
  setFormRef: (ref: any) => void;
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const uploadIds = useSelector(uploadIdsSelector);
  const currentOrganization = useSelector(currentOrganizationSelector);
  const photos = currentOrganization?.photos;

  const [generalFormState, setGeneralFormState] = useState<TGeneralFormState>();
  const [contactFormState, setContactFormState] = useState<TContactsFormState>();
  const [formalFormState, setFormalFormState] = useState<TFormalFormState>();
  const refLeftElement = useRef<HTMLDivElement>(null);
  const [maxRightContentHeight, setMaxRightContentHeight] = useState<number>(0);

  const submitMethod = currentOrganization
    ? organizationsService.update
    : organizationsService.create;

  useEffect(() => {
    if(refLeftElement.current){
      setMaxRightContentHeight(refLeftElement.current.clientHeight)
    }
  }, [refLeftElement])

  const {
    address,
    phoneNumber,
    email,
    site,
    entity,
    accountNumber,
    taxIdNumber,
    primaryStateNumber,
    legalAddress,
  } = currentOrganization || {};

  const formDataContacts = {
    address,
    phoneNumber,
    email,
    site,
  };

  const formDataLegal = {
    entity,
    accountNumber,
    taxIdNumber,
    primaryStateNumber,
    legalAddress,
  };

  const [generalRef, setGeneralRef] = useState(null);
  const [contactRef, setContactRef] = useState(null);
  const [formalRef, setFormalRef] = useState(null);

  const [dataReady, setReady] = useState(false);

  const [generalData, setGeneral] = useState(null);
  const [contactData, setContact] = useState(null);
  const [formalData, setFormal] = useState(null);

  const submitAll = () => {
    generalRef?.current?.handleSubmit();
    contactRef?.current?.handleSubmit();
    formalRef?.current?.handleSubmit();
    setTimeout(() => {
      setReady(!dataReady);
    }, 0);
  };
  const onUpload = (file) => {
    dispatch(uploadImage(file));
  };
  const onExtraUpload = (file) => {
    dispatch(uploadExtraImage({ file, orgId: currentOrganization.id }));
  };

  useEffect(() => {
    if (dataReady) {
      submitMethod(
        {
          ...generalData,
          ...contactData,
          ...formalData,
          directions: [generalData?.directions, generalData?.category],
          businessHours: [
            {
              day: 0,
              openTime: "10:00",
              closeTime: "19:00",
            },
          ],
          uploadIds: uploadIds,
          status: "Active",
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
        <Left>
          <FormSectionTitle offsetLeft={60}>
            Карточка организации (251489):
          </FormSectionTitle>
        </Left>
        <Right>
          <StatusHandler
            options={[
              { name: "Заблокирован", status: "disabled" },
              { name: "Активен", status: "active" },
            ]}
            current="Активен"
          />
        </Right>
      </Header>
      <MainArea>
        <Left ref={refLeftElement}>
          <Tabs
            activeId={1}
            tabs={[
              {
                id: 1,
                name: "Общее",
                content: (
                  <div>
                    <GeneralForm
                      setGeneral={(values) => {
                        setGeneral(values);
                      }}
                      setRef={setGeneralRef}
                      setFormState={setGeneralFormState}
                    />
                    <Row>
                      {photos ? (
                        <>
                          {photos.map((item) => (
                            <UpoadFile
                              label="Добавить фото"
                              imageUrl={item.cloudUrl}
                              onRemove={() => {
                                dispatch(
                                  deleteImage({
                                    orgId: currentOrganization.id,
                                    uploadId: item.id,
                                  })
                                );
                              }}
                            />
                          ))}
                          <UpoadFile
                            label="Добавить фото"
                            onAdd={onExtraUpload}
                          />
                        </>
                      ) : (
                        <>
                          <UpoadFile
                            label="Добавить фото"
                            onAdd={onUpload}
                            onRemove={() => {
                              dispatch(removeUploadId(uploadIds[0]));
                            }}
                          />
                          {uploadIds.map((id) => (
                            <UpoadFile
                              label="Добавить фото"
                              onAdd={onUpload}
                              onRemove={() => {
                                dispatch(removeUploadId(id));
                              }}
                            />
                          ))}
                        </>
                      )}
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
                        { name: "businessHours", label: "Режим работы", type: "timeSchedule"},
                      ],
                    }}
                    onSubmit={(values) => {
                      setContact(values);
                    }}
                    setRef={setContactRef}
                    initialValues={formDataContacts}
                    setFormState={setContactFormState}
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
                          { name: "accountNumber", label: "Расчетный счет" },
                          { name: "taxIdNumber", label: "ИНН" },
                          { name: "primaryStateNumber", label: "ОГРН" },
                          { name: "legalAddress", label: "Юр. адрес" },
                        ],
                      }}
                      onSubmit={(values) => {
                        setFormal(values);
                      }}
                      initialValues={formDataLegal}
                      setRef={setFormalRef}
                      setFormState={setFormalFormState}
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
        <Right>
          <PreviewCard
            maxRightContentHeight={maxRightContentHeight}
            generalFormState={generalFormState}
            contactFormState={contactFormState}
            formalFormState={formalFormState}
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
