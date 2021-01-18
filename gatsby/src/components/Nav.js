import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tacos/">Tacos</Link>
                </li>
                <li>
                    <Link to="/">Logo</Link>
                </li>
                <li>
                    <Link to="/tacomasters">Taco Masters</Link>
                </li>
                <li>
                    <Link to="/order">Order Ahead!</Link>
                </li>
            </ul>
        </nav>
    )
}