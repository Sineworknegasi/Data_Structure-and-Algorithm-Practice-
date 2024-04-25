import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../Store/slices/cart-slice';

const CartTile = ({ CartItem }) => {

    const despatch = useDispatch();

    function handleRemoveFromCart () {
        despatch(removeFromCart(CartItem.id));
    }

  return (
    <div className=' flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl'>
     <div className='flex p-3 '>
        <img src={CartItem?.image} alt={CartItem?.title} className='h-28 rounded-lg' />
        <div className='ml-10 self-start space-y-5 '>
            <h1 className='text-xl text-white font-bold'>{CartItem?.title}</h1>
            <p className='text-white font-extrabold'>{CartItem?.price}</p>
        </div>
        <div>
            <button onClick={handleRemoveFromCart} className=" bg-red-950 text-white border-2 rounded-lg font-bold p-5 "
          >
            Remove from cart
            </button>
        </div>
     </div>
    </div>
  )
}

export default CartTile
