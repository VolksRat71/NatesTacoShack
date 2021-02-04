import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import shuffle from '../utils/shuffle';

const TacoGridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    grid-auto-rows: auto auto 500px;
`;

const TacoStyles = styled.div`
    display: grid;
    @supports not (grid-template-rows: subgrid) {
        --rows: auto auto 1fr;
    }
    grid-template-rows: var(--rows, subgrid);
    grid-row: span 3;
    gap: 1rem;
    h2,
    p {
        margin: 0;
    }
`;

function SingleTaco({
    taco: {
        name,
        vegan,
        ingredients,
        slug: { current },
        image: { asset: { fluid } }
    } }) {
    return (
        <TacoStyles>
            <Link to={`/tacos/${current}`}>
                <h2>
                    <span className="mark">{name}{vegan ? '🌱' : ''}</span>
                </h2>
            </Link>
            <p>{ingredients.map(({ name }) => name).join(', ')}</p>
            <Link to={`/tacos/${current}`}>
                <Img fluid={fluid} alt={name} />
            </Link>
        </TacoStyles>
    )
}

export default function TacoList({ tacos }) {
    shuffle(tacos)
    return (
        <TacoGridStyles>
            {tacos.map(taco => {
                return <SingleTaco key={taco.id} taco={taco} />
            })}
        </TacoGridStyles>
    )
}