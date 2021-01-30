import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import MenuItemStyles from '../styles/MenuItemStyles';
import calculateTacoPrice from '../utils/calculateTacoPrice';
import formatMoney from '../utils/formatMoney';

export default function TacoOrder({
    order,
    tacos,
    removeFromOrder
}) {
    return (
        <>
            {order.map(({ id, quantity }, i) => {
                const {
                    name,
                    vegan,
                    price,
                    slug: { current },
                    image: { asset: { fluid } }
                } = tacos.find(taco => taco.id === id);
                return (
                    <MenuItemStyles key={i}>
                        <Link className="image-wrapper" to={`/tacos/${current}`}>
                            <Img fluid={fluid} alt={name} />
                        </Link>
                        <div>
                            <h2>{name}<span><h5>{vegan ? '🌱' : ''}</h5></span></h2>
                        </div>
                        <div>
                            {quantity} - {formatMoney(calculateTacoPrice(price, quantity))}
                            <button
                                type="button"
                                className="remove"
                                title={`Remove ${name} from order`}
                                onClick={() => removeFromOrder(i)}
                            >&times;</button>
                        </div>
                    </MenuItemStyles>
                )
            })}
        </>
    )
}