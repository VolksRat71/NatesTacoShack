import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const ChefsGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const SingleChef = styled.div`
    .gatsby-image-wrapper {
        height: 400px;
    }
    h2 {
        transform: rotate(-2deg);
        text-align: center;
        font-size: 3rem;
        margin-bottom: -2rem;
        position: relative;
        z-index: 2;
    }
    .description {
        border: 0.1rem solid var(--purple);
        background: var(--grey);
        padding: 1rem;
        margin: 2rem;
        margin-top: -6rem;
        z-index: 2;
        position: relative;
        transform: rotate(1deg);
        text-align: center;
    }
`;

export default function ChefPage({
    pageContext: { pageCount, currentPage },
    data: { allSanityPerson: { chefs } }
}) {
    return (
        <>
            <SEO title={`Chefs - Page ${currentPage}`} />
            <Pagination
                pageCount={pageCount}
                currentPage={currentPage}
                base='/chefs'
            >
                <ChefsGrid>
                    {chefs.map(({
                        id, name, description,
                        slug: { current },
                        image: { asset: { fluid } }
                    }) => (
                        <SingleChef key={id}>
                            <Link to={`/chefs/${current}`}>
                                <h2><span className="mark">{name}</span></h2>
                                <Img fluid={fluid} />
                            </Link>
                            <p className="description">{description}</p>
                        </SingleChef>
                    ))}
                </ChefsGrid>
            </Pagination>
        </>
    )
};

export const query = graphql`
    query($skip: Int = 0, $pageSize: Int = 3) {
        allSanityPerson(skip: $skip, limit: $pageSize) {
            chefs: nodes {
                name
                id
                description
                slug {
                    current
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