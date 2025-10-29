import React from "react";
import blumiora from "../public/blumiora.png";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-accentApricot">
        <div className="w-full h-1/2  flex py-16 px-10 justify-between flex-col sm:flex-row">
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
          <div className="flex gap-4 justify-around w-4/6 flex-col sm:flex-row sm:pt-10">
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

        <div className="flex flex-col justify-center gap-6 border-t border-border sm:flex-row py-10 px-10 items-center">
          <div>
            <p className="text-sm">
              © {new Date().getFullYear()} BLUMIORA. All right reserved.
            </p>
          </div>

          <div className="flex text-center">
            <ul className="w-full">
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
          <div className="flex w-full justify-center gap-6 sm:w-1/2 sm:justify-around md:w-1/3 lg:w-1/4  text-primary">
            <a>
            <FaTiktok size={24} />
            </a>
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
