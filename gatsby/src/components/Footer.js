import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>&copy; Nates Taco Shack {new Date().getFullYear()}</p>
        </StyledFooter>
    )
};