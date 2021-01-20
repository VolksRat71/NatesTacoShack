import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

function SingleTaco({
    taco: {
        name,
        vegan,
        ingredients,
        slug: { current },
        image: { asset: { fluid } }
    } }) {
    return (
        <>
            <Link to={`/pizza/${current}`}>
                <h2>
                    <span className="mark">{name}{vegan ? '🌱' : ''}</span>
                </h2>
            </Link>
            <p>{ingredients.map(({ name }) => name).join(', ')}</p>
            <Img fluid={fluid} alt={name} />
        </>
    )
}

export default function TacoList({ tacos }) {
    return (
        <>
            {tacos.map(taco => {
                return <SingleTaco key={taco.id} taco={taco} />
            })}
        </>
    )
}