import path from 'path';

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
    `)

    // nodes.forEach(({ name }) => console.log(name))
}

export async function createPages(params) {
    await turnTacosIntoPages(params)
}

