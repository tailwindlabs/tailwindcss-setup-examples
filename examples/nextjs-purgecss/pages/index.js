import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import "../assets/index.scss";

const Home = () => (
  <div className="font-sans">
    <Head title="Home" />
    <Nav />

    <div className="container mx-auto py-5">
      <h1 className="text-center font-bold text-2xl">Welcome to Next with Tailwind</h1>
      <p className="shadow p-3 bg-white text-center my-2 rounded font-semibold text-gray-700">
        Make something awesome!
      </p>
    </div>
  </div>
)

export default Home
