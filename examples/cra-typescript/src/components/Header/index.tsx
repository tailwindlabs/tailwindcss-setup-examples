import React from 'react';

const Header = () => (
      <header 
        className="border border-gray-200 shadow-lg p-8 bg-gray-100 flex flex-col justify-center items-center duration-300 hover:bg-gray-200 hover:border-gray-300 rounded"
        >
          <h1 className="text-center text-lg font-bold text-gray-700">
            TailwindCSS with CRA and TypeScript
          </h1>
        <a
          className="inline-block bg-teal-500 hover:bg-teal-600 focus:outline-none text-gray-100 text-xs py-5 px-10 mt-4 text-center rounded duration-300"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TailwindCSS
        </a>
      </header>
)

export default Header;
