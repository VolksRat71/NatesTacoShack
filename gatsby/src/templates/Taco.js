import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const TacoGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    .largeFont {
        font-size: 1.35em;
        margin: .25em;
    }
    .smallFont {
        font-size: 1.05em;
        margin: .25em;
    }
`;

export default function SingleTacoPage({
    data: {
        taco: { name, vegan, ingredients,
            image: { asset: { fluid } } }
    } }) {
    console.log(ingredients)
    return (
        <TacoGrid>
            <Img fluid={fluid}></Img>
            <div>
                <h2 className="mark">{name}{!vegan ? '' : '🌱'}</h2>
                <ul>
                    {ingredients.map(({ _id, name, vegan }) => (
                        <li
                            className={Math.floor(Math.random() * 2) % 2 === 0 ? "largeFont" : "smallFont"}
                            key={_id}
                        >
                            {name}{!vegan ? '' : '🌱'}
                        </li>
                    ))}
                </ul>
            </div>
        </TacoGrid>
    )
}

export const query = graphql`
    query($slug: String!) {
        taco: sanityTaco(slug: {current: {eq: $slug}}){
            _id
            name
            vegan
            ingredients {
                _id
                name
                vegan
            }
            image {
                asset {
                    fluid(maxWidth: 800) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
    }
`;