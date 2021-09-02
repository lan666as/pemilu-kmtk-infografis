import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { use100vh } from 'react-div-100vh'
import { useSpring, animated  } from 'react-spring'

import JamGadang from '../assets/images/jam-gadang.svg'
import MonumenNasional from '../assets/images/monumen-nasional.svg'
import LogoUGM from '../assets/images/logo-ugm.png'
import LogoKMTK from '../assets/images/logo-kmtk.png'
import LogoKabinetKMTK from '../assets/images/logo-kabinet-kmtk.png'


const Wrapper = styled.section`
    width: 100vw;
    background: #FCF2E3;
    position: relative;
`;

const CircleDecorative = styled(animated.div)`
    width: 35vw;
    height: 35vw;
    background: #F5DFBC;
    border-radius: 50%;

    will-change: transform;
    transform-style: preserve-3d;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%; 


    @media screen and (max-width: 768px) {
        width: 55vw;
        height: 55vw;

        top: 30%;
        left: 50%;
    }
`;

const ComingSoonTypography = styled(animated.p)`
    font-family: 'Agrandir Grand Heavyy';
    font-size: 6.5vw;
    color: #ACA77E;
    text-align: center;
    inline-size: max-content;

    will-change: transform;
    transform-style: preserve-3d;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%; 

    @media screen and (max-width: 768px) {
        font-size: 11.0vw;
    }

    &:hover{
        color: transparent;
        -webkit-text-stroke: 2px #ACA77E;
        text-stroke: 2px #ACA77E;
    }
`;

const PemiluFormaturTypography = styled(animated.p)` 
    font-family: 'Amsterdam Four';
    font-size: 6.0vw;
    color: #BA3242;
    text-align: center;
    overflow: visible;
    inline-size: max-content;
    pointer-events: none;
    
    will-change: transform;
    transform-style: preserve-3d;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%; 

    @media screen and (max-width: 768px) {
        font-size: 10.0vw;

    }
`;

const KMTK2021Typography = styled(animated.p)` 
    font-family: 'Montserrat';
    font-size: 2.0vw;
    font-weight: 600;
    color: #FCF2E3;
    text-align: center;
    inline-size: max-content;

    background-color: #837F5F;
    padding:  0.5vw 1.5vw;
    border-radius: 5.0vw;

    will-change: transform;
    transform-style: preserve-3d;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%; 
    
    @media screen and (max-width: 768px) {
        font-size: 3.0vw;
    }

    &:hover{
        background-color: #FF7F5F;
    }
`;

const HeroWrapper = styled.div`
    margin: 0;
    position: relative;
    top: 50%;
    /* left: 50%; */
    /* transform: translate(0, -50%); */

    /* display: flex;
    flex-direction: column;
    align-items: center; */

    @media screen and (max-width: 768px) {
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;


const SocialMediaIcons = styled.footer` 
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    align-items: center;
`;

const IconWrapper = styled.a`
    margin: 1rem 0.75rem;
    color: #ACA77E;

    &:hover{
        color: #595741;
        transform: translate(0, -0.1rem);
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


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(calc(${x / 16}px - 50%),calc(${y / 16}px - 50%),0) rotateY(${(x / window.innerWidth)*15}deg)`
const trans2 = (x, y) => `translate3d(calc(${x / 12}px - 50%),calc(${y / 12}px - 100%),0) rotateY(${(x / window.innerWidth)*15}deg)`
const trans3 = (x, y) => `translate3d(calc(${x / 10}px - 50%),calc(${y / 10}px - 60%),0) rotateY(${(x / window.innerWidth)*15}deg)`
const trans4 = (x, y) => `translate3d(calc(${x / 8}px - 50%),calc(${y / 8}px + 275%),0) rotateY(${(x / window.innerWidth)*15}deg)`

export default function ComingSoon() {
    const [propsParallax, setParallax] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    const handlePointerMove = (e) => {
        e.preventDefault();
        setParallax( {xy : calc(e.clientX, e.clientY)});
    }

    return (
            <Wrapper style={{height: use100vh()}} onMouseMove={handlePointerMove}>
                <BusinessLogo>
                    <LogoStyled src={LogoUGM} alt='Logo UGM' />
                    <LogoStyled src={LogoKMTK} alt='Logo KMTK' />
                    <LogoStyled src={LogoKabinetKMTK} alt='Logo Kabinet KMTK 2020/2021' />
                </BusinessLogo>
                <HeroWrapper>
                    <CircleDecorative style={{ transform: propsParallax.xy.to(trans1) }} />
                    <ComingSoonTypography style={{ transform: propsParallax.xy.to(trans2) }} >
                        COMING<br/>SOON
                    </ComingSoonTypography>
                    <PemiluFormaturTypography style={{ transform: propsParallax.xy.to(trans3) }} >
                        Pemilu Formatur
                    </PemiluFormaturTypography>
                    <KMTK2021Typography style={{ transform: propsParallax.xy.to(trans4) }}>
                        KMTK 2021
                    </KMTK2021Typography>
                </HeroWrapper>
                <SocialMediaIcons>
                    <IconWrapper href='https://instagram.com/kmtkftugm' target='_blank' rel='noopener noreferer'>
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                    </IconWrapper>
                    <IconWrapper href='https://line.me/R/ti/p/@kmtkftugm' target='_blank' rel='noopener noreferer'>
                        <FontAwesomeIcon icon={['fab', 'line']} size="lg" />
                    </IconWrapper>
                    <IconWrapper href='https://line.me/R/ti/p/@sdg0260c' target='_blank' rel='noopener noreferer'>
                        <FontAwesomeIcon icon={['fab', 'line']} size="lg" />
                    </IconWrapper>
                </SocialMediaIcons>
                <StyledMonumenNasional src={MonumenNasional} alt='Monumen Nasional'/>
                <StyledJamGadang src={JamGadang} alt='Jam Gadang'/>
            </Wrapper>
    )
}
