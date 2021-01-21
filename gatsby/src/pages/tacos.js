import React from 'react';
import { graphql } from 'gatsby';
import TacoList from '../components/TacoList';
import IngredientFilter from '../components/IngredientFilter';

export default function TacoPage({
    data: { allSanityTaco: { tacos }
    } }) {

    return (
        <>
            <IngredientFilter />
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