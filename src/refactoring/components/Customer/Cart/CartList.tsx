import { CartItem } from "../../../../types";
import { CartItemBox } from "./CartItem";

interface Props{
    cart: CartItem[]
}

export const CartList = ({cart}: Props) => {

    return(
        <div>
            <h2 className="text-2xl font-semibold mb-4">장바구니 내역</h2>
            <div className="space-y-2">
            {cart.map((item: CartItem, index) => (
                <CartItemBox key={index} item={item} />
            ))}
            </div>
        </div>
    )
}