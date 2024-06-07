import background from "../assets/about.png";

const About = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute -z-10 w-screen hidden overflow-hidden sm:block">
        <img
          src={background}
          alt="roynaenergy"
          className="min-w-[240%] sm:min-w-[250%] md:min-w-[200%] lg:min-w-[135%] xl:min-w-[135%]"
        />
      </div>
      <div className="pt-24 pb-10">
        <h1 className="text-3xl font-blackOps text-center sm:bg-gray-700 sm:bg-opacity-60 sm:rounded-xl sm:p-2 sm:w-5/12 sm:mx-auto sm:text-white md:w-3/12 xl:w-2/12">About Us</h1>
        <h3 className="text-xl font-sans font-bold opacity-90 text-center px-2 sm:bg-gray-700 sm:bg-opacity-60 sm:rounded-xl sm:p-2 sm:w-8/12 sm:mx-auto sm:text-white sm:mt-2 sm:opacity-80 md:w-6/12 xl:w-4/12">Welcome to Royan Energy Milad Noor</h3>
        <p className="text-center font-poppins text-sm my-5 px-5 shadow-md py-2 sm:bg-gray-700 sm:bg-opacity-70 sm:w-11/12 sm:rounded-xl sm:mx-auto sm:text-white sm:opacity-80 md:w-10/12 xl:w-8/12">
          At Royan Energy Milad Noor, we are dedicated to harnessing the power
          of renewable energy to create a sustainable future. Since our
          inception in 2016, we have been providing consultancy and project
          management services in the field of renewable energy. Our focus is on
          producing electricity through wind turbines and solar panels, striving
          to improve and innovate in renewable energy technologies.
        </p>
        <p className="text-center font-poppins text-sm my-5 px-5 shadow-md py-2 sm:bg-gray-700 sm:bg-opacity-70 sm:w-11/12 sm:rounded-xl sm:mx-auto sm:text-white sm:opacity-80 md:w-10/12 xl:w-8/12">
          Our mission is to promote the sustainable utilization of energy
          resources and advance the technologies that make this possible. We
          believe in the potential of renewable energy to address environmental
          challenges and contribute to a cleaner, healthier planet.
        </p>
        <p className="text-center font-poppins text-sm my-5 px-5 shadow-md py-2 sm:bg-gray-700 sm:bg-opacity-70 sm:w-11/12 sm:rounded-xl sm:mx-auto sm:text-white sm:opacity-80 md:w-10/12 xl:w-8/12">
          Our expert team in research and development works tirelessly to
          enhance the efficiency and effectiveness of our energy production
          processes. We are committed to reducing environmental impact and
          leading the way in the renewable energy sector in Iran.
        </p>
        <p className="text-center font-poppins text-sm my-5 px-5 shadow-md py-2 sm:bg-gray-700 sm:bg-opacity-70 sm:w-11/12 sm:rounded-xl sm:mx-auto sm:text-white sm:opacity-80 md:w-10/12 xl:w-8/12">
          In addition to our technical expertise, we pride ourselves on our
          collaborative approach, working closely with clients to tailor
          solutions that meet their specific needs. Our commitment to excellence
          and sustainability drives us to continuously seek out new
          opportunities for growth and innovation. Join us on our journey
          towards a sustainable future, powered by the endless possibilities of
          renewable energy.
        </p>
      </div>
    </div>
  );
};

export default About;
