import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import API from "../api/axiousconfig"; // 👈 axios config

const Stage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validate number
    if (!/^\d{10}$/.test(formData.number)) {
      setError("⚠️ Please enter a valid 10-digit mobile number.");
      setMessage("");
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
    <section className="px-6 md:px-20 text-center poppins-regular">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#008285] mb-6">
        What are the stages of hair loss?
      </h2>

      {/* Image */}
      <div className="mb-6">
        <img
          src="/Images/Stage/stage.png"
          alt="Stages of Hair Loss"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#008285] text-white px-8 py-3 rounded-lg font-medium shadow-md
             hover:bg-white hover:text-[#008285] hover:border hover:border-[#008285]
             hover:shadow-lg hover:scale-105
             transition-all duration-300 ease-in-out"
        >
          Book Your Free Consultation
        </button>

      </div>

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

            <h2 className="text-center w-full text-2xl md:text-3xl font-bold text-[#5C1C33] mb-6">
              Sign Up To Book A Free Consultation!
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border p-3 text-md rounded-md focus:ring-2 focus:ring-red-400 outline-none"
                required
              />
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Your Phone"
                className="border p-3 text-md rounded-md focus:ring-2 focus:ring-red-400 outline-none"
                required
              />

              {/* ✅ Error & Success Messages */}
              {error && <p className="text-red-600 text-sm">{error}</p>}
              {message && <p className="text-green-600 text-sm">{message}</p>}

              <div className="flex justify-center mt-4">
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Stage;
