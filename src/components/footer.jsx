import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-blue-600">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Left side: Logo and Address */}
          <div>
            <img src="/mainlogo.png" alt="MobuisEngine Logo" className="h-15 mb-4" />
            <hr className="w-32 border-gray-300 mb-4" />
            <div className="text-sm">
              <p className="font-semibold mb-1">Address</p>
              <p>1875 Mission St Ste 103 #450</p>
              <p>San Francisco, CA 94103</p>
            </div>
          </div>

          {/* Middle: Email and Telephone */}
          <div className="flex flex-col gap-6">
            <div className="text-sm">
              <p className="font-semibold mb-1">Email</p>
              <a href="mailto:finance@mobiusengine.ai" className="underline">
                finance@mobiusengine.ai
              </a>
            </div>
            <div className="text-sm">
              <p className="font-semibold mb-1">Telephone</p>
              <a href="tel:650-889-6026" className="underline">
                650-889-6026
              </a>
            </div>
          </div>

          {/* Right: Socials */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold">Socials</p>
            <div className="flex gap-3">
              <div className="border-2 rounded-full p-2">
                <Linkedin size={20} />
              </div>
              <div className="border-2 rounded-full p-2">
                <Linkedin size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-blue-600 text-white text-sm flex justify-between items-center px-6 py-4">
        <p>© 2023 Mobiusservices LLC</p>
        <div className="flex gap-6">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
