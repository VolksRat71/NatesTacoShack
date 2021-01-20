import React from 'react';
import { Link } from 'gatsby';

function SingleTaco({ taco: { name, vegan, ingredients, slug: { current } } }) {
    return (
        <>
            <Link to={`/pizza/${current}`}>
                <h2>
                    <span className="mark">{name}{vegan ? '🌱' : ''}</span>
                </h2>
                <p>{ingredients.map(({ name }) => name).join(', ')}</p>
            </Link>
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