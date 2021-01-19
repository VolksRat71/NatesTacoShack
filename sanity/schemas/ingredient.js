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
            name: 'vegan',
            title: 'Vegan',
            type: 'boolean',
            description: 'Is this item allowed in a vegan diet?',
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
            vegan: 'vegan',
        },
        prepare: ({ name, vegan }) => ({
            title: `${name} ${vegan ? '🌱' : ''}`,
        }),
    },
}