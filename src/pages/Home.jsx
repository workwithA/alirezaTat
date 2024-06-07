import background from "../assets/home.png";
import logo from "../assets/logo.png";
import tavanir from "../assets/tavanir.png";
import hamedan from "../assets/hamedan.png";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute -z-10 w-screen hidden overflow-hidden sm:block">
        <img src={background} alt="roynaenergy" className="min-w-[215%] md:min-w-[150%] lg:min-w-[120%] xl:min-w-[105%]" />
      </div>
      <div className="w-full overflow-hidden">
        <header className="pt-2 sm:pt-0">
          <img
            src={logo}
            alt="royanenergy"
            className="w-7/12 mx-auto sm:w-5/12 md:w-4/12 lg:w-3/12"
          />
          <h1 className="font-blackOps text-4xl text-center -mt-8 sm:text-white sm:bg-gray-700 sm:bg-opacity-80 sm:w-10/12 sm:mx-auto sm:rounded-xl lg:w-6/12 xl:text-5xl xl:w-7/12">
            Royan Energy Milad Noor
          </h1>
        </header>
        <main className="px-5 sm:py-2 lg:w-10/12 lg:mx-auto">
          <p className="font-poppins text-sm text-center opacity-80 sm:text-white sm:bg-gray-700 sm:bg-opacity-80 sm:rounded-xl md:px-2 xl:text-base">
            Consulting and Project Management for Renewable Energy
            Implementations With the aim of sustainable utilization of energy
            resources and the advancement of related technologies.
          </p>
        </main>
        <footer className="w-full px-5 flex justify-around items-center mt-5 sm:mt-0 md:mt-5">
          <div className="w-24 h-24 flex justify-center items-center sm:bg-gray-700 sm:bg-opacity-50 sm:rounded-xl">
            <img src={hamedan} alt="royanenergy" />
          </div>
          <div className="w-24 h-24 flex justify-center items-center sm:bg-gray-700 sm:bg-opacity-50 sm:rounded-xl">
            <img src={tavanir} alt="royanenergy" className="w-8/12" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
