import { DISPLAY_ITEM, DISPLAY_SECTION } from './actions'

const initialState = {
    sections: [{
        id: 'womens',
        title: 'Women\'s',
        description: 'The best in clothing',
        items: [
            {
                id: '1',
                description: 'Shoe 1',
                caption: 'New shoe',
                imageUrl: ''
            },
            {
                id: '2',
                description: 'Shoe 2',
                caption: 'New shoe 2',
                imageUrl: ''
            }
        ]
    },
    {
        id: 'mens',
        title: 'Men\'s',
        description: 'Summer sale is here',
        items: [
            {
                id: '3',
                description: 'Shoe',
                caption: 'New shoe',
                imageUrl: ''
            },
            {
                id: '4',
                description: 'Three Button Suit',
                caption: 'Latest in 3 buttons',
                imageUrl: ''
            }
        ]
    },
    {
        id: 'home',
        title: 'Home Furnishings',
        description: 'Create your ideal home',
        items: [
            {
                id: '5',
                description: 'Jones Sofa',
                caption: 'Comfortable red leather sofa',
                imageUrl: ''
            },
            {
                id: '6',
                description: 'Wing Back Chair',
                caption: 'Relax in style',
                imageUrl: ''
            }

        ]
    }],
    items: [{
        id: '1',
        description: 'Shoe 1',
        caption: 'New shoe',
        imageUrl: '',
        item: '',
        price: 5.99,
    },
    {
        id: '2',
        description: 'Shoe 2',
        caption: 'New shoe 2',
        imageUrl: '',
        item: '',
        price: 5.99,
    },
    {
        id: '3',
        description: 'Shoe',
        caption: 'New shoe',
        imageUrl: '',
        item: '',
        price: 5.99,
    },
    {
        id: '4',
        description: 'Three Button Suit',
        caption: 'Latest in 3 buttons',
        imageUrl: '',
        item: '',
        price: 5.99,
    }, {
        id: '5',
        description: 'Jones Sofa',
        caption: 'Comfortable red leather sofa',
        imageUrl: '',
        item: '',
        price: 5.99,
    },
    {
        id: '6',
        description: 'Wing Back Chair',
        caption: 'Relax in style',
        imageUrl: '',
        item: '',
        price: 5.99,
    }

    ],
}

function app(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_SECTION:
            return state.sections.find((ele) => {
                ele.id === action.id
            })
        case DISPLAY_ITEM:
            return state.items.find((ele) => {
                ele.id === action.id
            })
        default:
            return state
    }
}

export default app;

