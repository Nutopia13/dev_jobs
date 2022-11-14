import React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  DarkMode,
  LightMode,
  LightModeActive,
  DarkModeActive,
} from "./assets/Icon/icon";
import { motion as m, AnimatePresence } from "framer-motion";

const Header = (props: any) => {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 40,
    duration: 1.5,
  };

  return (
    <div>
      <m.header
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          duration: 4,
          type: "spring",
          stiffness: 120,
          damping: 40,
        }}
        className="bg-dark_viol overflow-hidden md:rounded-bl-[100px] lg:rounded-b-[100px] relative text-white"
      >
        <div className="area z-10">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <nav className="flex mx-auto relative z-20 justify-between md:py-16 py-11 md:px-10 lg:px-40 px-6 items-center">
          <Link href="/">
            <h1 className="font-extrabold text-2xl">Open Jobs</h1>
          </Link>
          <div className="flex items-center space-x-2">
            <AnimatePresence>
              {props.darkMode ? (
                <LightModeActive onClick={props.onClick} />
              ) : (
                <LightMode onClick={props.onClick} />
              )}
            </AnimatePresence>
            <m.div
              transition={spring}
              onClick={props.onClick}
              className={
                "mode_toggle cursor-pointer flex items-center w-[48px] py-1 rounded-xl bg-white " +
                (props.darkMode ? "justify-end" : "justify-start")
              }
            >
              <m.div
                transition={spring}
                layout
                className="circle mx-1 hover:opacity-70 transition-all duration-150 "
              ></m.div>
            </m.div>
            {props.darkMode ? (
              <DarkMode onClick={props.onClick} />
            ) : (
              <DarkModeActive onClick={props.onClick} />
            )}
          </div>
        </nav>
      </m.header>
    </div>
  );
};

export default Header;
