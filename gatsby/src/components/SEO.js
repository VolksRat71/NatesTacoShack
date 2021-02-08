import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export default function SEO({
    children,
    location,
    description,
    title,
    image
}) {
    const { site: { siteMetadata } } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return (
        <Helmet titleTemplate={`%s - ${siteMetadata.title}`}>
            <html lang="en" />
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <meta name="description" content={siteMetadata.description} />
            {location && <meta property="og:url" content={location.href} />}
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:site_name" content={siteMetadata.title} key="ogsitename" />
            <meta property="og:image" content={image} />
            <meta property="og:description" content={description} />
            {children}
        </Helmet>
    );
}