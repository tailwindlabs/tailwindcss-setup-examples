import Layout from "../components/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <div className="flex">
      <div>
        <div className="pb-48 mt-4 flex-grow">
          <h2 className="text-4xl text-purple-600 mb-20">
            About us
          </h2>

          <div className="space-x-8 text-3xl w-full">
            <button className="animate-spin block py-4 px-8 bg-yellow-500 text-yellow-100 rounded-lg">
              Reach us
            </button>

            <button className="animate-ping block py-4 px-8 bg-blue-500 text-blue-100 rounded-lg">
              Ping us
            </button>

            <button className="animate-pulse block py-4 px-8 bg-red-500 text-red-100 rounded-lg">
              Sign up
            </button>

            <button className="animate-bounce block py-4 px-8 bg-teal-500 text-teal-100 rounded-lg">
              Notification
            </button>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
