import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';


export default function SingleChefPage({
    data: {
        person: {
            name,
            description,
            image: { asset: { fluid } }
        } },
}) {
    return (
        <>
            <SEO title={`Chef ${name.split(" ")[0]}`} />
            <div className="center">
                <h1>
                    <span className="mark">{name}</span>
                </h1>
                <Img fluid={fluid} />
                <p>{description}</p>
            </div>
        </>
    )
}

export const query = graphql`
  query($id: String!) {
    person: sanityPerson(id: { eq: $id }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;