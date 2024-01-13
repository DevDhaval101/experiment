"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    window.addEventListener("click", closeMenu);
    function closeMenu() {
      document.getElementById("training").removeAttribute("open");
      document.getElementById("services").removeAttribute("open");
    }
  });
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href='/'>
            <Image
              src="/images/general/Sivector_logo.jpg"
              width={160}
              height={52}
              alt="sivector logo"
            ></Image>
          </Link>
        </div>
        <div className="flex-none">
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
      </div>
    </nav>
  );
}
