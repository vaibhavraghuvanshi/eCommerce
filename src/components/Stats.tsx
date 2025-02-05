import { Lock, User, CreditCard, Globe } from "lucide-react";
import TableProf from "../assets/table-professor.svg"

const stats = [
  {
    icon: <Lock className="text-blue-600 w-6 h-6" />,
    value: "$76 billion",
    description: "24h trading volume on Flowbite exchange",
  },
  {
    icon: <User className="text-blue-600 w-6 h-6" />,
    value: "90%",
    description: "of U.S adults have bought from businesses using Flowbite",
  },
  {
    icon: <CreditCard className="text-blue-600 w-6 h-6" />,
    value: "135+",
    description: "currencies and payment methods supported",
  },
  {
    icon: <Globe className="text-blue-600 w-6 h-6" />,
    value: "40%",
    description: "countries with local acquiring optimizing acceptance rates",
  },
];

const Stats = () => {
  return (
   <>
    <section className="container mx-auto px-6 py-6">
       
       <div className="flex flex-col md:flex-row items-center gap-10">
         {/* Left Side - Stats */}
         <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold text-gray-900">Stats that matter</h2>
           <p className="mt-4 text-gray-600">
             Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.
           </p>
 
           <div className="mt-6 space-y-6">
             {stats.map((stat, index) => (
               <div key={index} className="flex items-center space-x-4">
                 <div className="p-3 rounded-full bg-blue-100">{stat.icon}</div>
                 <div>
                   <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                   <p className="text-gray-600">{stat.description}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
 
         {/* Right Side - Image */}
         <div className="w-full md:w-1/2 flex justify-center items-center">
           <img
             src={TableProf}
             alt="Illustration"
             className="max-w-md w-full object-contain"
           />
         </div>
       </div>
     </section>
     <div>
          <hr/>
     </div>
   </>
  );
};

export default Stats;
