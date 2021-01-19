import { GiChiliPepper as icon } from 'react-icons/gi';
import { FaLeaf as vegIcon } from 'react-icons/fa';

export default {
    name: 'ingredient',
    title: 'Ingredients',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Topping Name',
            type: 'string',
            description: 'What is the name of the topping?'
        },
        {
            name: 'vegetarian',
            title: 'Vegetarian',
            type: 'boolean',
            options: {
                layout: 'checkbox',
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian',
        },
        prepare: ({ name, vegetarian }) => ({
            title: `${name} ${vegetarian ? '🌱' : ''}`,
        }),
    },
}