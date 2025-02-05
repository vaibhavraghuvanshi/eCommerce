import React from "react";
import { Fingerprint, ShieldCheck, CheckCircle } from "lucide-react";

const features = [
  {
    icon: <Fingerprint size={40} className="text-blue-600" />,
    title: "Secure storage",
    description: "We store the vast majority of the digital assets in secure offline storage.",
    link: "Learn how to keep your funds safe",
  },
  {
    icon: <ShieldCheck size={40} className="text-blue-600" />,
    title: "Insurance",
    description: "Flowbite maintains crypto insurance and all USD cash balances are covered.",
    link: "Learn how your crypto is covered",
  },
  {
    icon: <CheckCircle size={40} className="text-blue-600" />,
    title: "Best practices",
    description: "Flowbite marketplace supports a variety of the most popular digital currencies.",
    link: "How to implement best practices",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          The most trusted cryptocurrency platform
        </h2>
        <p className="text-gray-600 mt-2">
          Here are a few reasons why you should choose Flowbite
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
              <a
                href="#"
                className="text-blue-600 mt-3 font-medium hover:underline"
              >
                {feature.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
