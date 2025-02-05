// import { Card } from "@/components/ui/card";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const TestimonialSection: React.FC = () => {
//   return (
//     <section className="flex flex-col items-center text-center px-4 py-12 md:px-8">
//       <h2 className="text-3xl font-bold mb-4">
//         <span className="bg-yellow-300 px-1">Test</span>imonials
//       </h2>
//       <p className="text-gray-600 max-w-2xl mb-6">
//         Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind.
//       </p>
//       <Card className="p-6 max-w-2xl shadow-md">
//         <blockquote className="text-lg font-medium text-gray-900">
//           "Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customize it and integrate within a Laravel + Vue application."
//         </blockquote>
//         <div className="mt-4 flex items-center justify-center space-x-2">
//           <img
//             src="https://randomuser.me/api/portraits/men/32.jpg"
//             alt="Neil Sims"
//             className="w-10 h-10 rounded-full"
//           />
//           <div className="text-sm text-gray-700">
//             <span className="font-semibold">Neil Sims</span> &middot; CTO at Microsoft
//           </div>
//         </div>
//       </Card>
//       <div className="flex mt-4 space-x-4">
//         <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
//           <FaArrowLeft />
//         </button>
//         <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
//           <FaArrowRight />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;


import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Card } from "@/components/ui/card"; // Adjust import path based on your setup
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customize it, and integrate within a Laravel + Vue application.",
    name: "Neil Sims",
    position: "CTO at Microsoft",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Tailwind makes styling so much easier! With Flowbite components, I was able to design an entire dashboard in just a few hours.",
    name: "Sarah Johnson",
    position: "Product Designer at Spotify",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Using Flowbite and Tailwind together has improved our workflow tremendously. I highly recommend it to any frontend developer.",
    name: "David Lee",
    position: "Frontend Engineer at Google",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "The documentation is superb, and the prebuilt components save so much time. I'm genuinely impressed with Flowbite.",
    name: "Emily Carter",
    position: "UI/UX Designer at Apple",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const TestimonialSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="flex flex-col items-center text-center px-4 py-12 md:px-8 bg-slate-100">
      <h2 className="text-3xl font-bold mb-4">
        <span className="bg-yellow-300 px-1">Test</span>imonials
      </h2>
      <p className="text-gray-600 max-w-2xl mb-6">
        Explore the whole collection of open-source web components and elements
        built with the utility classes from Tailwind.
      </p>
      <Card className="p-6 max-w-2xl shadow-md">
        {/* Motion div for animation */}
        <motion.div
          key={index} // Ensures re-render for animation
          initial={{ opacity: 0, x: 50 }} // Start position
          animate={{ opacity: 1, x: 0 }} // End position
          exit={{ opacity: 0, x: -50 }} // Exit position
          transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
        >
          <blockquote className="text-lg font-medium text-gray-900">
            "{testimonials[index].quote}"
          </blockquote>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-10 h-10 rounded-full"
            />
            <div className="text-sm text-gray-700">
              <span className="font-semibold">{testimonials[index].name}</span>{" "}
              &middot; {testimonials[index].position}
            </div>
          </div>
        </motion.div>
      </Card>
      {/* Navigation Buttons */}
      <div className="flex mt-4 space-x-4">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;

