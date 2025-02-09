import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const clearTheCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-10 p-10">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="m-2 p-2 bg-black text-white text-xl rounded-lg"
            onClick={clearTheCart}>
                Clear Cart
            </button>
            {cartItems.length === 0 && 
            <p>Cart is empty. Add some more items.</p>
            }
            <div className="w-6/12 m-auto">
                <ItemCard items={cartItems}/>
            </div>
        </div>
    );
}
export default Cart;