import React from 'react';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';

export default function OrdersPage() {
    const { values, updateValue } = useForm({
        name: '',
        email: ''
    })

    const { name, email } = values;
    console.log(values);

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
                        value={name}
                        onChange={updateValue}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={updateValue}
                    />
                </fieldset>
                <fieldset>
                    <legend>Menu</legend>
                </fieldset>
                <fieldset>
                    <legend>Order</legend>
                </fieldset>
            </form>
        </>
    )
};