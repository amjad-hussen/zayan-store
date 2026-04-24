"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const path = usePathname();

    const isActive =
        href === "/"
            ? path === "/"
            : path.startsWith(href);

    return (
        <div>
            <Link className={`${isActive ? "text-secondary border-b-2 border-secondary" : "hover:text-secondary"
                } font-medium transition duration-200`} href={href} >{children}</Link>
        </div>
    );
};

export default NavLink;