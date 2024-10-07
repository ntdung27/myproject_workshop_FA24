import React from 'react'
import { TfiCup } from "react-icons/tfi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { SiTicktick } from "react-icons/si";

const Service = () => {
    return (
        <div className='bg-bgService pt-10 pb-10'>
            <div className="max-w-6xl mx-auto grid grid-cols-4 gap-10">
                <div className="flex items-center">
                    <div className="me-4 text-4xl ">
                        <TfiCup />
                    </div>
                    <div className="">
                        <div className="font-semibold text-xl">
                            <h1>High Quality</h1>
                        </div>
                        <div className="text-base text-detailPro">
                            <p>Crafted from top materials</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="me-4 text-4xl ">
                        <MdOutlineSupportAgent />
                    </div>
                    <div className="">
                        <div className="font-semibold text-xl">
                            <h1>24 / 7 Support</h1>
                        </div>
                        <div className="text-base text-detailPro">
                            <p>Dedicated support</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="me-4 text-4xl ">
                    <SiTicktick />
                    </div>
                    <div className="">
                        <div className="font-semibold text-xl">
                            <h1>Warranty Protection</h1>
                        </div>
                        <div className="text-base text-detailPro">
                            <p>Over 2 years</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="me-4 text-4xl ">
                        <LiaShippingFastSolid />
                    </div>
                    <div className="">
                        <div className="font-semibold text-xl">
                            <h1>Free Shipping</h1>
                        </div>
                        <div className="text-base text-detailPro">
                            <p>Order over 150 $</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service