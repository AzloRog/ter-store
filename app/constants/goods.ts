import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Cutlass from "../images/goodsIcons/Cutlass.png"
import Cutlass2 from "../images/goodsIcons/Cutlass2.png"

export interface product {
    id: number,
    title: string,
    price: number,
    damage: number,
    criticalDamage: number,
    rarity: string,
    images: StaticImport[]
}
const goods: product[] = [
    {
        id: 0,
        title: "Cutlas",
        price: 1250,
        damage: 53,
        criticalDamage: 4,
        rarity: "Light Red",
        images: [Cutlass, Cutlass2],
    },
    {
        id: 1,
        title: "Marino",
        price: 1250,
        damage: 53,
        criticalDamage: 4,
        rarity: "Light Red",
        images: [Cutlass, Cutlass2],
    },
    {
        id: 2,
        title: "Kasto",
        price: 1250,
        damage: 53,
        criticalDamage: 4,
        rarity: "Light Red",
        images: [Cutlass, Cutlass2],
    },








]


export default goods;