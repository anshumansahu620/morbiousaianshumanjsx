import { ArrowRight } from "lucide-react";

export default function ContactUsBanner() {
  return (
    <section className="flex justify-center py-16 h-84">
      <div className="bg-blue-700 w-[70%] rounded-2xl p-8 flex items-center justify-between text-white">
        {/* Left side */}
        <div>
          <p className="text-sm font-medium">STILL HAVE DOUBTS?</p>
        </div>

        {/* Center side */}
        <div className="flex-1 flex justify-center">
          <h2 className="text-4xl font-extrabold">Contact us</h2>
        </div>

        {/* Right side */}
        <div className="bg-white text-blue-600 rounded-full p-2">
          <ArrowRight size={28} />
        </div>
      </div>
    </section>
  );
}
