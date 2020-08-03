import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="antialiased text-gray-900 flex justify-center min-h-screen">
        {children}
      </div>
    </>
  );
};

export default Layout;
