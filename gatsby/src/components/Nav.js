import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
    margin-bottom: 3rem;
    .logo {
        transform: translateY(-25%);
    }
    ul {
        margin: 0;
        padding: 0;
        display: grid;
        text-align: center;
        list-style: none;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        grid-gap: 2rem;
        align-items: center;
        margin-top: -6rem;
    }
    li {
        --rotate: -2deg;
        transform: rotate(var(--rotate));
        transition-duration: 0.12s;
        order: 1;
        &:nth-child(1) {
            --rotate: 1deg;
        }
        &:nth-child(2) {
            --rotate: -2.5deg;
        }
        &:nth-child(4) {
            --rotate: 2.5deg;
        }
        &:hover {
            --rotate: 5deg;
        }
    }
    a {
        font-size: 3rem;
        text-decoration: none;
        display: block;
        &:hover {
            color: var(--purple);
        }
        @media (max-width: 800px) {
            font-size: 2rem;
        }
    }
`;

export default function Nav() {
    return (
        <NavStyles>
            <ul>
                <li>
                    <Link to="/">Specials &amp; Such</Link>
                </li>
                <li>
                    <Link to="/tacos/">Taco Menu</Link>
                </li>
                <li>
                    <Link to="/"><Logo /></Link>
                </li>
                <li>
                    <Link to="/chefs">Meet the Chefs</Link>
                </li>
                <li>
                    <Link to="/order">Delivery &amp; Curbside</Link>
                </li>
            </ul>
        </NavStyles>
    )
}