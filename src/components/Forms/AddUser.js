import { useState, useContext } from 'react'
import { UserContext } from '../Users/userContext'
import { Form, Field } from 'react-final-form'
import { FormGroup, InputGroup, Button, Intent } from '@blueprintjs/core'
import styled from 'styled-components'
import {AppToaster} from "../AppToaster"
const FormContainer = styled.div`
  margin-top : 50px;
  margin-left: 100px;
  width: 400px;
  label {
    font-weight: 600;
    font-size: large;
  }
`
const RedSpan = styled.span`
  color: red;
`
export const AddUser = () => {
  const userContext = useContext(UserContext)

  const { AddData } = userContext

  const addUser = (values) => {
    console.log(values)
    AddData(values)
    
  }
  const validateFields = (values) => {
    console.info(values)
    const errors = {}
    if (!values.name || !values.name.trim()) {
      errors.name = 'Required'
    } 
    if (!values.email || !values.email.trim()) {
      errors.email = 'Required'
    } else if(!(/\S+@\S+\.\S+/.test(values.email))){
      errors.email="email shoud be in form text@text.com"
    }
    if (!values.phno || !values.phno.trim()) {
      errors.phno = 'Required'
    } else if (values.phno.trim().length<10){
      errors.phno="Minimum 10 numbers required"
    }

    return errors
  }
  return (
    <FormContainer>
      <Form
        onSubmit={addUser}
        validate={validateFields}
        render={({ handleSubmit, values ,reset,form}) => (
          <form onSubmit={handleSubmit}>
            <Field name='name'>
              {({ input, meta }) => (
                <FormGroup label='Name' labelFor='text-input'>
                  <InputGroup
                    {...input}
                    id='text-input'
                    placeholder='Enter your Name'
                  />
                  {meta.error && meta.touched && (
                    <RedSpan>{meta.error}</RedSpan>
                  )}
                </FormGroup>
              )}
            </Field>
            <Field name='email'>
              {({ input, meta }) => (
                <FormGroup label='Email' labelFor='email'>
                  <InputGroup
                    {...input}
                    id='email'
                    placeholder='Enter your email'
                  />
                  {meta.error && meta.touched && (
                    <RedSpan>{meta.error}</RedSpan>
                  )}
                </FormGroup>
              )}
            </Field>
            <Field name='phno'>
              {({ input, meta }) => (
                <FormGroup label='Mobile' labelFor='text-input'>
                  <InputGroup
                    {...input}
                    id='text-input'
                    placeholder='Enter your mobile no'
                  />
                  {meta.error && meta.touched && (
                    <RedSpan>{meta.error}</RedSpan>
                  )}
                </FormGroup>
              )}
            </Field>
             
            <Button intent={Intent.SUCCESS} onClick={async event=>{
            console.log(event);
            const error = await handleSubmit(event)
            console.log(error);
            if(error){
                return error;
            } else {
               console.log("in form");
            form.restart()
            AppToaster.show({message:"Hey! user added successfully",intent:Intent.SUCCESS})
            }
            
          }}>
              Submit
            </Button>
          </form>
        )}
      />
    </FormContainer>
  )
}
