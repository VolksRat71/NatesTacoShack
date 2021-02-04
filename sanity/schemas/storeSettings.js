import { FaStoreAlt as icon } from 'react-icons/fa';

export default {
    name: 'storeSettings',
    title: 'Home Page Settings',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Store ID',
            type: 'string',
            description: 'Please describe the store Name or Number'
        },
        {
            name: 'chef',
            title: 'Who is on today?',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'person' }] }]
        },
        {
            name: 'specials',
            title: 'Daily Specials',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'taco' }] }]
        },
    ]
}