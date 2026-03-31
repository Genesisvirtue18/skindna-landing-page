// src/components/Priority.jsx
import React, { useState } from "react";
import { FaThumbsUp, FaUserAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import API from "../api/axiousconfig"; // 👈 axios config

const Priority = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear error on typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validate number
    if (!/^\d{10}$/.test(formData.number)) {
      setError("⚠️ Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      const res = await API.post("/users", formData);
      if (res.status === 200 || res.status === 201) {
        setMessage("✅ We will connect shortly!");
        setError("");
        setFormData({ name: "", number: "" });
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      {/* Section 1 */}
      <section className="text-center py-12 bg-gradient-to-b from-gray-100 to-white poppins-regular">
        <h2 className="text-2xl md:text-3xl text-black">
          Your Hair, Our Priority — Trusted by{" "}
          <span className="">1000+ Clients & Counting</span>
        </h2>
        <p className="text-2xl md:text-3xl text-[#008285] mt-3 font-dancing">
          Book Your Hair Transformation Today!
        </p>

       <button
  className="mt-6 px-4 py-2 bg-[#008285] text-white rounded-xl font-medium 
             hover:bg-white hover:text-[#008285] hover:border hover:border-[#008285] 
             hover:shadow-lg hover:scale-105 
             transition-all duration-300 ease-in-out"
  onClick={() => setIsModalOpen(true)}
>
  Book Your Free Consultation
</button>

      </section>

      {/* Stats Section */}
      <section
        className="relative min-h-[250px] flex items-center poppins-regular bg-cover bg-center bg-no-repeat py-12"
        style={{ backgroundImage: "url('/Images/Icon/stats.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative max-w-6xl mx-auto w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center text-white gap-8 md:gap-4">
            {/* Box 1 */}
            <div className="flex flex-col items-center p-6 md:p-8 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <FaThumbsUp className="text-[#008285] text-4xl mb-4" />
              <h3 className="text-4xl font-semibold">
                <span className="block">100%</span>
                <span className="block text-lg mt-2 font-normal">
                  Proven Results
                </span>
              </h3>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center p-6 md:p-8 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 relative">
              <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 h-16 bg-gray-600 w-px"></div>
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 bg-gray-600 w-px"></div>

              <FaUserAlt className="text-[#008285] text-4xl mb-4" />
              <h3 className="text-4xl font-semibold">
                <span className="block">15k+</span>
                <span className="block text-lg mt-2 font-normal">
                  Happy Patients
                </span>
              </h3>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-center p-6 md:p-8 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <MdVerified className="text-[#008285] text-4xl mb-4" />
              <h3 className="text-4xl font-semibold">
                <span className="block">US FDA</span>
                <span className="block text-lg mt-2 font-normal">Approved</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center poppins-regular bg-black/50 z-50">
          <div className="bg-white w-[95%] md:w-[550px] p-10 shadow-2xl relative rounded-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <IoClose size={28} />
            </button>

            <h2 className="text-center w-full text-3xl font-bold text-[#5C1C33] mb-6">
              Sign Up To Book A Free Consultation!
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border p-2 text-md rounded-md"
                required
              />
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Your Phone"
                className="border p-2 text-md rounded-md"
                required
              />

              <div className="flex justify-center">
                <button
  type="submit"
  className="bg-black text-white py-2 text-md rounded-lg w-60
             hover:bg-white hover:text-black hover:border hover:border-black 
             hover:shadow-lg hover:scale-105
             transition-all duration-300 ease-in-out"
>
  Book Free Consultation Now
</button>

              </div>
            </form>

            {/* Error Message */}
            {error && (
              <p className="text-center mt-3 text-red-600 font-medium">
                {error}
              </p>
            )}

            {/* Success Message */}
            {message && !error && (
              <p className="text-center mt-3 text-green-600 font-medium">
                {message}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Priority;
