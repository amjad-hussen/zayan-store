import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from '../button/NavLink';
import { BsCart3 } from "react-icons/bs";


const Navbar = () => {

    const nav = <>
    <li>
        <NavLink href={'/'}> Home</NavLink>
    </li>
    <li>
        <NavLink href={'/items'}> Items</NavLink>
    </li>
    <li>
        <NavLink href={'/about'}> About</NavLink>
    </li>
    <li>
        <NavLink href={'/contact'}> Contact</NavLink>
    </li>
    </>

    return (
        <div>
            <div className="navbar sticky top-0 z-50 bg-base-200 px-10 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {nav}
                        </ul>
                    </div>
                    <Link href={"/"}>
                    <Image alt='Logo-Zayan-Store' src={'/logo.png'} height={60} width={80}></Image>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <Link className='btn btn-secondary btn-outline' href={'/cart'}>
                    <BsCart3></BsCart3>
                    </Link>
                    <Link href={'/login'}>
                    <button className=' btn btn-secondary '>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;