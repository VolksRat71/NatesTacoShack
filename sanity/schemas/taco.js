import { GiTacos as icon } from 'react-icons/gi';
import ingredient from './ingredient';
import PriceInput from '../components/PriceInput'

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
            description: 'What is the name of taco?'
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
            description: 'Price of the Taco in cents ($1.95 minimum)',
            validation: Rule => Rule.min(195),
            inputComponent: PriceInput
        },
        {
            name: 'vegan',
            title: 'Vegan',
            type: 'boolean',
            description: 'Is this taco allowed in a vegan diet?',
            options: {
                layout: 'checkbox',
            },
        },
        {
            name: 'ingredients',
            title: 'Ingredients',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'ingredient' }] }]
        },
    ],
    preview: {
        select: {
            name: 'name',
            media: 'image',
            vegan: 'vegan',
            ingredient0: 'ingredients.0.name',
            ingredient1: 'ingredients.1.name',
            ingredient2: 'ingredients.2.name',
            ingredient3: 'ingredients.3.name',
        },
        prepare: ({ name, vegan, media, ...ingredients }) => {
            const ingredient = Object.values(ingredients).filter(Boolean).join(', ');
            return {
                title: `${name} ${vegan ? '🌱' : ''}`,
                media,
                subtitle: ingredient
            }
        }
    }
}