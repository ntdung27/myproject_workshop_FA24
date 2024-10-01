import React from 'react'

const ProductsListPage = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className="uppercase font-bold text-3xl text-center pb-10">
                <h1>List of All Products</h1>
            </div>
            <div className="">
                <table className='w-full table-auto'>
                    <thead className='text-left h-10 bg-borderBtn'>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Stock</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody className='border-b-[1px]'>
                        <tr className='h-10'>
                            <td>
                                <input type="checkbox" name="" id="" />
                            </td>
                            <td>1</td>
                            <td>Product 1</td>
                            <td>Lovito</td>
                            <td>$1000</td>
                            <td>This is the description's Product 1</td>
                            <td>1000</td>
                            <td>Instock</td>
                            <td>
                                <img src="https://picsum.photos/70/70" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductsListPage