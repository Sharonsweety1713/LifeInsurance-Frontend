import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PolicyCards = () => {
  const policies = [
    {
      title: 'VitalSecure Life Plan',
      description: 'Comprehensive life coverage to ensure your family’s financial security in any eventuality.',
    },
    {
      title: 'EchoGuard Family Coverage',
      description: 'Family-focused insurance plan that covers all members, providing peace of mind and security.',
    },
    {
      title: 'Lifeline Assurance Policy',
      description: 'Assured life coverage with benefits that cater to critical needs and emergencies.',
    },
    {
      title: 'EchoFlex Term Insurance',
      description: 'Flexible term insurance with customizable coverage periods and premium options.',
    },
    {
      title: 'SecureGuard Plan',
      description: 'Robust plan offering extensive coverage and benefits to protect your loved ones.',
    },
    {
      title: 'VitalFuture Protection Plan',
      description: 'Long-term protection ensuring a secure future for you and your family with extensive benefits.',
    },
  ];

  return (
    <section id="policies" className="py-10">
      <div className="policy-cards-container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">
            Our <span className="text-customGreen">Insurance</span> Policies
          </h2>
          <p className="relative inline-block mt-2">
            <i className="fas fa-gear text-2xl"></i>
            <span className="absolute left-[-70px] top-[50%] transform[-translate-y-1/2] w-12 h-px bg-gray-800"></span>
            <span className="absolute right-[-70px] top-[50%] transform[-translate-y-1/2] w-12 h-px bg-gray-800"></span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden transform transition-transform hover:scale-105 hover:border-4 hover:border-customGreen"
            >
              <div className="relative z-10">
                <div className="bg-customGreen text-white text-3xl h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                  <ShieldCheck className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{policy.title}</h3>
                <p className="text-gray-700">{policy.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-customGreen to-pink-500 opacity-0 z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyCards;
