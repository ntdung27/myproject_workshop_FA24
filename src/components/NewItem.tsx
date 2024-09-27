import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";

const NewItem = () => {
    return (
        <div className=''>
            <div className="">
                <img src="https://picsum.photos/id/1/296/211" alt="" />
            </div>
            <div className="">
                <div className="text-base text-detailPro pt-2 pb-2">
                    <p className='flex items-center'>
                        <FaRegCalendarAlt />
                        <span className='ps-3'>24/4/2024</span>
                    </p>
                </div>
                <div className="text-xl font-semibold">
                    <h1>A bedroom must have something like this</h1>
                </div>
                <div className="text-price font-semibold pt-2 pb-2 flex items-center">
                    <a href='' className='pe-2'>Xem chi tiết</a>
                    <GrLinkNext />
                </div>
            </div>
        </div>
    )
}

export default NewItem