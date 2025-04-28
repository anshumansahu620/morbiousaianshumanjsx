import React from "react";

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      title: "Submit Intake Form",
    },
    {
      id: 2,
      title: "We do the search and curation for list of jobs",
    },
    {
      id: 3,
      title: "You approve, we do the tedious part (applying)",
    },
    {
      id: 4,
      title: "You get the interviews",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-white h-100">
      <h2 className="text-3xl font-semibold text-blue-700 mb-12">How we work?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-700 text-2xl font-semibold text-black mb-4">
              {step.id}
            </div>
            <div className="w-16 h-0.5 bg-blue-700 mb-4"></div>
            <p className="text-blue-700 text-base">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
