import React from "react";

const teamMembers = [
  {
    name: "Ashwin",
    role: "Founder",
    description: `Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.`,
    vision: `Ashwin’s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.`,
    imageUrl: "/ashwin.png",
    linkedinUrl: "#",
  },
  {
    name: "Nicole",
    role: "Executive Coach",
    description: `Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.`,
    extra: `With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.`,
    imageUrl: "/nicole.png",
    linkedinUrl: "#",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-[#020024] to-[#0000c3] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center">About Us</h2>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-16 space-y-8 md:space-y-0 md:space-x-12"
          >
            <div className="relative bg-white p-2 rounded-full">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover"
              />
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="text-left max-w-2xl">
              <p className="text-lg">
                <span className="font-bold">{member.name}</span>{" "}
                {member.description}
              </p>
              {member.vision && <p className="mt-4">{member.vision}</p>}
              {member.extra && <p className="mt-4">{member.extra}</p>}
            </div>
          </div>
        ))}
        <div className="text-center mt-12 space-y-4">
          <a href="#" className="text-sm hover:text-blue-300">
            Learn more about our Board of Advisors{" "}
            <span className="ml-2">→</span>
          </a>
          <br />
          <a href="#" className="text-sm hover:text-blue-300">
            Follow us on our LinkedIn page <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
