import React from "react";

const ImgWithHeading: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We didn't reinvent the wheel
          </h2>
          <p className="text-gray-600 mt-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to deliver
            the scope you want at the pace you need. Small enough to be simple and
            quick, but big enough to deliver the scope you want at the pace you
            need.
          </p>
          <p className="text-gray-600 mt-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
      </div>
    </section>
  );
};

export default ImgWithHeading;
