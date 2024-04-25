import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../Components/cart-tile";

const Cart = () => {
  const [totalcart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalcart);
  return (
    <div className=" flex justify-center">
      {cart && cart.length ? (
        <>
          <div className=" min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile CartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-end p-5  space-y-5 mt-14">
            <h1 className="font-bold text-lg text-red-800">Your Cart Summary</h1>
            <p>
              <span className="font-bold text-lg">
                Total Item
              </span>
              <span className="text-lg">
                : {cart.length}
              </span>
            </p>
            <p>
            <span className="font-bold text-lg text-red-800">
                Total Amount
              </span>
              <span className="text-lg text-red-800 ">
                : {totalcart}
              </span>
            </p>
          </div>

        </>
      ) : (
        <div className=" min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your Cart is Empty
          </h1>
          <Link to="/">
            <button className=" bg-red-950 text-white border-2 rounded-lg font-bold p-5 ">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
