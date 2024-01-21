"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import DropDown from "../ui/dropDown";
import {Roboto} from 'next/font/google'
export const roboto = Roboto({subsets: ['latin'], weight: ['300', '400', '500', '900'], display: 'swap', style: ['normal', "italic"]})


export default function Navbar() {
  const menuListRef = useRef();

  const training = [
    { title: "Basics of DFT Scan Insertion", href: "#" },
    { title: "ATPG", href: "#" },
    { title: "Simulation", href: "#" },
    { title: "JTAG and iJTAG", href: "#" },
    { title: "IEEE 1500", href: "#" },
    { title: "MBIST, LBIST", href: "#" },
    { title: "Hands-on experience with ongoing Project", href: "#" },
    { title: "Verilog", href: "#" },
    { title: "Linux", href: "#" },
    { title: "Gvim", href: "#" },
  ];

  const services = [
    {
      title: "DFT Architecture and Implementation",
      href: "/services#1",
    },
    {
      title: "Scan Insertion",
      href: "/services#2",
    },
    {
      title: "ATPG Pattern Generation for Different Fault Models",
      href: "/services#3",
    },
    {
      title: "MBIST",
      href: "/services#4",
    },
    {
      title: "IO Testing",
      href: "/services#5",
    },
    {
      title: "Post Silicon Debug and ATE Support",
      href: "/services#6",
    },
  ];
  useEffect(() => {
    window.addEventListener("click", closeMenu);
    function closeMenu() {
      document.getElementById("training").removeAttribute("open");
      document.getElementById("services").removeAttribute("open");
    }
  });

  useEffect(() => {
    function handleOutsideClick(e) {
      if (menuListRef.current && !menuListRef.current.contains(e.target)) {
        if (!e.target.closest("#menu")) {
          const ele = document.getElementById("menuList");
          if (!ele.classList.contains("hidden")) {
            ele.classList.add("hidden");
          }
        }
      }
    }

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  function menuHandler() {
    const ele = document.getElementById("menuList");
    ele.classList.toggle("hidden");
  }

  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/">
            <Image
              src="/images/general/Sivector_logo.jpg"
              width={160}
              height={52}
              alt="sivector logo"
            ></Image>
          </Link>
        </div>

        {/* desktop nav */}
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details id="services">
                <summary>Services</summary>
                <ul className="p-2 bg-base-100 rounded-t-none w-[300px]">
                  <li>
                    <Link href="/services#1">
                      DFT Architecture and Implementation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#2">Scan Insertion</Link>
                  </li>
                  <li>
                    <Link href="/services#3">
                      ATPG Pattern Generation for Different Fault Models
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#4">MBIST</Link>
                  </li>
                  <li>
                    <Link href="/services#5">IO Testing</Link>
                  </li>
                  <li>
                    <Link href="/services#6">
                      Post Silicon Debug and ATE Support
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details id="training">
                <summary>Training</summary>
                <ul className="p-2 bg-base-100 rounded-t-none  w-[300px]">
                  <li>
                    <Link href="#">Basics of DFT Scan Insertion</Link>
                  </li>
                  <li>
                    <Link href="#">ATPG</Link>
                  </li>
                  <li>
                    <Link href="#">Simulation</Link>
                  </li>
                  <li>
                    <Link href="#">JTAG and iJTAG</Link>
                  </li>
                  <li>
                    <Link href="#">IEEE 1500</Link>
                  </li>
                  <li>
                    <Link href="#">MBIST, LBIST</Link>
                  </li>
                  <li>
                    <Link href="#">
                      Hands-on experience with ongoing Project
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Verilog</Link>
                  </li>
                  <li>
                    <Link href="#">Linux</Link>
                  </li>
                  <li>
                    <Link href="#">Gvim</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/#about-us">About Us</Link>
            </li>
            <li>
              <Link href="/#contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/career">Career</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>

        {/* mobileNav */}
        <div className="flex items-center justify-between md:hidden">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 mr-4"
              id="menu"
              onClick={menuHandler}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>

            <div
              className="absolute right-0 bg-white/50 backdrop-blur-sm w-[100vw] mt-4 text-right hidden"
              id="menuList"
              ref={menuListRef}
            >
              <ul className={`flex flex-col ${roboto.className} font-[500]`} id="menuList">
                <DropDown title="Services" links={services} />
                <hr />
                <DropDown title="Training" links={training} />
                <hr />
                <DropDown title="Career" titleLink="/career" />
                <hr />
                <DropDown title='About Us' titleLink='/#about-us'/>
                <hr />
                <DropDown title='Contact Us' titleLink='/#contact-us'/>
                <hr />
                <DropDown title='Home' titleLink='/'/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
