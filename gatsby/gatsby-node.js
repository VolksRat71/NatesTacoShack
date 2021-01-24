import path from 'path';
import fetch from 'isomorphic-fetch';

async function turnTacosIntoPages({ graphql, actions }) {
    const tacoTemplate = path.resolve('./src/templates/Taco.js');
    const { data: { tacos: { nodes } } } = await graphql(`
    query {
        tacos: allSanityTaco {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
        `);

    nodes.forEach(({ slug: { current } }) => {
        actions.createPage({
            path: `/tacos/${current}`,
            component: tacoTemplate,
            context: {
                slug: current
            }
        })
    })
}

async function turnIngredientsIntoPages({ graphql, actions }) {
    const tacoTemplate = path.resolve('./src/pages/tacos.js');
    const { data: { ingredients: { nodes } } } = await graphql(`
        query {
            ingredients: allSanityIngredient {
                nodes {
                    name
                    id
                }
            }
        }
    `);

    nodes.forEach(({ name }) => {
        actions.createPage({
            path: `ingredient/${name}`,
            component: tacoTemplate,
            context: {
                ingredient: name,
                ingredientRegex: `/^${name}$/`
            }
        })
    })
}

async function fetchBeersAndTurnIntoNodes({
    actions,
    createNodeId,
    createContentDigest
}) {
    const res = await fetch('https://api.sampleapis.com/beers/ale')
    const beers = await res.json();

    for (const beer of beers) {
        const nodeMeta = {
            id: createNodeId(`beer-${beer.name}`),
            parent: null,
            children: [],
            internal: {
                type: 'Beer',
                mediaType: 'application/json',
                contentDigest: createContentDigest(beer),
            }
        }
        actions.createNode({
            ...beer,
            ...nodeMeta
        })
    }

}

export async function sourceNodes(params) {
    await Promise.all([fetchBeersAndTurnIntoNodes(params)])
}

export async function createPages(params) {
    await Promise.all([
        turnTacosIntoPages(params),
        turnIngredientsIntoPages(params)
    ])
}

