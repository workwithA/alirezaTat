import background from "../assets/contact.png";
import backgroundB from "../assets/contactB.png";
import pouria from "../assets/pouria.png"
import tat from "../assets/tat.png"
import arman from "../assets/arman.png"
import milad from "../assets/milad.png"

const Contact = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute -z-10 w-screen hidden overflow-hidden sm:block">
        <img
          src={background}
          alt="roynaenergy"
          className="min-w-[215%] md:min-w-[150%] lg:min-w-[120%] xl:min-w-[105%]"
        />
      </div>

      {/* start */}
      <div className="pt-20 flex flex-col justify-center items-center relative sm:flex-row">
        <div className="flex justify-center items-center sm:ml-40 md:ml-52 lg:ml-64 xl:ml-96">
          <div className="w-[300px] h-96 overflow-hidden flex justify-center items-center rounded-xl absolute top-20">
            <img
              src={backgroundB}
              alt="royanenergy"
              className="min-w-[220%] blur-sm"
            />
          </div>
          <div className="absolute top-32 flex flex-col gap-5 justify-center items-center">
            <h1 className="text-3xl font-blackOps text-white bg-gray-700 bg-opacity-70 rounded-xl p-2">
              Contact Us
            </h1>
            <div className="flex gap-5">
              <div className="flex justify-between items-center flex-col mt-2 gap-6">
                <i className="fa-solid fa-phone text-white text-3xl"></i>
                <i className="fa-solid fa-envelope text-white text-3xl"></i>
                <i className="fa-brands fa-linkedin text-white text-3xl"></i>
                <i className="fa-brands fa-square-github text-white text-3xl"></i>
              </div>
              <div className="flex justify-between items-center flex-col mt-3">
                <p className="w-11/12 text-white font-poppins">
                  +98 912 045 00 40
                </p>
                <p className="w-11/12 text-white font-poppins">
                  mail@royanenergy.ir
                </p>
                <p className="w-11/12 text-white font-poppins mb-2">
                  pouria-maleki
                </p>
                <p className="w-11/12 text-white font-poppins mb-2">
                  pouria-maleki
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* team */}
        <div className="w-screen flex flex-col items-center justify-center mt-[420px] sm:mt-2 sm:ml-40">
          <h1 className="text-3xl font-blackOps text-white bg-gray-700 bg-opacity-70 rounded-xl p-2">
            Our Team
          </h1>
          <div className="flex flex-col justify-center items-center gap-10 mt-5 mb-10 sm:flex-row sm:flex-wrap sm:gap-16 850:gap-3">
            <div className="flex flex-col justify-center items-center gap-2 sm:w-[25%] 850:w-[40%]">
              <img src={milad} alt="royanenergy" className="w-44 h-44 rounded-full sm:w-20 sm:h-20 850:w-28 850:h-28" />
              <strong className="font-poppins sm:text-white sm:text-nowrap sm:text-sm sm:bg-gray-700 sm:bg-opacity-70 sm:p-1 sm:rounded-xl">Seyed Milad Mousavi</strong>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 sm:w-[25%] 850:w-[40%]">
              <img src={pouria} alt="royanenergy" className="w-44 h-44 rounded-full sm:w-20 sm:h-20 850:w-28 850:h-28" />
              <strong className="font-poppins sm:text-white sm:text-nowrap sm:text-sm sm:bg-gray-700 sm:bg-opacity-70 sm:p-1 sm:rounded-xl">Pouria Maleki</strong>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 sm:w-[25%] 850:w-[40%]">
              <img src={tat} alt="royanenergy" className="w-44 h-44 rounded-full sm:w-20 sm:h-20 850:w-28 850:h-28" />
              <strong className="font-poppins sm:text-white sm:text-nowrap sm:text-sm sm:bg-gray-700 sm:bg-opacity-70 sm:p-1 sm:rounded-xl">Alireza Tat</strong>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 sm:w-[25%] 850:w-[40%]">
              <img src={arman} alt="royanenergy" className="w-44 h-44 rounded-full sm:w-20 sm:h-20 850:w-28 850:h-28" />
              <strong className="font-poppins sm:text-white sm:text-nowrap sm:text-sm sm:bg-gray-700 sm:bg-opacity-70 sm:p-1 sm:rounded-xl">Arman Parian Fard</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
