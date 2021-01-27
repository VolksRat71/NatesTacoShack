import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';;

const IngredientStyles = styled.div`
    /* font-size: 0.7em; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1rem;
    margin-bottom: 4rem;
    .cw {
        font-size: 0.85em;
        transform: rotate(1.5deg);
        &:hover {
            transform: scale(1.02);
            transform: rotate(-1.5deg);
        }
    }
    .ccw {
        font-size: 0.75em;
        transform: rotate(-1.5deg);
        &:hover {
            transform: scale(1.02);
            transform: rotate(1.5deg);
        }
    }
    a {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0 0.5rem;
        padding: 5px;
        background: var(--grey);
        border-radius: 0.5em;
        transition: transform .1s, box-shadow .1s;
        .count{
            background: white;
            padding: 2px 5px;
            border-radius: 50%;
        }
        &:hover {
            box-shadow: 0 2px 5px rgba(0,0,0,0.5);
        }
        &:active {
            transform: scale(.98);
            box-shadow: none;
            background: var(--pale-yellow)
        }
        &[aria-current='page']{
            background: var(--pale-yellow);
            transform: scale(1.02);
            box-shadow: 0 2px 5px rgba(0,0,0,0.5);
        }
    }
`;

function countTacosInIngredients({ nodes }) {
    let hashTable = {}
    nodes.forEach(({ ingredients }) => {
        ingredients.forEach(({ name, _id }) => {
            !hashTable[name] ?
                hashTable[name] = { count: 1, _id } :
                hashTable[name]['count']++
        })
    })

    return Object.entries(hashTable)
}

export default function IngredientFilter() {
    const { tacos } = useStaticQuery(graphql`
        query {
            tacos: allSanityTaco {
                nodes {
                    vegan
                    ingredients {
                        name
                        _id
                    }
                }
            }
        }
        `)
    const ingredientsWithCounts = countTacosInIngredients(tacos);

    return (
        <IngredientStyles>
            <Link
                className={Math.floor(Math.random() * 2) % 2 === 0 ? "cw" : "ccw"}
                to="/tacos">
                <span className="name">All Tacos</span>
                <span className="count">{tacos.nodes.length}</span>
            </Link>
            {ingredientsWithCounts.map(([name, { count, _id }]) => (
                <Link
                    key={_id}
                    className={Math.floor(Math.random() * 2) % 2 === 0 ? "cw" : "ccw"}
                    to={`/ingredient/${name.replace(/\s+/g, '-').toLowerCase()}`}
                >
                    <span className="name">{name}</span>
                    <span className="count">{count}</span>
                </Link>
            ))}
        </IngredientStyles>
    )
}