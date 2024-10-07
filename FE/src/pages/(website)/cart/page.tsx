import React from 'react'
import { IoTrashBin } from "react-icons/io5";

const CartPage = () => {
    return (
        <div className='max-w-6xl mx-auto flex justify-between gap-6 my-20'>
            <div className="w-[65%] text-center">
                <table className='w-full'>
                    <thead className='bg-[#F5F5F5]'>
                        <tr className='h-5 leading-10 '>
                            <th>Product</th>
                            <th></th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody className=''>
                        <tr>
                            <td>
                                <img src="https://picsum.photos/77/77" alt="" />
                            </td>
                            <td className='text-bgBtn'>
                                <h1>Asgaard sofa</h1>
                            </td>
                            <td className='text-bgBtn'>
                                <span>25.000.000đ</span>
                            </td>
                            <td className='font-semibold text-center'>
                                <span>1</span>
                            </td>
                            <td className='font-bold text-[#EF4444]'>
                                <span>25.000.000đ</span>
                            </td>
                            <td className='text-[#EF4444] text-xl'>
                                <IoTrashBin />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="w-[30%] bg-[#F5F5F5] p-5">
                <div className="w-11/12 mx-auto">
                    <div className="font-bold text-2xl">
                        <h1>Cart Total</h1>
                    </div>
                    <div className="py-3 text-line">
                        <hr />
                    </div>
                    <div className="flex justify-between">
                        <h1 className='font-semibold'>Subtotal</h1>
                        <span>25.000.000đ</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <h1 className='font-semibold'>Total</h1>
                        <span className='font-bold text-xl text-[#EF4444]'>25.000.000đ</span>
                    </div>
                    <div className="my-3">
                        <button className='w-full'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage