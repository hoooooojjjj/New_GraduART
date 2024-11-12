export interface CartItem {
    item_id: string;
    title: string;
    name: string | null;
    description: string;
    image_original: string;
    image_square: string;
    price: number;
    onSale: boolean;
}
