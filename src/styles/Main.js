import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.main`
  width: 100%;
  background: #fcf2e3;
`;

export const CircleDecorative = styled(animated.div)`
  width: 35vw;
  height: 35vw;
  background: #f5dfbc;
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
  font-family: "Agrandir Grand Heavyy";
  font-size: 6.5vw;
  color: #837f5f;
  text-align: center;
  inline-size: max-content;

  will-change: transform;
  transform-style: preserve-3d;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;

  @media screen and (max-width: 768px) {
    font-size: 11vw;
  }

  &:hover {
    color: transparent;
    -webkit-text-stroke: 0.25vw #837f5f;
    text-stroke: 0.25vw #837f5f;
    mix-blend-mode: multiply;
  }
`;

export const ComingSoonTypography = styled(animated.span)`
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.15));

  &:hover {
    color: transparent;
    -webkit-text-stroke: 0.25vw #ff7f5f;
    text-stroke: 0.25vw #ff7f5f;
  }
`;

export const PemiluFormaturTypography = styled(animated.p)`
  font-family: "Amsterdam Four";
  font-size: 6vw;
  color: #ba3242;
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
    font-size: 10vw;
  }
`;

export const KMTK2021Typography = styled(animated.p)`
  font-family: "Montserrat";
  font-size: 2vw;
  font-weight: 600;
  color: #fcf2e3;
  text-align: center;
  inline-size: max-content;

  background-color: #837f5f;
  padding: 0.5vw 1.5vw;
  border-radius: 5vw;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.15));

  will-change: transform;
  transform-style: preserve-3d;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;

  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }

  &:hover {
    background-color: #ff7f5f;
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
