import React from 'react'
import { Container, Form, FormContent, FormH1, FormWrap, Icon, FormLabel, FormInput, FormButton, Text, FormFile} from './UploadElements'

const UploadDoc = () => {

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">ethNotary</Icon>
                    <FormContent >
                        <Form action="#">
                            <FormH1> Submit your document in the Blockchain</FormH1>
                            <FormLabel htmlFor='for'>Document Name</FormLabel>
                            <FormInput type='text' required/>
                            <FormLabel htmlFor='for'>Author</FormLabel>
                            <FormInput type='text' required/>
                            <FormLabel htmlFor='for'>Your File</FormLabel>
                            <FormFile type='file' required/>
                            <FormButton type='submit'>Continue</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default UploadDoc