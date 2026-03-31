import React from "react";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
 <footer className="bg-black text-white poppins-regular">
  {/* Contact Info */}
  <div className="text-center py-10">
    <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

    <div className="flex flex-col items-center space-y-4">
      {/* Address */}
      <div className="flex items-start space-x-3 max-w-2xl text-lg">
  <MapPin size={24} className="text-red-500 mt-1" />
  <div className="flex flex-col">
    <span>
      Location: E1, 52, North Ave, West Punjabi Bagh,
    </span>
    <span className="text-center">New Delhi 110026</span>
  </div>
</div>


      {/* Phone */}
      <div className="flex items-center space-x-3 text-lg">
        <Phone size={24} className="text-green-400" />
        <a href="tel:+919992421717" className="hover:underline">
          +91-9992421717
        </a>
      </div>
    </div>
  </div>

  {/* Google Map Embed */}
  <div className="max-w-5xl mx-auto h-80 px-4 pb-10">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3500.6609420644218!2d77.12473172550216!3d28.669869175644415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSkin%20DNA%20Clinic%20%7C%20Dr%20Mayuri%20Jain%20%7C%20Best%20Dermatologist%20in%20Punjabi%20Bagh%20Reviews!5e0!3m2!1sen!2sin!4v1755758559726!5m2!1sen!2sin"
      className="w-full h-full rounded-lg shadow-lg border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Clinic Location"
    ></iframe>
  </div>
</footer>

  );
}
