import { Models } from "appwrite";

export interface Product extends Models.Document {
    name: string,
    price: number
    product_id: object
    images_urls: string[]
}

export interface ProductInfo extends Models.Document {
    damage: number,
    critical_damage: number,
    rarity: string
}