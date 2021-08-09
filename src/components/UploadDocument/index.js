import React, {useState, useEffect} from 'react'
import { ButtonExternal } from '../ButtonElements'
import { Container, Form, FormContent, FormH1, FormWrap, Icon, FormLabel, FormInput, FormButton, Text, TextHref, FormFile, PopUpWrapper, PopUpCard, FormH2, FormSecondary, TextP} from './UploadElements'
import { captureFile, submitDocument } from './UploadFunctions';
import { state } from '../../App';
import { enableMetamask } from '../../eth-files/web3';


export const UploadDoc = ({isEnabled}) => {
    
    enableMetamask();

    
    const [isSubmitted, setIsSubmitted] = useState(false);

    function endSubmit(){
        setIsSubmitted(true);
    }

    useEffect(()=> {
        window.addEventListener('changeSubmitted', endSubmit);
        console.log('Listening...');
    }, []);

    // Añadir en el FormContent un isSubmitted para ocultar el form y poner otro una vez haya sido subido el archivo a modo de confirmación.
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">ethNotary</Icon>
                    <PopUpWrapper isEnabled={isEnabled}>
                        <PopUpCard isEnabled={isEnabled}>
                            <FormH1> Install Metamask</FormH1>
                            <FormH2>You don't have installed Metamask. Return to the first step!</FormH2>
                            <ButtonExternal dark={true} primary={true} href="//www.metamask.io/download" target="_blank" aria-label="Metamask">Go to Metamask.io</ButtonExternal>
                        </PopUpCard>
                    </PopUpWrapper>
                    <FormContent isEnabled={isEnabled}>
                        <Form action="?" onSubmit={submitDocument} isSubmitted={isSubmitted}>
                            <FormH1> Submit your document in the Blockchain</FormH1>
                            <FormLabel htmlFor='for'>Document Name</FormLabel>
                            <FormInput type='text' id='doc-name-input' maxLength="36"  required/>
                            <FormLabel htmlFor='for'>Author</FormLabel>
                            <FormInput type='text' id='author-input' maxLength="36" required/>
                            <FormLabel htmlFor='for'>Your File</FormLabel>
                            <FormFile type='file' required onChange={captureFile}/>
                            <FormButton type='submit'>Continue</FormButton>
                        </Form>

                        <FormSecondary action="#" isSubmitted={isSubmitted}>
                            <FormH1> Your file has been submitted </FormH1>
                            <FormH2>Transaction Hash: </FormH2>
                            <TextHref id='transaction-hash' href="//rinkeby.etherscan.io/tx/" >{state.transactionHash}</TextHref>
                        </FormSecondary>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default UploadDoc