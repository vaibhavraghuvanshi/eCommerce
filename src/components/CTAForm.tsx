
const CTAForm = () => {
  return (
    <section className="bg-gray-900 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
          Get in Touch with Us
        </h2>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full md:w-auto px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full md:w-auto px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Phone Input */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full md:w-auto px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTAForm;
