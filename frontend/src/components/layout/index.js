import React from "react";
import Footer from "@/components/Footer";
import Header from "../Header";
import Image from "next/image";
import { Inter as interFonts } from 'next/font/google'
import { cookieToInitialState } from 'wagmi'
import { headers } from 'next/headers'
import { config } from '@/config'
import ContextProvider from '@/context'

import { useState, useEffect, useContext } from "react";

const inter = interFonts({ subsets: ['latin'] })

const Layout = ({ children }) => {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <>
      <body className={inter.className}>
        <ContextProvider initialState={initialState}>{children}</ContextProvider>
      </body>
    </>
  );
};

export default Layout;
