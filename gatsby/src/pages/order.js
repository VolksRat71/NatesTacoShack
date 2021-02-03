import { graphql, Link } from 'gatsby';
import React from 'react';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import Img from 'gatsby-image';
import calculateTacoPrice from '../utils/calculateTacoPrice';
import formatMoney from '../utils/formatMoney';
import useTaco from '../utils/useTaco';
import OrderStyles from '../styles/OrderStyles';
import MenuItemStyles from '../styles/MenuItemStyles';
import TacoOrder from '../components/TacoOrder';
import calculateOrderTotal from '../utils/calculateOrderTotal';

export default function OrdersPage({
    data: { allSanityTaco: { tacos } }
}) {
    const { values, updateValue } = useForm({
        name: '',
        email: '',
        chiliSyrup: ''
    })

    const {
        addToOrder,
        removeFromOrder,
        submitOrder,
        order,
        error,
        loading,
        message
    } = useTaco({
        values,
        tacos
    })

    const { name, email, chiliSyrup } = values;

    if (message) {
        return <p>{message}</p>
    }
    return (
        <>
            <SEO title="Delivery &amp; Curbside" />
            <OrderStyles onSubmit={submitOrder}>
                <fieldset disabled={loading}>
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
                    <input
                        type="chiliSyrup"
                        name="chiliSyrup"
                        id="chiliSyrup"
                        value={chiliSyrup}
                        onChange={updateValue}
                    />
                </fieldset>
                <fieldset className="menu" disabled={loading}>
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
                                    <button
                                        key={i}
                                        type="button"
                                        onClick={() => addToOrder({ id, quantity })}
                                    >
                                        {quantity} - {formatMoney(calculateTacoPrice(price, quantity))}
                                    </button>
                                ))}
                            </div>
                        </MenuItemStyles>
                    ))}
                </fieldset>
                <fieldset className="order" disabled={loading}>
                    <legend>Order</legend>
                    <TacoOrder
                        order={order}
                        removeFromOrder={removeFromOrder}
                        tacos={tacos}
                    />
                </fieldset>
                <fieldset disabled={loading}>
                    <h3>Your Total is <span className="mark">{formatMoney(calculateOrderTotal(order, tacos))}</span></h3>
                    <div>
                        {error ? <p>Error: {error}</p> : ''}
                    </div>
                    <button type="submit">
                        {loading ? "Placing Order..." : "Order Ahead"}
                    </button>
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