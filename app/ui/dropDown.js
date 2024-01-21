"use client";

import Link from "next/link";
import { useState } from "react";
import { roboto } from '../component/navbar'


export default function DropDown({ title, links, titleLink }) {
  const [isBtnClick, setIsBtnClick] = useState();

  const hamburgerClass = isBtnClick
    ? "w-6 h-6 inline-block transition-transform rotate-180 ease-in-out duration-300"
    : " w-6 h-6 inline-block";

  const listClass = isBtnClick ? "block" : "hidden";

  function closeMenu() {
    const ele = document.getElementById("menuList");
    if (!ele.classList.contains("hidden")) {
      ele.classList.add("hidden");
    }
  }

  return (
    <li
      className="p-2 text-xl"
      onClick={() => setIsBtnClick((prv) => !prv)}
    >

      <Link href={titleLink ? titleLink : "#"} onClick={titleLink && closeMenu}>{title}</Link>

      {links && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={hamburgerClass}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      )}
      <ul className={listClass} id={title}>
        {links &&
          links.map((link) => (
            <li
              key={link.title}
              className={`px-4 py-1 hover:bg-white text-lg ${roboto.className} font-[400]`}
              onClick={closeMenu}
            >
              <Link href={link.href}>{link.title} </Link>
            </li>
          ))}
      </ul>
    </li>
  );
}
