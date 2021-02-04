import React from 'react';
import styled from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  border-radius: 50% 50% 2.4em 2.4em;
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 30em;
  height: 30em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  margin: 0;
  --borderSize: 1em;
  background: white url(${stripes});
  background-size: 150em;
  border: var(--borderSize) solid white;
  display: flex;
  .inner {
    border-radius: 50% 50% 1.8em 1.8em;
    margin: var(--borderSize);
    flex: 1;
    background: var(--white);
    display: grid;
    grid-template-rows: 20% 1fr 1fr;
    align-content: center;
  }
  .est {
    font-size: 1.5em;
    align-self: center;
    transform: translateY(-0.7em);
  }
  h1 {
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    gap: 2em;
    transform: translateY(-0.7em);
  }
  .taco-shack {
    font-size: 2.6em;
    letter-spacing: 0.2em;
    transform: translateY(-0.3em);
    text-shadow: 0.08em 0.08em 0 rgba(0, 0, 0, 0.2);
  }
  .nates {
    transform: scale(1.4) translateY(0.2em);
    display: block;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.2);
    perspective: 100px;
  }
  .letter {
    font-size: 5em;
    color: var(--purple);
    --scale: 1;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;
    &.N {
      --translateX: -0.05;
    }
    &.a {
      --rotate: 2deg;
      --scale: 1.4;
      --translateX: 0.05em;
      --translateY: 0.0em;
    }
    &.t {
      --scale: 0.9;
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
    &.e {
      --rotate: 3deg;
      --scale: 0.9;
      --translateX: 0.1em;
      --translateY: 0.23em;
    }
    &.apos {
      --translateX: 0.1em;
    }
    &.s {
      --rotate: 12deg;
      --scale: 0.9;
      --translateY: -0.14em;
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <span className="est">EST 1994</span>
        <h1>
          <span className="nates">
            <span className="letter N">N</span>
            <span className="letter a">a</span>
            <span className="letter t">t</span>
            <span className="letter e">e</span>
            <span className="letter apos">'</span>
            <span className="letter s">s</span>
          </span>
          <span className="taco-shack">Taco Shack</span>
        </h1>
      </div>
    </LogoStyles>
  );
}