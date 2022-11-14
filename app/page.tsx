"use client";

import { useState } from "react";
import React from "react";
import data from "../data.json";
import Link from "next/link";
import { AnimatePresence, motion as m } from "framer-motion";
import {
  Search,
  SearchMob,
  Location,
  Filter,
  FilterDark,
} from "./assets/Icon/icon";
import { FormEvent } from "react";

const SearchBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <m.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          duration: 4,
          type: "spring",
          stiffness: 120,
          damping: 40,
        }}
        className="flex relative z-30 justify-center items-center"
      >
        <form
          className="hidden dark:text-white md:flex pr-4 relative bottom-8 rounded-md dark:bg-[#19202D] bg-white "
        >
          <div className="flex items-center space-x-2 lg:space-x-4 pl-4 lg:pl-8 lg:pr-16 ">
            <Search />
            <input
              type="text"
              className="bg-transparent focus:outline-none"
              placeholder="Filter by title..."
            />
          </div>
          <div className="flex lg:px-6 px-4 text-base space-x-2 lg:space-x-4 justify-center items-center border-x-[2px] border-[#6E8098]/20">
            <Location />
            <input
             required
             {...props}
              type="text"
              className="bg-transparent focus:outline-none"
              placeholder="Filter by Location..."
            />
          </div>

          <div className="flex items-center pl-4  justify-center">
            <input
              type="checkbox"
              name="Full Time"
              id="FullTime"
              value="Full Time"
              className="w-5 h-5 checked:bg-[#5964E0] text-blue-600 bg-gray-100 rounded-sm  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              className="text-base pl-4 pr-8 text-[#19202D] font-bold dark:text-white"
              htmlFor="FullTime"
            >
              Full Time
            </label>
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="bg-dark_viol my-4 rounded-md text-base lg:px-12 lg:py-4 px-3 py-4 font-bold text-white "
            >
              Search
            </m.button>
          </div>
        </form>
        <form className="dark:bg-[#19202D] relative bottom-6 md:hidden bg-white rounded-md flex items-center justify-between">
          <input
            type="text"
            className="bg-transparent text-base ml-6"
            placeholder="Filter by title..."
          />
          <div className="flex space-x-3 my-4 mr-4 items-center">
            {props.darkMode ? <FilterDark /> : <Filter />}
            <SearchMob
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="bg-dark_viol rounded-md"
            />
          </div>
        </form>
      </m.div>
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute z-40 h-[100vh] w-full bg-black/50 "
          >
            <m.div
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              exit={{ y: -1000 }}
              transition={{ duration: 1 }}
              className="absolute z-50 mt-2 bg-white rounded-md mx-8 dark:bg-primary_dark_blue dark:text-white"
            >
              <form className="mx-6 ">
                <div className="flex py-6 border-b-[1px] border-[#6E8098]/10">
                  <Location />
                  <input
                    type="text"
                    className="bg-transparent text-base"
                    placeholder="Filter by location..."
                  />
                </div>
                <div className="flex items-center py-6 justify-start">
                  <input
                    type="checkbox"
                    name="Full Time"
                    id="FullTime"
                    value="Full Time"
                    className="w-5 h-5 checked:bg-[#5964E0] text-blue-600 bg-gray-100 rounded-sm  dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    className="text-base pl-4 pr-8 text-[#19202D] font-bold dark:text-white"
                    htmlFor="FullTime"
                  >
                    Full Time Only
                  </label>
                </div>
                <m.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="bg-dark_viol mb-6 rounded-md text-base  px-28 py-4 font-bold text-white "
                >
                  Search
                </m.button>
              </form>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};



const DisplayJobs = () => {

  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearchInputChange = (e: any) => {
    const value = e.target.value;
    setValue(value);
  };


  return (
    <>
    <SearchBar 
      value={value}
      onChange={handleSearchInputChange}/>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
          staggerChildren: 1,
          delayChildren: 1,
        }}
        className="grid gap-y-12  md:px-10 lg:px-40 lg:gap-y-12 lg:gap-x-6 md:gap-x-4 py-8 mx-auto justify-center items-center md:grid-cols-2 lg:grid-cols-3 "
      >
        {data.map((job) => (
          <m.div key={job.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <Link  href={`/${job.id}`}>
              <div className="bg-white dark:bg-primary_dark_blue rounded-md">
                <div
                  className="relative bottom-6 flex ml-8 justify-center items-center rounded-lg h-[50px] w-[50px]"
                  style={{ backgroundColor: job.logoBackground }}
                >
                  <img src={job.logo} alt="Company Logo" />
                </div>

                <div className="text-cont pb-10 pl-8">
                  <p className="text-[#6E8098] ">
                    {job.postedAt} • {job.contract}
                  </p>
                  <h3 className="dark:text-white py-3 font-bold text-xl">
                    {job.position}
                  </h3>
                  <p className=" text-base font-normal text-[#6E8098]">
                    {job.company}
                  </p>
                </div>
                <p className="font-bold pl-8 pb-4 text-dark_viol text-sm ">
                  {job.location}
                </p>
              </div>
            </Link>
          </m.div>
        ))}
      </m.div>
    </>
  );
};

export default DisplayJobs;
