import React, { useState } from "react";
import API from "../api/axiousconfig"; // 👈 import your axios baseURL config

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear error when typing
  };

  const handleSubmit = async () => {
    // ✅ Validation for 10-digit number
    if (!/^\d{10}$/.test(formData.number)) {
      setError("⚠️ Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      const res = await API.post("/users", formData);
      if (res.status === 200 || res.status === 201) {
        setMessage("✅ We will connect shortly!");
        setError("");
        setFormData({ name: "", number: "" }); // reset form
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-gray-50 px-4 sm:px-6 md:px-6 py-8 poppins-regular">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Left: Banner Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/Images/HeroSection/hero-new-banner.png"
            alt="Hero Banner"
            className="w-full max-w-[500px] h-auto object-contain shadow-lg"
          />
        </div>

        {/* Right: Lead Form + Text */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start md:pl-8">
          <div className="text-center md:text-center space-y-2">
            <p className="text-gray-800 text-lg font-semibold">
              Scalp Restoration Therapy, Surgery, & More – All at One <br className="hidden md:block" /> Trusted Centre.
            </p>
            <p className="text-black text-sm sm:text-base">
              Location: E1, 52, North Ave, West Punjabi Bagh <br /> New Delhi 110026
            </p>
            <p className="text-lg sm:text-xl mt-1">100% assured results</p>
            <p className="text-lg sm:text-xl font-semibold">0% EMI Options available</p>
          </div>

          <div className="flex justify-center items-center my-6 w-full">
            <img
              src="/Images/HeroSection/new-review-1.png"
              alt="Google Reviews"
              className="h-16 sm:h-20 w-auto"
            />
          </div>

          <div className="w-full max-w-md space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-black rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Your Phone"
              className="border border-black rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              onClick={handleSubmit}
              className="bg-black text-white py-2 text-md rounded-md w-full sm:w-[250px] 
                         transition-all duration-300 ease-in-out 
                         hover:bg-gray-900 hover:scale-105 hover:shadow-lg mx-auto block"
            >
              Book Free Consultation Now
            </button>

            {/* Error Message */}
            {error && (
              <p className="text-center mt-2 text-red-600 font-medium">{error}</p>
            )}

            {/* Success/Error Message */}
            {message && !error && (
              <p className="text-center mt-2 text-green-600 font-medium">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
