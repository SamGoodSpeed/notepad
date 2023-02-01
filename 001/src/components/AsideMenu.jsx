import React from "react";
import styles from "../styles";
import SocialMedia from "./SocialMedia";
import { useState } from "react";
const AsideMenu = () => {
  const [showAside, setShowAside] = useState(false);

  return (
    <>
      <button onClick={() => setShowAside(!showAside)} className="fixed top-0 right-0 z-50 p-3 color-white rounded-full bg-cyan-800 m-2 md:hidden">
				<svg width="25" height="25" fill='white' viewBox="0 0 24 24">
          {showAside ? (
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          ) : (
            <path d="M7 10H17V12H7zM15 15H7V17H15z" />
          )}
        </svg>
      </button>
      {showAside && 
      <aside
        className={`${styles.aside} ${styles.flexCenter} flex-col justify-between  p-10 font-mono md:hidden`}
      >
        <div className={`${styles.flexCenter} flex-col`}>
          <div
            className={`rounded-full overflow-hidden w-36 h-36 ${styles.border}`}
          >
            <img src="https://picsum.photos/200/300" alt="Logo" />
          </div>
          <h2 className="text-2xl mt-8">AI NotePad</h2>
          <p>Your Quick Notes App</p>
        </div>
        <nav className="w-full text-center">
          <a href="#1" className="px-6 py-2 block ">
            Home
          </a>
          <a href="#1" className="px-6 py-2 block">
            About
          </a>
          <a href="#1" className="px-6 py-2 block">
            Services
          </a>
          <a href="#1" className="px-6 py-2 block">
            Contact
          </a>
        </nav>
        <div className="">
          <SocialMedia />
        </div>
        <div className="flex flex-col items-center">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Dashboard
            </span>
          </button>
          <p className="mt-8">Sign / Login In</p>
        </div>
        <div className="">
          <p>2023 design by PopoKim</p>
        </div>
      </aside>
			}
    </>
  );
};

export default AsideMenu;
