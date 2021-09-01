import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JamGadang from '../assets/images/jam-gadang.svg'
import MonumenNasional from '../assets/images/monumen-nasional.svg'
import LogoUGM from '../assets/images/logo-ugm.png'
import LogoKMTK from '../assets/images/logo-kmtk.png'
import LogoKabinetKMTK from '../assets/images/logo-kabinet-kmtk.png'
import { use100vh } from 'react-div-100vh'

const Wrapper = styled.section`
    width: 100vw;
    background: #FCF2E3;
    position: relative;
`;

const CircleDecorative = styled.div`
    width: 35vw;
    height: 35vw;
    background: #F5DFBC;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 768px) {
        width: 50vw;
        height: 50vw;
    }
`;

const ComingSoonTypography = styled.p`
    font-family: 'Agrandir Grand Heavyy';
    font-size: 6.5vw;
    color: #ACA77E;
    text-align: center;

    margin: 2.5vw 0 -10vw 0;

    @media screen and (max-width: 768px) {
        font-size: 8.5vw;
    }
`;

const PemiluFormaturTypography = styled.span` 
    font-family: 'Amsterdam Four';
    font-size: 6.0vw;
    color: #BA3242;
    text-align: center;

    display: inline;
    margin: 0;
    z-index: 1;

    @media screen and (max-width: 768px) {
        font-size: 7.0vw;
    }
`;

const KMTK2021Typography = styled.p` 
    font-family: 'Montserrat';
    font-size: 2.0vw;
    font-weight: 600;
    color: #FCF2E3;
    text-align: center;

    background-color: #837F5F;
    padding:  0.5vw 1.5vw;
    border-radius: 5.0vw;

    margin: 0;
    
    @media screen and (max-width: 768px) {
        font-size: 3vw;
    }

    &:hover{
        background-color: #FF7F5F;
    }
`;

const TypographyWrapper = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
`;


const SocialMediaIcons = styled.footer` 
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    align-items: center;
`;

const IconWrapper = styled.div`
    margin: 1rem 0.75rem;
    color: #ACA77E;

    &:hover{
        color: #595741;
    }
`;

const StyledJamGadang = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 70vh;

    @media screen and (max-width: 768px) {
        height: 45vh;
    }
`;

const StyledMonumenNasional = styled.img`
    position: absolute;
    left: -7.5vh;
    bottom: 0;
    height: 70vh;

    @media screen and (max-width: 768px) {
        height: 45vh;
    }
`;

const BusinessLogo = styled.header` 
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    align-items: center;
`;

const LogoStyled = styled.img`
    margin: 0.5em;
    height: 2.5em;
`;


export default function ComingSoon() {
    return (
            <Wrapper style={{height: use100vh()}}>
                <BusinessLogo>
                    <LogoStyled src={LogoUGM} alt='Logo UGM' />
                    <LogoStyled src={LogoKMTK} alt='Logo KMTK' />
                    <LogoStyled src={LogoKabinetKMTK} alt='Logo Kabinet KMTK 2020/2021' />
                </BusinessLogo>
                <section>
                    {/* <img src='./img/Main.png' className='main-img' alt='Hero typography'></img> */}
                    <CircleDecorative />
                    <TypographyWrapper>
                        <ComingSoonTypography>
                            COMING SOON
                        </ComingSoonTypography>
                        <PemiluFormaturTypography>
                            Pemilu Formatur
                        </PemiluFormaturTypography>
                        <KMTK2021Typography>
                            KMTK 2021
                        </KMTK2021Typography>
                    </TypographyWrapper>
                    {/* <img src='./img/Monumen Nasional.png' className='monumen' alt='Monumen Nasional'></img>
                    <img src='./img/Jam Gadang.png' className='jam-gadang' alt='Jam Gadang'></img> */}
                </section>
                <SocialMediaIcons>
                    <IconWrapper>
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                    </IconWrapper>
                    <IconWrapper>
                        <FontAwesomeIcon icon={['fab', 'line']} size="lg" />
                    </IconWrapper>
                </SocialMediaIcons>
                <StyledMonumenNasional src={MonumenNasional} alt='Monumen Nasional'/>
                <StyledJamGadang src={JamGadang} alt='Jam Gadang'/>
            </Wrapper>
    )
}
