import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <Link href={"/"}>
                        <Image alt='Logo-Zayan-Store' src={'/logo.png'} height={60} width={80}></Image>
                    </Link>
                    <p>
                        Zayan Store provides fresh
                        <br />
                        groceries and daily essentials
                        <br />
                        with trusted quality and
                        <br />
                        affordable prices.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title text-secondary">Shop</h6>
                    <a className="link link-hover">All Products</a>
                    <a className="link link-hover">Groceries</a>
                    <a className="link link-hover">Beverages</a>
                    <a className="link link-hover">Daily Essentials</a>
                </nav>

                <nav>
                    <h6 className="footer-title text-secondary">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Our Store</a>
                    <a className="link link-hover">Careers</a>
                </nav>

                <nav>
                    <h6 className="footer-title text-secondary">Support</h6>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Return Policy</a>
                    <a className="link link-hover">FAQ</a>
                </nav>
            </div>
        </div>
    );
};

export default Footer;