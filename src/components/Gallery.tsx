import React from 'react'

const Gallery = () => {
    return (
        <div className='max-w-6xl mx-auto mt-10 mb-10'>
            <div className="flex items-center justify-between">
                <div className="text-4xl font-semibold">
                    <h2>Gallery</h2>
                </div>
                <div className="">
                    <button className=''>
                        <a href="">View all gallery</a>
                    </button>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-8">
                <img src="https://picsum.photos/id/1/405/296" alt="" />
                <img src="https://picsum.photos/id/1/405/296" alt="" />
                <img src="https://picsum.photos/id/1/405/296" alt="" />
                <img src="https://picsum.photos/id/1/405/296" alt="" />
                <img src="https://picsum.photos/id/1/405/296" alt="" />
                <img src="https://picsum.photos/id/1/405/296" alt="" />
            </div>
        </div>
    )
}

export default Gallery