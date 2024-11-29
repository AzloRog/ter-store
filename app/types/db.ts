import { Models } from "appwrite";

export interface Product extends Models.Document {
    name: string,
    price: number
    image_id: string
}