import { Link } from 'gatsby';
import React from 'react';
import { ItemsGrid, SingleGridItem } from '../styles/HomePageStyles';

export default function ItemGrid({ items, itemType }) {
    const pathTo = itemType === 'special' ? '/tacos/' : '/chefs/'
    return (
        <ItemsGrid>
            {items.map(({
                _id,
                name,
                vegan,
                slug: { current },
                image: { asset: { url, metadata: { lqip } } }
            }) => (
                <Link map={_id} to={`${pathTo}${current}`}>
                    <SingleGridItem>
                        <p>
                            <span className="mark word">
                                {name}{vegan ? '🌱' : ''}
                            </span>
                        </p>
                        <img
                            src={`${url}?w=500&h=400&fit=crop`}
                            alt={name}
                            style={{
                                background: `url(${lqip})`,
                                backgroundSize: 'cover'
                            }}
                        />
                    </SingleGridItem>
                </Link>
            ))}
        </ItemsGrid>
    )
}