import React, { useEffect } from 'react';
import ErrorContainier from '../ErrorContainier';
import { StyledInput, Wrapper, InputContainer, Textarea } from './styled';
import { Label } from '../styled';
import { Field } from 'formik';
import { setAddress } from 'features/OrganizationForm/duck/slice';

interface IInput {
  placeholder?: string;
  error?: string;
  icon?: string;
  name: string;
  password?: boolean;
  touched?: boolean;
  label?: string | React.ReactNode;
  type?: string;
  centered?: boolean;
  value?: string;
  getPrompt?: (value: string) => string;
  getDicts?: (value: string) => string;
}
export default function Input({
  placeholder,
  error,
  icon,
  name,
  touched,
  label,
  type,
  centered,
}: IInput) {
  useEffect(() => {
    // --- getDict
    const getDictsFuncs = [];
    const getDicts = '';
    if (!getDictsFuncs.includes(getDicts)) {
      getDictsFuncs.push(getDicts);
    }
    // ---- connect redux
    const onChange = () => {
      // field.onChange
      // props.onChange
      // contekst.addToRedux
    };
    //-- depends on
    const dependsName = '';
    //conteks.addDependency(fieldName, dependsName)
    //-- loadDicts
    /*
    Object.keys(graph).map(nodeKey) => {
      independent = []
      if(graph[nodeKey] === null){
      independent.push()
    }
      await load(independent)
        deps = {key: 6, 1:6, 2:3,3:4, 4:6, new: 2}
        loaded = [0,6]
        getQueue(deps) {
          const loaded = [0,6]
          const recursive = () => {
            const keys = Object.keys(deps)
            let value = deps[keys[0]]
            while(!loaded.include(value)){
              value = deps[value]
            }
            const rootKey = keys.find(key => deps[key] === value )  
            loaded.push(rootKey)
            delete deps[rootKey]
            if(keys.length == 2) return
            return recursive()
          }
          
          return 
        }
    }
    */
  }, []);
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <ErrorContainier error={touched ? error : ''}>
        {type === 'textarea' ? (
          <InputContainer icon={icon} centered={centered}>
            <Field name={name}>
              {({ field }) => (
                <Textarea
                  name={name}
                  value={field.value}
                  onChange={field.onChange}
                  rows={6}
                />
              )}
            </Field>
          </InputContainer>
        ) : (
          <InputContainer icon={icon} centered={centered}>
            <StyledInput
              type={type || 'text'}
              name={name}
              placeholder={placeholder || '-- -- -- -- --'}
              error={error}
              touched={touched ? 1 : 0}
              centered={centered}
            />
          </InputContainer>
        )}
      </ErrorContainier>
    </Wrapper>
  );
}
