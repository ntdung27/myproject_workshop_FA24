import React from 'react'
import ProductItem from '../../../components/ProductItem'
import Service from '../../../components/Service'

const ProductsList = () => {
    return (
        <div>
            <img src="https://picsum.photos/id/1/1440/600" alt="" className="w-full" />
            <div className="max-w-6xl mx-auto pt-10 pb-16 flex justify-between">
                <div className="">
                    <div className="font-semibold text-xl">
                        <h1>Categories</h1>
                    </div>
                    <nav className="pt-5 text-medium text-detailPro">
                        <ul>
                            <li><a href="">Cafe Chair</a></li>
                            <li><a href="">Sofa</a></li>
                            <li><a href="">Lamp</a></li>
                            <li><a href="">Carpet</a></li>
                            <li><a href="">Cabinet</a></li>
                            <li><a href="">Tea table</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="">
                    <div className="pt-10 pb-10 grid grid-cols-3 gap-8">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                    <div className="">
                        <button className='px-5 py-3 me-4 rounded-lg bg-bgBtn text-white border-none'><a href="">1</a></button>
                        <button className='px-5 py-3 me-4 rounded-lg bg-bgBtn text-white border-none'><a href="">2</a></button>
                        <button className='px-5 py-3 me-4 rounded-lg bg-bgBtn text-white border-none'><a href="">3</a></button>
                        <button className='px-5 py-3 me-4 rounded-lg bg-bgBtn text-white border-none'><a href="">Next</a></button>
                    </div>
                </div>
            </div>
            <Service />
        </div>
    )
}

export default ProductsList