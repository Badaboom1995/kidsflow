import React, {useEffect, useState} from 'react';
import Input from 'parts/FormikFields/TextInput';
import {
    FormContent,
    GridContainer,
    GridElement,
} from 'parts/styled';

import SelectNew from "parts/SelectNew";
import TimeSchedule from "parts/TimeSchedule";
import {useSelector} from "react-redux";
import {selectStations} from "ducks/dicts/selectors";
import Address from "parts/Address";
import {useFormikContext} from "formik";

const ContactsForm = () => {
   const metro = useSelector(selectStations)
   const formik: any = useFormikContext()
    return (
        <FormContent>
            <GridContainer>
                <GridElement>
                    <Address name="address"/>
                </GridElement>
                <GridElement>
                    <Input
                        name="phoneNumber"
                        label="Телефон"
                    />
                </GridElement>
                <GridElement >
                    <Input
                        name="email"
                        label="Email"
                    />
                </GridElement>
                <GridElement >
                    <Input
                        name="site"
                        label="Сайт"
                    />
                </GridElement>
                <GridElement >
                    <SelectNew
                        name="metroStation"
                        title='---'
                        emptyDictTitle='Загрузка...'
                        label="Метро"
                        options={metro}
                        onChange={() => {}}
                    />
                </GridElement>
                <GridElement >
                    {console.log(formik.values)}
                    <TimeSchedule initialValues={formik.values} title='Расписнаие' onChange={(values) => {formik.setFieldValue('businessHours', values)}}/>
                </GridElement>
            </GridContainer>
        </FormContent>
    );
};

export default ContactsForm;
