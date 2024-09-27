import React from 'react'
import ProductItem from './ProductItem'

const NewProduct = () => {
    return (
        <div className='max-w-6xl mx-auto mt-10 mb-10'>
            <div className="flex items-center justify-between">
                <div className="text-4xl font-semibold">
                    <h2>New Products</h2>
                </div>
                <div className="">
                    <button className=''>
                        <a href="">View all products</a>
                    </button>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-4 gap-x-8">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    )
}

export default NewProduct