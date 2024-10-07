import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-bgFooter text-white'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-4 gap-8 pt-10 pb-10'>
                    <div>
                        <div>
                            <img src="/public/Logo_white.svg" alt="" />
                        </div>
                        <div className='text-base'>
                            <p>
                                400 University Drive Suite 200 Coral Gables,
                                FL 33134 USA....
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='text-xl font-medium'>
                            <h3>Sitemap</h3>
                        </div>
                        <nav className='leading-9'>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div className='text-xl font-medium'>
                            <h3>Help</h3>
                        </div>
                        <nav className='leading-9'>
                            <ul>
                                <li>
                                    <Link to="">Payment Options</Link>
                                </li>
                                <li>
                                    <Link to="">Returns</Link>
                                </li>
                                <li>
                                    <Link to="">Privacy Policies</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div className='text-xl font-medium'>
                            <h3>Location</h3>
                        </div>
                        <nav className='leading-9'>
                            <ul>
                                <li>
                                    <Link to="">support@euphoria.in</Link>
                                </li>
                                <li>
                                    <Link to="">Ahmedabad Main Road</Link>
                                </li>
                                <li>
                                    <Link to="">Udaipur, India- 313002</Link>
                                </li>
                                <li>
                                    <Link to="">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div>
                    <hr />
                </div>
                <div className='flex justify-center pt-5 pb-5'>
                    Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer