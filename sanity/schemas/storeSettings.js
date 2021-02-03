import { GiHomeGarage as icon } from 'react-icons/gi';

export default {
    name: 'storeSettings',
    title: 'Settings',
    type: 'document',
    icon,
    fields: [
        {
            name: 'chef',
            title: 'Who is on today?',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'person' }] }]
        }
    ]
}