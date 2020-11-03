const Header = () => {
  return (
    <nav className="flex bg-purple-500 p-6 items-center flex-wrap justify-between">
      
      <a href="/">
      <div className="flex flex-shrink-0 text-white items-center mr-6 space-x-4">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Nextjs Tailwind App
        </span>
      </div>
      </a>

      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="block w-full flex-grow lg:w-auto lg:flex lg:items-center">
        <div className="lg:flex-grow">
          <a
            href="/aboutus"
            className="block lg:inline-block lg:mt-0 mt-4 mr-4 text-sm text-teal-200 hover:text-white"
          >
            About us
          </a>
        </div>
        <div>
          <a
            href="https://tailwindcss.com"
            className="inline-block text-sm animate-bounce text-teal-200 px-4 py-2 border rounded hover:border-transparent hover:bg-white hover:text-purple-500 bg-purple text-white mt-6 lg:mt-0"
          >
            Get Started with Tailwind
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
