import dotenv from 'dotenv';
dotenv.config({ path: '.env' })

export default {
    siteMetadata: {
        title: 'Nates Taco Shack',
        siteUrl: 'https://eager-aryabhata-2f82dc.netlify.app/',
        description: 'The best tacos in Austin, TX',
        icon: 'src/images/favicon.ico'
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
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Nates Taco Shack',
                short_name: 'Tacos',
                start_url: '/',
                icon: 'src/images/favicon.ico'
            }
        }
    ]
}