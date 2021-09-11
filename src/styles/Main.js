import styled from 'styled-components'
import { animated  } from 'react-spring'


export const Wrapper = styled.main`
    width: 100%;
    background: #FCF2E3;
    position: relative;    
    border-bottom-left-radius: 100% 4rem;
    border-bottom-right-radius: 100% 4rem;
`;

export const CircleDecorative = styled(animated.div)`
    width: 35vw;
    height: 35vw;
    background: #F5DFBC;
    border-radius: 50%;
    pointer-events: none;
    overflow: hidden;

    will-change: transform;
    transform-style: preserve-3d;
    z-index: 0;
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

export const ComingSoonWrapper = styled(animated.div)`
    font-family: 'Agrandir Grand Heavyy';
    font-size: 6.5vw;
    color: #837F5F;
    text-align: center;
    inline-size: max-content;

    will-change: transform;
    transform-style: preserve-3d;
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;

    @media screen and (max-width: 768px) {
        font-size: 11.0vw;
    }

    &:hover{
        color: transparent;
        -webkit-text-stroke: 0.25vw #837F5F;
        text-stroke: 0.25vw #837F5F;
        mix-blend-mode: multiply;
    }
`;

export const ComingSoonTypography = styled(animated.span)`
    filter: drop-shadow(0 0 5px rgba(0,0,0,0.15));
    
    &:hover{
        color: transparent;
        -webkit-text-stroke: 0.25vw #FF7F5F;
        text-stroke: 0.25vw #FF7F5F;
    }
`;

export const PemiluFormaturTypography = styled(animated.p)` 
    font-family: 'Amsterdam Four';
    font-size: 6.0vw;
    color: #BA3242;
    text-align: center;
    overflow: visible;
    inline-size: max-content;
    pointer-events: none;
    
    will-change: transform;
    transform-style: preserve-3d;
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%; 

    @media screen and (max-width: 768px) {
        font-size: 10.0vw;

    }
`;

export const KMTK2021Typography = styled(animated.p)` 
    font-family: 'Montserrat';
    font-size: 2.0vw;
    font-weight: 600;
    color: #FCF2E3;
    text-align: center;
    inline-size: max-content;

    background-color: #837F5F;
    padding:  0.5vw 1.5vw;
    border-radius: 5.0vw;
    filter: drop-shadow(0 0 5px rgba(0,0,0,0.15));

    will-change: transform;
    transform-style: preserve-3d;
    z-index: 10;
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

export const HeroWrapper = styled.div`
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



export const HoverImage = styled(animated.img)`
    opacity: 0.5;
    min-height: 35vw;
    min-width: 35vw;
    object-fit: cover;

    will-change: transform;
    z-index: 1;
    position: absolute;
    transform: translate(-50%, -50%); 
    top: 50%;
    left: 50%;

    @media screen and (max-width: 768px) {
        width: 55vw;
        height: 55vw;
    }
`;