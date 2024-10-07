import React from 'react'
import { FaCircle } from "react-icons/fa";

const BillingDetail = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto my-10">
                <div className="font-bold text-3xl py-5">
                    <h1>Billing details</h1>
                </div>
                <div className="flex justify-between gap-8">
                    <div className="w-[50%]">
                        <form action="" className='grid grid-cols-2 items-center gap-6'>
                            <div className="flex flex-col mt-5">
                                <label htmlFor="">First Name</label>
                                <input type="text" name="" id="" className='border-[1px] border-line h-10' />
                            </div>
                            <div className="flex flex-col mt-5">
                                <label htmlFor="">Last Name</label>
                                <input type="text" name="" id="" className='border-[1px] border-line h-10' />
                            </div>
                            <div className="w-full col-span-2">
                                <div className="flex flex-col">
                                    <label htmlFor="">Company Name (Optional)</label>
                                    <input type="text" name="" id="" className='border-[1px] border-line h-10' />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="">Country / Region</label>
                                    <input type="text" name="" id="" className='border-[1px] border-line h-10' />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="">Street address</label>
                                    <input type="text" name="" id="" className='border-[1px] border-line h-10' />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="">Town / City</label>
                                    <input type="text" name="" id="" className='border-[1px] border-line h-10' />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="">Province</label>
                                    <input type="text" name="" id="" className='border-[1px] border-line h-10' />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="">ZIP code</label>
                                    <input type="text" name="" id="" className='border-[1px] border-line h-10' />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="">Phone</label>
                                    <input type="text" name="" id="" className='border-[1px] border-line h-10' />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="">Email address</label>
                                    <input type="text" name="" id="" className='border-[1px] border-line h-10' />
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="w-[50%]">
                        <div className="">
                            <div className="flex justify-between font-bold text-xl">
                                <h1>Product</h1>
                                <span>Subtotal</span>
                            </div>
                            <div className="flex justify-between mt-3">
                                <h1 className='text-bgBtn'>Asgaard sofa <span className='text-[#000000] font-semibold'>X1</span></h1>
                                <span className='font-semibold'>25.000.000đ</span>
                            </div>
                            <div className="flex justify-between mt-3 font-semibold">
                                <h1>Subtotal</h1>
                                <span>25.000.000đ</span>
                            </div>
                            <div className="flex justify-between mt-3">
                                <h1 className='font-semibold'>Total</h1>
                                <span className='font-bold text-xl text-[#B88E2F]'>25.000.000đ</span>
                            </div>
                        </div>

                        <div className="my-8">
                            <hr />
                        </div>
                        <div className="">
                            <div className="flex gap-3 items-center mb-3 font-semibold">
                                <FaCircle />
                                <h1>Direct Bank Transfer</h1>
                            </div>
                            <div className="text-bgBtn mb-3">
                                <p>Make your payment directly into our bank account. Please use your Order ID as the
                                    payment reference. Your order will not be shipped until the funds have cleared
                                    in our account.
                                </p>
                            </div>
                            <div className="text-bgBtn mb-3">
                                <input type="checkbox" name="" id="" className='' />ATM Bank Transfer
                                <br></br>
                                <input type="checkbox" name="" id="" />Cash On Delivery
                            </div>
                            <div className="font-semibold">
                                <p>Your personal data will be used to support your experience throughout this website,
                                    to manage access to your account, and for other purposes described in our privacy
                                    policy.
                                </p>
                            </div>
                            <div className="my-5 text-center">
                                <button className='w-1/2'>Place order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BillingDetail