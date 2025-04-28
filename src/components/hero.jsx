import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row px-6 py-16 items-center justify-center gap-10 min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-400 to-blue-900 text-white">
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Land job interviews
        </h1>
        <h2 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-blue-700 px-4 py-2 rounded-2xl">
            10x
          </span> faster
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Custom-built resumes that match your goals, keywords, and recruiter expectations.
        </p>
        <a href="#" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-transform duration-300 inline-flex items-center">
          Get Started
          <svg className="w-5 h-5 ml-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4 10L8.4 5L9.8 3.6L17.2 11L9.8 18.4L8.4 17L13.4 12H3V10H13.4Z" fill="currentColor"/>
          </svg>
        </a>
      </div>

      <div className="relative">
        <div className="bg-white p-4 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <img src="/heroimage.png" alt="Illustration showing hiring trends and resume tips" className="w-72" />
        </div>

        <div className="absolute -bottom-6 right-0 bg-white text-blue-600 py-3 px-5 rounded-full shadow-lg flex items-center text-sm hover:scale-105 transition-transform duration-300">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 19H21V21H3V19ZM13 13.172L19.071 7.1L20.485 8.514L12 17L3.515 8.515L4.929 7.1L11 13.17V2H13V13.172Z" fill="currentColor"/>
          </svg>
          <span>Download Free E-Book</span>
        </div>
      </div>
    </section>
  );
}
