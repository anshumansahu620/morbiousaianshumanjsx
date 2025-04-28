import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";

export default function MobiusEngineLanding() {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-900 min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
