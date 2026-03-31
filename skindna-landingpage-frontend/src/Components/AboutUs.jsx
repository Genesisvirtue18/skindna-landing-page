import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import API from "../api/axiousconfig"; // 👈 axios config

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validate phone number
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

        // Auto close modal after 2s
        setTimeout(() => {
          setIsModalOpen(false);
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setMessage("");
      setError("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-16 px-6 md:px-20 text-center poppins-regular">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#008285] mb-6">About Us</h2>

      {/* Description */}
      <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">
        Dr. Mayuri Jain is an enthusiastic new-generation dermatologist and aesthetician who completed her MBBS from Barkatullah University, Bhopal, and MD in Dermatology from Jaipur.
      </p>

      <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto ">
        After completing her MD, she worked at Guru Teg Bahadur Hospital, Delhi, for three years, where she gained vast clinical experience in managing diverse skin conditions.
      </p>

      <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto ">
        With over 8 years of experience in clinical dermatology and aesthetic training, Dr. Mayuri Jain brings a strong passion for facial aesthetics and is known for creating artistic, natural-looking results through her treatments.
      </p>

      <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">
        She combines medical expertise with an eye for facial balance to offer personalized skin and hair care solutions tailored to each individual.
      </p>

      {/* Italic Subtext */}
      <p className="italic text-gray-900 font-medium mb-10">
        Real Experts. Real Results.
      </p>

      {/* Button */}
      <div className="flex justify-center">
        <button
  onClick={() => {
    setIsModalOpen(true);
    setError("");
    setMessage("");
    setFormData({ name: "", number: "" });
  }}
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

            <h2 className="text-center w-full text-3xl font-bold text-[#5C1C33] mb-6">
              Sign Up To Book A Free Consultation!
            </h2>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 text-md rounded-md"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="border p-2 text-md rounded-md"
                value={formData.number}
                onChange={(e) =>
                  setFormData({ ...formData, number: e.target.value })
                }
                required
              />

              {/* Messages */}
              {error && <p className="text-red-600 text-sm">{error}</p>}
              {message && <p className="text-green-600 text-sm">{message}</p>}

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
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
