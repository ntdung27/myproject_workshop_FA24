import React from 'react'

const ProductItem = () => {
    return (
        <div className='bg-bgDetailPro'>
            <div className="">
                <img src="https://picsum.photos/id/1/296/301" alt="" />
            </div>
            <div className="w-11/12 mx-auto ">
                <div className="text-xl font-semibold pt-3 pb-2">
                    <h1>Leviosa</h1>
                </div>
                <div className="text-base text-detailPro">
                    <p>Stylish cafe chair</p>
                </div>
                <div className="text-price font-semibold pt-2 pb-2">
                    <p>1.800.000đ</p>
                </div>
                <div className="mb-3">
                    <button className='w-full'>
                        <a href="">Add to cart </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem