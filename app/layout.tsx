"use client";
import "../styles/globals.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Kumbh_Sans } from "@next/font/google";

const Kumbh = Kumbh_Sans();

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode;
  },
  props: any
) {
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [localStorage.theme ]);
 
  
  
  const [darkMode, setDarkMode] = useState(false);
  const onDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html lang="en" className={`${darkMode ? "dark" : ""} ${Kumbh.className}`}>
      <head>
        <title>Dev Jobs</title>
      </head>

      <body
       className={`bg-[#F4F6F8] dark:bg-[#121721]`}>
        <Header darkMode={darkMode} onClick={onDarkMode} />
        {children}
      </body>
    </html>
  );
}
