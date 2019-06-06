import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul className="flex justify-between p-2">
      <li className="font-semibold bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600 cursor-pointer">
        <Link href="https://tailwindcss.com/">
          <a target="_blank">Tailwind Docs</a>
        </Link>
      </li>
      <li className="font-semibold bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600 cursor-pointer">
        <Link href="https://www.purgecss.com/">
          <a target="_blank">Purge CSS Docs</a>
        </Link>
      </li>
      <li className="font-semibold bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600 cursor-pointer">
        <Link href="https://sass-lang.com/documentation">
          <a target="_blank">Sass Docs</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
