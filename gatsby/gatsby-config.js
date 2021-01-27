import dotenv from 'dotenv';
dotenv.config({ path: '.env' })

export default {
    siteMetadata: {
        title: 'Nates Taco Shack',
        siteUrl: 'https://heroku.com',
        description: 'The best tacos in Austin, TX',
        twitter: '@NatesTacoShack'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: '8ero7t3w',
                dataset: 'production',
                watch: true,
                token: process.env.TOKEN
            }
        }
    ]
}