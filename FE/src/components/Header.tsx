// import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
    return (
        <header>
            <div className="max-w-6xl mx-auto pt-3 pb-3">
                <div className="grid grid-cols-3 gap-8 items-center">
                    <div>
                        <img src="/public/Logo.svg" alt="NhShop" />
                    </div>
                    <nav>
                        <ul className="flex justify-center space-x-5 font-medium">
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex justify-end space-x-4">
                        <Link to="/auth/login">
                            <AiOutlineUser />
                        </Link>
                        <Link to="/search">
                            <AiOutlineSearch />
                        </Link>
                        <Link to="/wishlist">
                            <AiOutlineHeart />
                        </Link>
                        <Link to="/cart">
                            <IoCartOutline />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header