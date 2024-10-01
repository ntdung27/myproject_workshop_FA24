import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { GrContactInfo } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const ContactPage = () => {
    return (
        <div>
            <div>
                <img src="https://picsum.photos/id/1/1440/600" alt="" className="w-full" />
            </div>
            <div className="max-w-6xl mx-auto mt-10 mb-10 grid grid-cols-3 gap-16">
                <div className="flex">
                    <div className="contact-icons w-16 h-16 text-borderBtn me-4">
                        <div className="text-5xl flex justify-center items-center h-full">
                            <CiLocationOn />
                        </div>
                    </div>
                    <div className="">
                        <div className="uppercase font-bold text-xl">
                            <h1>address</h1>
                        </div>
                        <div className="text-detailPro py-2">
                            <p>60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội</p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="contact-icons w-16 h-16 text-borderBtn me-4">
                        <div className="text-5xl flex justify-center items-center h-full">
                            <GrContactInfo />
                        </div>
                    </div>
                    <div className="">
                        <div className="uppercase font-bold text-xl">
                            <h1>contact details</h1>
                        </div>
                        <div className="text-detailPro py-2">
                            <p>info@furniro.com</p>
                            <h1 className='text-xl font-semibold'>02056278686</h1>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="contact-icons w-16 h-16 text-borderBtn me-4">
                        <div className="text-5xl flex justify-center items-center h-full">
                            <IoShareSocialOutline />
                        </div>
                    </div>
                    <div className="">
                        <div className="uppercase font-bold text-xl">
                            <h1>social networks</h1>
                        </div>
                        <div className="text-detailPro py-2">
                            <ul className='flex text-3xl justify-between'>
                                <li><a href=""><FaSquareFacebook /></a></li>
                                <li><a href=""><IoLogoInstagram /></a></li>
                                <li><a href=""><AiFillTikTok /></a></li>
                                <li><a href=""><FaTwitterSquare /></a></li>
                                <li><a href=""><FaYoutubeSquare /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-bgContact flex items-center">
                <div className="">
                    <img src="https://picsum.photos/id/1/704/485" alt="" />
                </div>
                <div className="">
                    <div className="mx-9">
                        <div className="uppercase text-xl font-semibold">
                            <h3>contact</h3>
                        </div>
                        <div className="uppercase text-4xl font-bold py-5">
                            <h1>connect with us now</h1>
                        </div>
                        <div className="py-2">
                            <form action="" method="post" className=''>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="border-b-2 w-[296px] h-10 border-line ">
                                        <input type="text" placeholder='First Name' className='w-full h-full bg-bgContact focus-visible:outline-0' />
                                    </div>
                                    <div className="border-b-2 w-[296px] h-10 border-line ">
                                        <input type="text" placeholder='Last Name' className='w-full h-full bg-bgContact focus-visible:outline-0' />
                                    </div>
                                    <div className="border-b-2 w-[296px] h-10 border-line ">
                                        <input type="email" placeholder='Email' className='w-full h-full bg-bgContact focus-visible:outline-0' />
                                    </div>
                                    <div className="border-b-2 w-[296px] h-10 border-line ">
                                        <input type="text" placeholder='Phone Number' className='w-full h-full bg-bgContact focus-visible:outline-0' />
                                    </div>
                                    <div className="border-b-2 h-10 border-line col-span-2">
                                        <input type="text" placeholder='Message' className='w-full h-full bg-bgContact focus-visible:outline-0' />
                                    </div>
                                </div>
                                <div className="my-9">
                                    <button className='flex items-center'>
                                        <IoIosSend />
                                        <a href="">Send Information</a>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage