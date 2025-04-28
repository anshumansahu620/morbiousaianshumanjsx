export default function Pricings() {
  const weeklyPlans = [
    {
      title: "April Promo",
      price: "$35",
      frequency: "/week",
      features: [
        "Curated jobs from live listings",
        "Up to 20 human-updated roles per day",
        "Hand-picked ATS-ready apps for your search",
        "1-on-1 dedicated application reviewer",
        "Personalized setup with 10 filters (e.g. job titles)"
      ],
      buttonText: "Get Started",
      badge: null,
    },
    {
      title: "Starter",
      price: "$50",
      frequency: "/week",
      features: [
        "All perks of Promo Plan, plus",
        "Resume review + story-focused feedback",
        "Dedicated search specialist",
        "Up to 50 job apps/week",
        "Extra apps at $5 each",
        "Analyst support within 6 hours (9–5 PT hours)"
      ],
      buttonText: "Get Started",
      badge: "Popular",
    },
    {
      title: "Plus",
      price: "$100",
      frequency: "/week",
      features: [
        "Everything in Starter, with more muscle",
        "Up to 75 apps/week",
        "Apply to 15-18 roles",
        "Analyst + full application team on Pacific hours"
      ],
      buttonText: "Get Started",
      badge: null,
    },
  ];

  const advancePlan = {
    title: "Advance",
    price: "$150",
    frequency: "/week",
    description: "Top-tier support for serious job hunters.",
    features: [
      "Everything in Plus",
      "20 fully customized applications/week",
      "Access to senior resume experts",
      "Custom Resumes & Cover Letters",
      "Help with complex job searches"
    ],
    buttonText: "Get Started",
  };

  const coachingPlans = [
    {
      title: "Resume Rebuild",
      price: "$1000",
      frequency: "one time",
      features: [
        "3–30 min coaching",
        "Storytelling and positioning",
        "ATS-ready resume",
        "Tailored to target company or role",
        "Direct work w/ co-founder",
        "Executive coaching (UC Berkeley alum)",
        "Updated LinkedIn profile"
      ],
      buttonText: "Get Started",
    },
    {
      title: "Interview Prep",
      price: "$500",
      frequency: "one time",
      features: [
        "2× 45-min live coaching",
        "Real-time practice & feedback",
        "Build clarity, empathy, presence",
        "Special prep for technical/senior roles"
      ],
      buttonText: "Get Started",
    },
  ];

  return (
    <section className="py-16 px-6 mx-auto w-4/5">
      {/* Weekly Plans */}
      <h2 className="text-3xl font-semibold text-blue-700 mb-10">Job Application Service Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {weeklyPlans.map((plan, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 border rounded-xl bg-white hover:shadow-lg transition"
          >
            <div>
              <h3 className="text-lg font-semibold text-blue-800">{plan.title}</h3>
              {plan.badge && (
                <span className="inline-block mt-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  {plan.badge}
                </span>
              )}
              <p className="text-4xl font-bold text-blue-700 mt-4">
                {plan.price}
                <span className="text-lg font-normal">{plan.frequency}</span>
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>✅</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
              {plan.buttonText} →
            </button>
          </div>
        ))}
      </div>

      {/* Advance Plan */}
      <div className="bg-blue-600 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold">{advancePlan.title}</h3>
          <p className="mt-2">{advancePlan.description}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {advancePlan.features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span>✅</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold">{advancePlan.price}<span className="text-lg font-normal">{advancePlan.frequency}</span></p>
          <button className="mt-4 bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-blue-100 transition">
            {advancePlan.buttonText} →
          </button>
        </div>
      </div>

      {/* Coaching Plans */}
      <h2 className="text-3xl font-semibold text-blue-700 mb-10">Resume Building & Coaching</h2>
      <p className="text-gray-600 mb-10 max-w-2xl">Let’s talk about where you’re headed — and how your resume can get you there. Schedule a call to get started.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coachingPlans.map((plan, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 border rounded-xl bg-white hover:shadow-lg transition"
          >
            <div>
              <h3 className="text-lg font-semibold text-blue-800">{plan.title}</h3>
              <p className="text-4xl font-bold text-blue-700 mt-4">
                {plan.price}
                <span className="text-lg font-normal"> {plan.frequency}</span>
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>✅</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
              {plan.buttonText} →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
