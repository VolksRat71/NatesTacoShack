import React from 'react';
import { graphql } from 'gatsby';


export default function SingleTacoPage() {
    return <p>I am a taco</p>
}

export const query = graphql`
    query($slug: String!) {
        taco: sanityTaco(slug: {current: {eq: $slug}}){
            _id
            name
            vegan
            ingredients {
                name
                vegan
            }
        }
    }
`;