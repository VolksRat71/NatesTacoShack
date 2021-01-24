import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const BeerGridStyles = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
    border: 1px solid var(--grey);
    padding: 2rem;
    text-align: center;
    img {
        width: 100%;
        height: 200px;
        object-fit: contain;
        display: block;
        display: grid;
        align-items: center;
        font-size: 10px;
    }
`;

export default function BeersPage({ data: { allBeer: { beers } } }) {
    return (
        <>
            <h2 className="center" style={{ marginBottom: '1em' }}>We have {beers.length} Beers Available! <span className="mark">Dine in only</span></h2>
            <BeerGridStyles>
                {beers.map(({ name, image, id, price, rating: { average, reviews } }) => {
                    const rating = Math.round(average)
                    return (
                        <SingleBeerStyles key={id}>
                            <img src={image} alt={name} />
                            <h3>{name}</h3>
                            {price}
                            <p title={`${rating} out of 5 stars`}>
                                {`⭐`.repeat(rating)}
                                <span style={{
                                    filter: `grayscale(100%)`
                                }}>
                                    {`⭐`.repeat(5 - rating)}
                                </span>
                                <span>({reviews})</span>
                            </p>
                        </SingleBeerStyles>
                    )
                })}
            </BeerGridStyles>
        </>
    )
}

export const query = graphql`
    query {
        allBeer {
            beers: nodes {
                name
                id
                price
                image
                rating {
                    reviews
                    average
                }
            }
        }
    }
`;
