export default function ClientTestimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
    },
    {
      id: 2,
      text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
    },
    {
      id: 3,
      text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-12 py-16 bg-white">
      <h2 className="text-3xl font-semibold text-blue-600">
        What our clients have to say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col justify-between rounded-2xl border border-gray-300 overflow-hidden bg-white w-72 h-80 shadow-sm"
          >
            {/* Top part with play button */}
            <div className="flex-1 flex justify-center items-center bg-gray-100">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                {/* Play Icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 3v18l15-9-15-9z" />
                </svg>
              </div>
            </div>

            {/* Bottom part with text */}
            <div className="relative bg-blue-600 text-white p-4">
              <p className="text-sm leading-snug">
                Holly is a <strong>senior executive</strong> who got over <strong>10 job interviews</strong> and an offer she accepted
              </p>

              {/* Small white circle arrow button */}
              <div className="absolute bottom-4 right-4 w-7 h-7 bg-white rounded-full flex items-center justify-center">
                {/* Arrow Icon SVG */}
                <svg className="w-5 h-5 ml-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4 10L8.4 5L9.8 3.6L17.2 11L9.8 18.4L8.4 17L13.4 12H3V10H13.4Z" fill="blue"/>
          </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="flex gap-6 mt-8">
        <button className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-full text-sm hover:bg-blue-50 transition">
          More customer testimonials
          <svg className="w-5 h-5 ml-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4 10L8.4 5L9.8 3.6L17.2 11L9.8 18.4L8.4 17L13.4 12H3V10H13.4Z" fill="currentColor"/>
          </svg>
        </button>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm hover:bg-blue-700 transition">
          Get Started
          <svg className="w-5 h-5 ml-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4 10L8.4 5L9.8 3.6L17.2 11L9.8 18.4L8.4 17L13.4 12H3V10H13.4Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
