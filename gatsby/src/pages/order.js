import { graphql, Link } from 'gatsby';
import React from 'react';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import Img from 'gatsby-image';
import calculateTacoPrice from '../utils/calculateTacoPrice';
import formatMoney from '../utils/formatMoney';
import OrderStyles from '../styles/OrderStyles';
import MenuItemStyles from '../styles/MenuItemStyles';

export default function OrdersPage({
    data: { allSanityTaco: { tacos } }
}) {
    const { values, updateValue } = useForm({
        name: '',
        email: ''
    })

    const { name, email } = values;

    return (
        <>
            <SEO title="Delivery &amp; Curbside" />
            <OrderStyles>
                <fieldset>
                    <legend>Your Info</legend>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={updateValue}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={updateValue}
                    />
                </fieldset>
                <fieldset className="menu">
                    <legend>Menu</legend>
                    {tacos.map(({
                        name,
                        vegan,
                        id,
                        price,
                        slug: { current },
                        image: { asset: { fluid } }
                    }) => (
                        <MenuItemStyles key={id}>
                            <Link className="image-wrapper" to={`/tacos/${current}`}>
                                <Img fluid={fluid} alt={name} />
                            </Link>
                            <div>
                                <h2>{name}<span><h5>{vegan ? '🌱' : ''}</h5></span></h2>
                            </div>
                            <div>
                                {['1', '2', '3'].map((quantity, i) => (
                                    <button key={i} type="button">
                                        {quantity} - {formatMoney(calculateTacoPrice(price, quantity))}
                                    </button>
                                ))}
                            </div>
                        </MenuItemStyles>
                    ))}
                </fieldset>
                <fieldset className="order">
                    <legend>Order</legend>
                </fieldset>
            </OrderStyles>
        </>
    )
};

export const query = graphql`
 query {
     allSanityTaco {
         tacos: nodes {
             name
             vegan
             id
             price
             slug {current}
             image {
                 asset {
                     fluid(maxWidth: 100){
                         ...GatsbySanityImageFluid
                     }
                 }
             }
         }
     }
 }
`;