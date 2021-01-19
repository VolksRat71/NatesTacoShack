import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
    return PatchEvent.from(value === '' ? unset() : set(Number(value)))
}

const formatMoney = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
}).format

export default function PriceInput({
    type: { title, description, name },
    value,
    onChange,
    inputComponent
}) {
    return (
        <>
            <h2>{title} - {value ? formatMoney(value / 100) : 'Set your price!'}</h2>
            <p>{description}</p>
            <input
                type={name}
                value={value}
                ref={inputComponent}
                onChange={e => onChange(createPatchFrom(e.target.value))}
            />
        </>
    )
}

PriceInput.focus = function () {
    this._inputElement.focus()
}