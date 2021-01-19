import { GiTacos as icon } from 'react-icons/gi';

export default {
    name: 'taco',
    title: 'Tacos',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Taco Name',
            type: 'string',
            description: 'Name of taco'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the Taco in cents',
            validation: Rule => Rule.min(200)
            // TODO: Add custom input component
        },
    ]
}