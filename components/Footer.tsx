import React from "react";
import blumiora from "../public/blumiora.png";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className="bg-accentApricot ">
        <div className="w-full h-1/2  flex p-15 justify-between ">
          <div className="">
            <Image
              src={blumiora}
              alt="Blumiora logo"
              width={120}
              height={90}
              priority
              className="w-28 h-auto"
            />
          </div>
          <div className="flex gap-4 justify-around w-4/6">
            <div>
              <h3 className="text-xl font-semibold">Explore</h3>
              <div className="pt-6">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-m hover:text-primary transition"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-m hover:text-primary transition"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-m hover:text-primary transition"
                    >
                      Workshops
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-m hover:text-primary transition"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-m hover:text-primary transition"
                    >
                      Connect
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Resources</h3>
              <div className="pt-6">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-m hover:text-primary transition"
                    >
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-m hover:text-primary transition"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-m hover:text-primary transition"
                    >
                      Guides
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">About</h3>
              <div className="pt-6">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-m hover:text-primary transition"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-m hover:text-primary transition"
                    >
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex py-10 px-10 items-center">
          <div>
            <p className="text-sm">2025 BLUMIORA. All right reserved.</p>
          </div>

          <div className="pl-20 flex w-3/6">
            <ul className="flex w-full justify-around">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-primary transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-primary transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-primary transition"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* icons */}
          <div className="flex w-1/4 justify-around text-primary">
            <FaTiktok size={24} />
            <FaInstagram size={24} />
            <FaPinterest size={24} />
            <FaFacebookF size={24} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
