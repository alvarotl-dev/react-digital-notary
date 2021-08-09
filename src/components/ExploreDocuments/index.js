import React, {useState} from 'react'
import {ButtonExternal } from '../ButtonElements'
import { Container, Wrapper, Icon, TextH1, TextH2, SearchWrapper, SearchBar, SearchButton, SearchElement, 
SearchElLink, SearchForm, SearchBarLabel, SearchBarContainer, ButtonContainer, ButtonPage} from './ExploreElements';
import { PopUpCard, PopUpWrapper } from '../UploadDocument/UploadElements';
import { state } from '../../App';
import { enableMetamask } from '../../eth-files/web3';
import { getTransactionData, txData } from './ExploreFunctions';

const ExploreDocs = ({isEnabled}) => {

    enableMetamask();

    const [leftBtn, setLeftBtn] = useState(false);
    const [rightBtn, setRightBtn] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const [tx1 = {docName: '', auth: '', date: '', ipfsLink: '', isAvail: false}, setTx1] = useState({docName: '', auth: '', date: '', ipfsLink: '', isAvail: ''});
    const [tx2 = {docName: '', auth: '', date: '', ipfsLink: '', isAvail: false}, setTx2] = useState({docName: '', auth: '', date: '', ipfsLink: '', isAvail: ''});
    const [tx3 = {docName: '', auth: '', date: '', ipfsLink: '', isAvail: false}, setTx3] = useState({docName: '', auth: '', date: '', ipfsLink: '', isAvail: ''});

    async function loadPage(){
        state.pageValue = 1;
        await updateFirstTx();
        checkButtonVisibility();
        setIsLoaded(true); 
    }

    function checkButtonVisibility(){
        switch(state.pageValue){
            case (1):
                setLeftBtn(false);
                setRightBtn(true);
                if(state.maxPageValue == 1)
                    setRightBtn(false);

                break;

            case (state.maxPageValue):
                setLeftBtn(true);
                setRightBtn(false);
                break;

            default:
                if(!leftBtn) 
                    setLeftBtn(true);
                if(!rightBtn) 
                    setRightBtn(true);
                break;
        }
    }

    async function changePageValueRight(){
        state.pageValue++;
        checkButtonVisibility();
        updateFirstTx();
    }

    async function changePageValueLeft(){
        state.pageValue--;
        checkButtonVisibility();
        updateFirstTx();
    }
    
    

    async function updateFirstTx(){
        await getTransactionData();

        let i = 0;
        setTx1({
            
            docName: txData[i].documentName, 
            auth: txData[i].author, 
            date: txData[i].date, 
            ipfsLink: txData[i].ipfs,
            isAvail: txData[i].isAvailable
        }) 
        
        setTx2({
            docName: txData[i+1].documentName, 
            auth: txData[i+1].author, 
            date: txData[i+1].date, 
            ipfsLink: txData[i+1].ipfs,
            isAvail: txData[i+1].isAvailable
        }) 
        
        
        setTx3({
            docName: txData[i+2].documentName, 
            auth: txData[i+2].author, 
            date: txData[i+2].date, 
            ipfsLink: txData[i+2].ipfs,
            isAvail: txData[i+2].isAvailable
        })
    }
    
    
    return (
        <>
            <Container>
                <Wrapper>
                    <Icon to="/">ethNotary</Icon>
                    <PopUpWrapper isEnabled={isEnabled}>
                        <PopUpCard isEnabled={isEnabled}>
                            <TextH1> Install Metamask</TextH1>
                            <TextH2>You don't have installed Metamask. Return to the first step!</TextH2>
                            <ButtonExternal dark={true} primary={true} href="//www.metamask.io/download" target="_blank" aria-label="Metamask">Go to Metamask.io</ButtonExternal>
                        </PopUpCard>
                    </PopUpWrapper>
                    <SearchWrapper>
                        <SearchForm>
                            <SearchBarContainer>
                                <TextH1>Click on the button to load your documents.</TextH1>
                                
                                <SearchButton onClick={loadPage}>Load</SearchButton>
                            </SearchBarContainer>
                            
                            <SearchElement id='se1' isAvail={tx1.isAvail}>
                                <TextH1>{tx1.docName}</TextH1>
                                <TextH2>{tx1.auth}</TextH2>
                                <TextH2>{tx1.date}</TextH2>
                                <SearchElLink href={tx1.ipfsLink}>{tx1.ipfsLink}</SearchElLink>
                            </SearchElement>
                            <SearchElement id='se2' isAvail={tx2.isAvail}>
                                <TextH1>{tx2.docName}</TextH1>
                                <TextH2>{tx2.auth}</TextH2>
                                <TextH2>{tx2.date}</TextH2>
                                <SearchElLink href={tx2.ipfsLink}>{tx2.ipfsLink}</SearchElLink>
                            </SearchElement>
                            <SearchElement id='se3' isAvail={tx3.isAvail}>
                                <TextH1>{tx3.docName}</TextH1>
                                <TextH2>{tx3.auth}</TextH2>
                                <TextH2>{tx3.date}</TextH2>
                                <SearchElLink href={tx3.ipfsLink}>{tx3.ipfsLink}</SearchElLink>
                            </SearchElement>
                            <ButtonContainer isLoaded={isLoaded}>
                                <ButtonPage onClick={changePageValueLeft} isVisible={leftBtn} primary={true}> ⬅️ </ButtonPage>
                                <TextH2>{state.pageValue}</TextH2>
                                <ButtonPage onClick={changePageValueRight} isVisible={rightBtn} primary={true}> ➡️ </ButtonPage>
                            </ButtonContainer>
                        </SearchForm>
                    </SearchWrapper>
                </Wrapper>
            </Container>
        </>
    )
}

export default ExploreDocs
