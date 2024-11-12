export interface Item {
    item_id: string;
    title: string;
    name: string;
    size: string;
    material: string;
    image_original: string;
    image_square: string;
    department: string;
}

export interface ItemDetail extends Item {
    collection: string;
    description: string;
    email: string;
    facebook_url: string;
    instagram_url: string;
    image_side_1: string;
    image_side_2: string;
    onSale: boolean;
    price: number;
    quantity: number;
}