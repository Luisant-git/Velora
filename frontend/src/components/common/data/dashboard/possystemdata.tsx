import pos17 from "../../../../assets/images/pos-system/17.jpg"
import pos15 from "../../../../assets/images/pos-system/15.jpg"
import pos19 from "../../../../assets/images/pos-system/19.jpg"
import pos16 from "../../../../assets/images/pos-system/16.jpg"
import pos9 from "../../../../assets/images/pos-system/9.jpg"
import pos18 from "../../../../assets/images/pos-system/18.jpg"
import pos12 from "../../../../assets/images/pos-system/12.jpg"
import pos13 from "../../../../assets/images/pos-system/13.jpg"
import pos14 from "../../../../assets/images/pos-system/14.jpg"
import pos11 from "../../../../assets/images/pos-system/11.jpg"
import pos8 from "../../../../assets/images/pos-system/8.jpg"
import pos10 from "../../../../assets/images/pos-system/10.jpg"

interface Product {
    id: number;
    imgSrc: string;
    title: string;
    category: string;
    description: string;
    price: string;
    inStock: string;
}

export const PosrSystemdata: Product[] = [
    {
        id: 1,
        imgSrc: pos9,
        title: 'Classic Cheeseburger',
        category: 'burger',
        description: 'Classic Burgers',
        price: '$78.99',
        inStock: '',
    },
    {
        id: 2,
        imgSrc: pos18,
        title: 'Coconut Almond Fudge',
        category: 'icecream',
        description: 'Specialty Flavors',
        price: '$29.99',
        inStock: 'out-of-stock',
    },
    {
        id: 3,
        imgSrc: pos17,
        title: 'Cappuccino',
        category: 'coffee',
        description: 'Espresso Beverages',
        price: '$7.99',
        inStock: '',
    },
    {
        id: 4,
        imgSrc: pos11,
        title: 'Frosting Choices',
        category: 'cupcakes',
        description: 'Cupcake Creations',
        price: '$19.99',
        inStock: '',
    },
    {
        id: 5,
        imgSrc: pos12,
        title: 'Nutella Cupcake',
        category: 'cupcakes',
        description: 'Specialty Cupcakes',
        price: '$123.99',
        inStock: '',
    },
    {
        id: 6,
        imgSrc: pos16,
        title: 'Mediterranean',
        category: 'pizza',
        description: 'Specialty Pizzas',
        price: '$2.79',
        inStock: '',
    },
    {
        id: 7,
        imgSrc: pos14,
        title: 'Cold Brew Concentrate',
        category: 'coffee',
        description: 'Cold Brews',
        price: '$1.29',
        inStock: '',
    },
    {
        id: 8,
        imgSrc: pos15,
        title: 'Blue Cheese Burger',
        category: 'burger',
        description: 'Gourmet Burgers',
        price: '$24.99',
        inStock: '',
    },
    {
        id: 9,
        imgSrc: pos19,
        title: 'Apple Cinnamon Waffle',
        category: 'waffle',
        description: 'Specialty Waffles',
        price: '$24.99',
        inStock: '',
    },
    {
        id: 10,
        imgSrc: pos10,
        title: 'Pesto Delight',
        category: 'pizza',
        description: 'Specialty Pizzas',
        price: '$24.99',
        inStock: '',
    },
    {
        id: 11,
        imgSrc: pos8,
        title: 'Cookie Dough Sundae',
        category: 'icecream',
        description: 'Sundae Creations',
        price: '$24.99',
        inStock: '',
    },
    {
        id: 12,
        imgSrc: pos13,
        title: 'Americano',
        category: 'coffee',
        description: 'Espresso Beverages',
        price: '$24.99',
        inStock: '',
    },
];

export const Orderlist = [
    {
        id: 1,
        imgSrc: pos17,
        title: 'Cappuccino',
        quantity: 1,
        price: '$3.99',
        discount: '30% Off',
    },
    {
        id: 2,
        imgSrc: pos19,
        title: 'Apple Cinnamon Waffle',
        quantity: 1,
        price: '$1.99',
        discount: '30% Off',
    },
    {
        id: 3,
        imgSrc: pos15,
        title: 'Classic Cheeseburger',
        quantity: 2,
        price: '$2.79',
        discount: '10% Off',
    },
    {
        id: 4,
        imgSrc: pos12,
        title: 'Nutella Cupcakes',
        quantity: 1,
        price: '$123.99',
        discount: '10% Off',
    },
    {
        id: 5,
        imgSrc: pos11,
        title: 'Strawberry Cupcakes',
        quantity: 1,
        price: '$123.99',
        discount: '10% Off',
    },
    {
        id: 6,
        imgSrc: pos14,
        title: 'Cold Coffee',
        quantity: 1,
        price: '$546.99',
        discount: '10% Off',
    },
    {
        id: 7,
        imgSrc: pos16,
        title: 'Cheese Burst Pizza',
        quantity: 2,
        price: '$4.99',
        discount: '10% Off',
    },
    {
        id: 8,
        imgSrc: pos13,
        title: 'Americano',
        quantity: 1,
        price: '$1.29',
        discount: '10% Off',
    },
];


interface FoodItem {
    id: number;
    name: string;
    category: string;
    price: string;
    orders: string;
    image: string;
    discount?: string; 
    color?: string;
}

export const TopSellingItems: FoodItem[] = [
    {
        id: 1,
        name: "Cappuccino",
        category: "Espresso Beverages",
        price: "$517",
        orders: "2.7K Orders",
        image: pos17
    },
    {
        id: 2,
        name: "Cheese Burger",
        category: "Gourmet Burgers",
        price: "$564",
        orders: "1,758 Orders",
        image: pos15,
        discount: "15% Off",
        color: 'info'
    },
    {
        id: 3,
        name: "Cinnamon Waffle",
        category: "Specialty Waffles",
        price: "$24.89",
        orders: "894 Orders",
        image: pos19
    },
    {
        id: 4,
        name: "Mediterranean",
        category: "Special Pizza",
        price: "$2.7",
        orders: "865 Orders",
        image: pos16,
        discount: "10% Off",
        color: 'primary1'
    },
    {
        id: 5,
        name: "Classic Burger",
        category: "Gourmet Burgers",
        price: "$564",
        orders: "1,758 Orders",
        image: pos9,
        discount: "10% Off",
        color: 'primary3'
    },
    {
        id: 6,
        name: "Almond Fudge",
        category: "Icecream",
        price: "$89",
        orders: "789 Orders",
        image: pos18,
        discount: "30% Off",
        color: 'success'
    }
];