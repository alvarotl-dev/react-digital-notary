import React from 'react'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP } from './ServicesElements'
import Icon1 from '../../images/wallet.svg'
import Icon2 from '../../images/documents-saving.svg'
import Icon3 from '../../images/ipfs-logo.svg'

const Services = ({id}) => {
    return (
        <ServicesContainer id={id}>
            <ServicesH1> Features </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2> Reduce Expenses </ServicesH2>
                    <ServicesP> Helping to save your documents for cheap. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2> Easy To Use </ServicesH2>
                    <ServicesP> Get your wallet and start uploading documents. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2> IPFS Powered </ServicesH2>
                    <ServicesP> Saved in the Blockchain forever. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
