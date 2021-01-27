import React from 'react';
import { graphql } from 'gatsby';
import TacoList from '../components/TacoList';
import IngredientFilter from '../components/IngredientFilter';
import SEO from '../components/SEO';

export default function TacoPage({
    data: { allSanityTaco: { tacos } },
    pageContext: { ingredient }
}) {
    return (
        <>
            <SEO title={ingredient ? `Tacos with ${ingredient}` : `All Tacos`} />
            <IngredientFilter activeIngredient={ingredient} />
            <TacoList tacos={tacos} />
        </>
    )
};

export const query = graphql`
  query TacoQuery($ingredientRegex: String){
    allSanityTaco(
        filter: {
            ingredients: {
                elemMatch: {
                    name: {
                        regex: $ingredientRegex
                    }
                }
            }
        }
    ) {
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