import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import Img from 'gatsby-image';
import calculateTacoPrice from '../utils/calculateTacoPrice';
import formatMoney from '../utils/formatMoney';

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
            <form>
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
                <fieldset>
                    <legend>Menu</legend>
                    {tacos.map(({
                        name, id, price, image: { asset: { fluid } }
                    }) => (
                        <div key={id}>
                            <Img fluid={fluid} alt={name} />
                            <div>
                                <h2>{name}</h2>
                            </div>
                            <div>
                                {['1', '2', '3'].map((quantity, i) => (
                                    <button key={i} type="button">
                                        {quantity} - {formatMoney(calculateTacoPrice(price, quantity))}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </fieldset>
                <fieldset>
                    <legend>Order</legend>
                </fieldset>
            </form>
        </>
    )
};

export const query = graphql`
 query {
     allSanityTaco {
         tacos: nodes {
             name
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
`