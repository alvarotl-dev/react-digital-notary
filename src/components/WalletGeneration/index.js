import React, {useState, useEffect} from 'react'
import { enableMetamask } from '../../eth-files/web3'
import { ButtonExternal } from '../ButtonElements'
import { Container, Form, FormButton, FormContent, FormH1, FormH2, FormInput, FormSecondary, FormWrap, Icon, ImgWrap, Img, TextP } from './WalletGenElements'
import { state } from '../../App';
import { createEthAccount } from './WalletGenFunctions'
import ImgInstruction from '../../images/new-wallet-2.png'

export const WalletGenPage = () => {

    const [isCreated, setIsCreated] = useState(false);

    function endSubmit(){
        setIsCreated(true);
        console.log('This has been setted to true');
    }

    useEffect(()=> {
        window.addEventListener('walletCreated', endSubmit);
        console.log('Listening...');
    }, []);


    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">ethNotary</Icon>
                    <FormContent>
                        <Form action="#" onSubmit={createEthAccount} isSubmitted={isCreated}>
                            <FormH1> Input whatever you want to generate entropy!</FormH1>
                            <FormH2> Entropy adds a layer of randomness to the generation, so write it down some words or random letters. </FormH2>
                            <FormInput type='text' id='entropy-input' required/>
                            <FormButton type='submit'>Continue</FormButton>
                        </Form>

                        <FormSecondary action="#" isSubmitted={isCreated}>
                            <FormH1> Here is your new wallet! </FormH1>
                            <FormH2> Address: <TextP>{state.genWallet}</TextP> </FormH2>
                            <FormH2> Private Key: <TextP>{state.genWalletPKEY}</TextP> </FormH2>
                            <ImgWrap>
                                <Img src={ImgInstruction} alt={"Instructions"}/>
                            </ImgWrap>
                        </FormSecondary>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default WalletGenPage
