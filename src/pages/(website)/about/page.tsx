import React from 'react'
import { TbTargetArrow } from "react-icons/tb";
import { FaRoad } from "react-icons/fa6";
import { PiListHeartFill } from "react-icons/pi";
const AboutPage = () => {
    return (
        <div className="">
            <div>
                <img src="https://picsum.photos/id/1/1440/600" alt="" className="w-full" />
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-9 my-16 text-center">
                <div className="w-[350px]">
                    <div className="text-8xl flex justify-center text-borderBtn">
                        <TbTargetArrow />
                    </div>
                    <div className="text-3xl uppercase font-bold py-3">
                        <h1>our mission</h1>
                    </div>
                    <div className="">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>
                <div className="w-[350px]">
                    <div className="text-8xl flex justify-center text-borderBtn">
                        <FaRoad />
                    </div>
                    <div className="text-3xl uppercase font-bold py-3">
                        <h1>our mission</h1>
                    </div>
                    <div className="">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>
                <div className="w-[350px]">
                    <div className="text-8xl flex justify-center text-borderBtn">
                        <PiListHeartFill />
                    </div>
                    <div className="text-3xl uppercase font-bold py-3">
                        <h1>our mission</h1>
                    </div>
                    <div className="">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-10 mb-10 grid grid-cols-2 gap-8 items-center">
                <div className="">
                    <img src="https://picsum.photos/id/1/624/408" alt="" />
                </div>
                <div className="">
                    <div className="uppercase font-bold text-3xl">
                        <h1>about Furniro company</h1>
                    </div>
                    <div className="py-5">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p className='mt-3'>
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-10 mb-10 relative">
                <div className="w-7/12 mx-auto text-center font-bold text-3xl">
                    <h1>WE CREATE NATURAL WOOD FURNITURE
                        AS WELL AS HIGH-QUALITY</h1>
                </div>
                <div className="my-16 grid grid-cols-4 gap-6">
                    <div className="relative">
                        <div className="">
                            <img src="https://picsum.photos/id/1/296/396" alt="" />
                        </div>
                        <div className="uppercase font-semibold absolute left-5 bottom-5 text-white">
                            <h1 className=''>flooring</h1>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="">
                            <img src="https://picsum.photos/id/1/296/396" alt="" />
                        </div>
                        <div className="uppercase font-semibold absolute left-5 bottom-5 text-white">
                            <h1 className=''>flooring</h1>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="">
                            <img src="https://picsum.photos/id/1/296/396" alt="" />
                        </div>
                        <div className="uppercase font-semibold absolute left-5 bottom-5 text-white">
                            <h1 className=''>flooring</h1>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="">
                            <img src="https://picsum.photos/id/1/296/396" alt="" />
                        </div>
                        <div className="uppercase font-semibold absolute left-5 bottom-5 text-white">
                            <h1 className=''>flooring</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage