import { GiTacos as icon } from 'react-icons/gi';
import ingredient from './ingredient';

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
            description: 'Price of the Taco in cents',
            validation: Rule => Rule.min(200)
            // TODO: Add custom input component
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
            title: 'name',
            media: 'image',
            ingredient0: 'ingredients.0.name',
            ingredient1: 'ingredients.1.name',
            ingredient2: 'ingredients.2.name',
            ingredient3: 'ingredients.3.name',
        },
        prepare: ({ veg, title, media, ...ingredients }) => {
            const ingredient = Object.values(ingredients).filter(Boolean).join(', ');
            return {
                title,
                media,
                subtitle: ingredient
            }
        }
    }
}