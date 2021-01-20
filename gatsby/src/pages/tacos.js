import React from 'react';
import { graphql } from 'gatsby';
import TacoList from '../components/TacoList';

export default function TacoPage({
    data: { allSanityTaco: { tacos }
    } }) {
    console.log(tacos)

    return (
        <>
            <TacoList tacos={tacos} />
        </>
    )
};

export const query = graphql`
  query {
    allSanityTaco {
        # renamed names to tacos in props
        tacos: nodes {
            id
            name
            price
            vegan
            slug {
                current
            }
            ingredients {
                id
                name
            }
            image {
                asset {
                fluid(maxWidth: 400){
                    ...GatsbySanityImageFluid
                    }
                }
            }
        }
    }
  }
`;