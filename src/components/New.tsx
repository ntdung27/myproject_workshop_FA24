import React from 'react'
import NewItem from './NewItem'

const New = () => {
    return (
        <div className='max-w-6xl mx-auto mt-10 mb-10'>
            <div className="flex items-center justify-between">
                <div className="text-4xl font-semibold">
                    <h2>News</h2>
                </div>
                <div className="">
                    <button className=''>
                        <a href="">View all news</a>
                    </button>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-4 gap-x-8">
                <NewItem />
                <NewItem />
                <NewItem />
                <NewItem />
            </div>
        </div>
    )
}

export default New