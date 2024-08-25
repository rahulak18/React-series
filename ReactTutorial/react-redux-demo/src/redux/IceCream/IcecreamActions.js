import { BUY_ICECREAM } from "./IcecreamTypes"


export const buyIceCream = (number = 1) => {
    return {
        type: BUY_ICECREAM,
        payload: number
    }
}