
import React from 'react';
import Input from 'parts/FormikFields/TextInput';
import {
    FormContent,
    GridContainer,
    GridElement,
} from 'parts/styled';

const LegalForm = () => {
    return (
        <FormContent>
            <GridContainer>
                <GridElement >
                    <Input
                        name="entity"
                        label="Юр.Лицо"
                    />
                </GridElement>
                <GridElement>
                    <Input
                        name="accountNumber"
                        label="Расчетный счет"
                    />
                </GridElement>
                <GridElement >
                    <Input
                        name="taxIdNumber"
                        label="ИНН"
                    />
                </GridElement>
                <GridElement >
                    <Input
                        name="primaryStateNumber"
                        label="ОГРН"
                    />
                </GridElement>
                <GridElement>
                    <Input
                        name="legalAddress"
                        label="Юр. адрес"
                    />
                </GridElement>
            </GridContainer>
        </FormContent>
    );
};

export default LegalForm;
