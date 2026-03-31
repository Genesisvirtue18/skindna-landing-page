import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import API from "../api/axiousconfig"; // 👈 axios config

const WhyClinic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const items = [
    { img: "/Images/WhySkinDNA/reduce-hair-fall.jpg", title: "Reduced Hair Fall" },
    { img: "/Images/WhySkinDNA/treatment-2.jpg", title: "Simple & Effective Treatment" },
    { img: "/Images/WhySkinDNA/treatment-3.jpg", title: "Boosted Hair Growth" },
    { img: "/Images/WhySkinDNA/treatment-4.avif", title: "Custom Hair Solutions" },
  ];

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
    <section className="bg-[#008285] py-16 text-white poppins-regular">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Skin DNA Clinic?
        </h2>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center mb-4">
                <div className="w-28 h-28 rounded-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="text-lg font-semibold">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              setIsModalOpen(true);
              setError("");
              setMessage("");
              setFormData({ name: "", number: "" });
            }}
            className="bg-white text-black px-6 py-3 rounded-lg font-medium shadow-md 
             border border-[#008285]
             hover:bg-[#008285] hover:text-white hover:shadow-lg hover:scale-105
             transition-all duration-300 ease-in-out"
          >
            Book Your Free Consultation
          </button>
        </div>
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
                className="border border-black p-2 text-md rounded-md"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="border border-black p-2 text-md rounded-md"
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

export default WhyClinic;
