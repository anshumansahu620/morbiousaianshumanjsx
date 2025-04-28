export default function WhyChooseUs() {
    const features = [
      {
        id: 1,
        title: "Tried, Tested, Trusted",
        description:
          "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318C5.03 5.606 6.093 5 7.414 5c1.32 0 2.384.606 3.096 1.318l1.414 1.414 1.414-1.414C14.202 5.606 15.266 5 16.586 5c1.32 0 2.384.606 3.096 1.318a4.372 4.372 0 011.318 3.096c0 1.32-.606 2.384-1.318 3.096L12 21l-8.682-8.682A4.372 4.372 0 014 9.414c0-1.32.606-2.384 1.318-3.096z" />
          </svg>
        ),
      },
      {
        id: 2,
        title: "Real People, Real Help",
        description:
          "A hands-on team that actually cares — guiding you through every twist in your career path.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9.969 9.969 0 0112 15c2.21 0 4.248.716 5.879 1.804M15 12a3 3 0 10-6 0 3 3 0 006 0z" />
          </svg>
        ),
      },
      {
        id: 3,
        title: "Beat the Line",
        description:
          "We search, shortlist, and apply for you, so your name shows up first — every single day.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ),
      },
    ];
  
    return (
<section className="bg-blue-50 rounded-2xl p-10 mx-auto my-10 w-3/4">
  <h2 className="text-2xl font-semibold text-blue-600 mb-10">Why Choose Us?</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {features.map((feature) => (
      <div
        key={feature.id}
        className="flex flex-col items-start p-6 border rounded-xl bg-white hover:shadow-md transition"
      >
        {feature.icon}
        <h3 className="mt-4 text-lg font-semibold text-blue-800">{feature.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
      </div>
    ))}
  </div>
</section>

    );
  }
  