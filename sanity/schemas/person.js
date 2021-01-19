import { GiChefToque as icon } from 'react-icons/gi';

export default {
    name: 'person',
    title: 'Chefs',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Employees Name',
            type: 'string'
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
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Tell us a bit about the person'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ]
}