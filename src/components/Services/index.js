import React from 'react'
import Icon1 from '../../images/undraw_Mobile_app_re_catg.svg';
import Icon2 from '../../images/undraw_Active_support_re_b7sj.svg';
import Icon3 from '../../images/crypto.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>----Mobile Support----</ServicesH2>
                    <ServicesP>Access your portfolio from anywhere with our mobile friendly platform.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>-----Tech support-----</ServicesH2>
                    <ServicesP>Reach us at anytime with around the clock tech support.  </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>----Crypto Support----</ServicesH2>
                    <ServicesP>Discover and manage all your crypto currency needs on one platform .</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
