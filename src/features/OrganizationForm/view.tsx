import React, { useEffect, useState } from "react";
import { Wrapper, MainArea, Left, Right, Header } from "./styled";
import BackSection from "parts/BackSection";
import { FormSectionTitle, ButtonsArea } from "parts/styled";
import Button from "parts/Button";
import Tabs from "parts/Tabs";
import StatusHandler from "parts/StatusHandler";
import { toast } from "react-toastify";
import GeneralForm from "./components/GeneralForm";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUploadIds } from "features/OrganizationForm/duck/slice";
import { imagesSelector } from "features/OrganizationForm/duck/selectors";
import { refType } from "common/types";
import ContactsForm from "./components/ContactsForm";
import LegalForm from "./components/LegalForm";
import { dataSelector } from "./duck/selectors";
import PreviewCard from "./components/PreviewCard";

interface IAddOrgView {
  organizationId: string;
  submitMethod:
    | ((body: any) => Promise<any>)
    | ((body: any, id: string) => Promise<any>);
  formRefs: {
    general: refType;
    contacts: refType;
    legal: refType;
  };
  setFormRef: {
    general: (p: refType) => void;
    contacts: (p: refType) => void;
    legal: (p: refType) => void;
  };
}

function AddOrgView({
  organizationId,
  formRefs,
  setFormRef,
  submitMethod,
}: IAddOrgView) {
  const dispatch = useDispatch();
  const history = useHistory();
  const images = useSelector(imagesSelector);
  const data = useSelector(dataSelector);

  const [dataReady, setReady] = useState(false);

  const submitAll = () => {
    formRefs.general?.current.handleSubmit();
    formRefs.contacts?.current.handleSubmit();
    formRefs.legal?.current?.handleSubmit();
    setTimeout(() => {
      setReady(!dataReady);
    }, 0);
  };

  useEffect(() => {
    if (dataReady) {
      console.log(organizationId);
      submitMethod(
        {
          ...data.general,
          ...data.contacts,
          ...data.legal,
          directions: [data.general?.directions, data.general?.category],
          businessHours: [
            {
              day: 0,
              openTime: "10:00",
              closeTime: "19:00",
            },
          ],
          uploadIds: images.map((item) => item.id),
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
            maxRightContentHeight={window.innerHeight}
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
