import React, { useState } from 'react'
import { use100vh } from 'react-div-100vh'
import { useSpring  } from 'react-spring'

import {
    Wrapper,
    CircleDecorative,
    ComingSoonWrapper,
    ComingSoonTypography,
    PemiluFormaturTypography,
    KMTK2021Typography,
    HeroWrapper,
    HoverImage
} from '../styles/Main'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(calc(${x / 16}px - 50%),calc(${y / 16}px - 50%),0) rotateY(${(x / window.innerWidth)*15}deg)`
const trans2 = (x, y) => `translate3d(calc(${x / 12}px - 50%),calc(${y / 12}px - 60%),0) rotateY(${(x / window.innerWidth)*15}deg)`
const trans3 = (x, y) => `translate3d(calc(${x / 10}px - 50%),calc(${y / 10}px - 60%),0) rotateY(${(x / window.innerWidth)*15}deg)`
const trans4 = (x, y) => `translate3d(calc(${x / 8}px - 50%),calc(${y / 8}px + 275%),0) rotateY(${(x / window.innerWidth)*15}deg)`

const COMING_LIST = ["P", "E", "M", "I", "L", "U", "K", "M", "T", "K"]

export default function ComingSoon() {
    const [propsParallax, setParallax] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    const [hovered, setHovered] = useState(-1);

    const handlePointerMove = (e) => {
        e.preventDefault();
        setParallax( {xy : calc(e.clientX, e.clientY)});
    }

    const handlePointerOver = (index, e) => {
        e.preventDefault();
        setHovered(index);
    }

    return (
            <Wrapper style={{height: use100vh()}} onMouseMove={handlePointerMove}>
                <HeroWrapper>
                    <CircleDecorative style={{ transform: propsParallax.xy.to(trans1) }}>
                        {
                            COMING_LIST.map((c,index) => (
                                // <HoverImage key={index} src={process.env.PUBLIC_URL + `/img/hero/hero-${index+1}.png`} style={{opacity: (hovered === index ? 0.25 : 0.0)}} /> 
                                <HoverImage key={index} src={require(`../assets/images/hero/hero-${index+1}.webp`).default} alt='Ilustrasi Pemilu KMTK' style={{opacity: (hovered === index ? 0.25 : 0.0)}} /> 
                            ))
                        }
                        <HoverImage key={11} src={require(`../assets/images/hero/hero-main.webp`).default} alt='Ilustrasi Pemilu KMTK' style={{opacity: (hovered === "kmtk" ? 0.2 : 0.0)}} /> 
                    </CircleDecorative>
                    <ComingSoonWrapper style={{ transform: propsParallax.xy.to(trans2) }} >
                        {
                            COMING_LIST.map((c, index) => (
                                <>
                                    <ComingSoonTypography key={index} onPointerOver={(e) => handlePointerOver(index, e)} >
                                        {c}
                                    </ComingSoonTypography>
                                    {index === 5 && <br />}
                                </>
                            ))
                        }

                    </ComingSoonWrapper>
                    <PemiluFormaturTypography style={{ transform: propsParallax.xy.to(trans3) }} >
                        Pemilu Formatur
                    </PemiluFormaturTypography>
                    <KMTK2021Typography style={{ transform: propsParallax.xy.to(trans4) }} onPointerOver={(e) => handlePointerOver("kmtk", e)}>
                        VOTE
                    </KMTK2021Typography>
                </HeroWrapper>
            </Wrapper>
    )
}