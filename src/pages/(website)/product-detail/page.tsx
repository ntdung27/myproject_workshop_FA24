import React from 'react'
import { FaStar } from "react-icons/fa";
import ProductItem from '../../../components/ProductItem';
const ProductDetail = () => {
    return (
        <div className='max-w-6xl mx-auto my-20'>
            <div className="grid grid-cols-2 gap-8">
                <div className="flex justify-between gap-8">
                    <div className="">
                        <div className="mb-[16px]">
                            <img src="https://picsum.photos/77/77" alt="" />
                        </div>
                        <div className="mb-[16px]">
                            <img src="https://picsum.photos/77/77" alt="" />
                        </div>
                        <div className="mb-[16px]">
                            <img src="https://picsum.photos/77/77" alt="" />
                        </div>
                        <div className="mb-[16px]">
                            <img src="https://picsum.photos/77/77" alt="" />
                        </div>
                        <div className="mb-[16px]">
                            <img src="https://picsum.photos/77/77" alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <img src="https://picsum.photos/515/515" alt="" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="font-semibold text-xl">
                        <h2>Asgaard sofa</h2>
                    </div>
                    <div className="font-bold text-3xl text-price py-3">
                        <h1>25.000.000đ</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="text-[#FFC700] flex me-3">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className="me-3 text-[#9F9F9F]">
                            <span>|</span>
                        </div>
                        <div className=" text-[#9F9F9F]">
                            <h3>5 Customer Review</h3>
                        </div>
                    </div>
                    <div className="font-semibold py-3">
                        <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
                            highs for a sound.
                        </p>
                    </div>
                    <div className="">
                        <form action="">
                            <div className="pb-3">
                                <div className=" text-[#9F9F9F]">
                                    <h3>Size</h3>
                                </div>
                                <div className="py-2">
                                    <button className='me-3 rounded-[5px]'>L</button>
                                    <button className='me-3 rounded-[5px]'>XL</button>
                                    <button className='me-3 rounded-[5px]'>XS</button>
                                </div>
                            </div>
                            <div className="">
                                <div className=" text-[#9F9F9F]">
                                    <h3>Color</h3>
                                </div>
                                <div className="py-2">
                                    <button className='rounded-full w-[30px] h-[30px] me-3'></button>
                                    <button className='rounded-full w-[30px] h-[30px] me-3'></button>
                                    <button className='rounded-full w-[30px] h-[30px] me-3'></button>
                                </div>
                            </div>
                            <div className="flex gap-8 items-center my-6">
                                <div className="flex gap-8 justify-around items-center w-[123px] h-[44px] border-[1px] border-bgBtn rounded-[5px]">
                                    <div className="">
                                        <span>-</span>
                                    </div>
                                    <div className="">
                                        <span>1</span>
                                    </div>
                                    <div className="">
                                        <span>+</span>
                                    </div>
                                </div>
                                <div className="">
                                    <button className='w-[215px] h-[44px] rounded-[5px]'>Add to cart</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className=" text-bgBtn">
                        <hr />
                    </div>
                    <div className="py-5 text-bgBtn">
                        <h3>SKU : SS001</h3>
                        <h3>Category: Sofa</h3>
                        <h3>Tags: Sofa, Chair, Home, Shop</h3>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <ul className='flex gap-8 font-semibold py-3'>
                        <li>
                            <a href="">Description</a>
                        </li>
                        <li>
                            <a href="">Additional Information</a>
                        </li>
                        <li>
                            <a href="">Reviews [5]</a>
                        </li>
                    </ul>
                </div>
                <div className=" py-2">
                    <hr />
                </div>
                <div className="py-5 text-bgBtn">
                    <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active
                        stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords,
                        and takes the show on the road.
                    </p>
                    <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering.
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                        stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
                        highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine
                        tune the controls to your personal preferences while the guitar-influenced leather strap enables
                        easy and stylish travel.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="">
                        <img src="https://picsum.photos/624/378" alt="" />
                    </div>
                    <div className="">
                        <img src="https://picsum.photos/624/378" alt="" />
                    </div>
                </div>
            </div>
            <div className="my-20">
                <div className="font-bold text-3xl text-center">
                    <h1>Related Products</h1>
                </div>
                <div className="grid grid-cols-4 gap-8 mt-10">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail